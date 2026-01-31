import { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeProvider";
import {
  FileText,
  Repeat,
  Layers,
  Shield,
  Cloud,
  Workflow,
} from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Multi-Format Conversion",
    date: "Convert",
    content: "PDF ↔ Word ↔ Excel ↔ HTML — with layout & metadata preserved.",
    category: "conversion",
    icon: Repeat,
    relatedIds: [2, 5],
  },
  {
    id: 2,
    title: "Batch Processing",
    date: "Scale",
    content: "Convert huge document sets in parallel with maximum throughput.",
    category: "processing",
    icon: Layers,
    relatedIds: [1, 3, 5],
  },
  {
    id: 3,
    title: "Audit & Compliance",
    date: "Security",
    content:
      "Security + validation ensure regulatory compliance & traceability.",
    category: "compliance",
    icon: Shield,
    relatedIds: [2, 4],
  },
  {
    id: 4,
    title: "Cloud Integrations",
    date: "Connect",
    content: "Azure, AWS, GDrive, SharePoint & Enterprise ECM systems ready.",
    category: "integration",
    icon: Cloud,
    relatedIds: [3, 5],
  },
  {
    id: 5,
    title: "Automation-Ready",
    date: "Pipeline",
    content: "Connect doc flows into AI-powered transformation pipelines.",
    category: "automation",
    icon: Workflow,
    relatedIds: [1, 2, 4],
  },
];

export default function docshiftCap() {
  const [expandedItems, setExpandedItems] = useState({});
  const [centerExpanded, setCenterExpanded] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  // Detect whether the device supports hover & fine pointer (preferred) so hover handlers work correctly
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
      const update = () => setIsTouchDevice(!mq.matches);
      // set initial value
      update();
      // listen for changes (some devices can change when rotating / connecting peripherals)
      if (typeof mq.addEventListener === "function") mq.addEventListener("change", update);
      else mq.addListener(update);
      return () => {
        if (typeof mq.removeEventListener === "function") mq.removeEventListener("change", update);
        else mq.removeListener(update);
      };
    }
  }, []);
  // responsive orbit radius (used to compute node positions)
  const [orbitRadius, setOrbitRadius] = useState(300);

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setCenterExpanded(false);
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        setCenterExpanded(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  const toggleCenterCore = () => {
    setCenterExpanded(!centerExpanded);
    setExpandedItems({});
    setActiveNodeId(null);
    setPulseEffect({});
    setAutoRotate(!centerExpanded);
  };

  // Open a node (used for hover/focus on pointer devices) — only open the card
  const openItem = (id) => {
    setExpandedItems(() => {
      const newState = {};
      timelineData.forEach((i) => {
        newState[i.id] = false;
      });
      newState[id] = true;
      return newState;
    });
  };

  const closeItem = (id) => {
    // Close any open cards (no side-effects) 
    setExpandedItems({});
  };

  useEffect(() => {
    let rotationTimer;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 1.0) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  // update orbit radius responsively based on container width
  useEffect(() => {
    function updateRadius() {
      const el = orbitRef.current || containerRef.current;
      if (!el) return;
      const width = el.clientWidth || el.offsetWidth || window.innerWidth;
      // prefer a fraction of width but clamp it for larger screens
      const calculated = Math.max(80, Math.min(300, Math.floor(width * 0.35)));
      setOrbitRadius(calculated);
    }

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = orbitRadius || 300;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.35,
      Math.min(1, 0.3 + 0.7 * ((1 + Math.sin(radian)) / 2)),
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  return (
    <div
      className={`w-full min-h-screen flex flex-col transition-colors duration-300 ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      {/* Header Section */}
      <div className="w-full py-4 sm:py-2 px-4 text-center">
        <h2
          className={`text-3xl sm:text-6xl md:text-7xl lg:text-6xl font-semibold text-center pb-4 
    bg-clip-text text-transparent
    bg-gradient-to-b
    from-gray-900 via-gray-700 to-gray-500
    dark:from-purple-200 dark:via-purple-300 dark:to-purple-500
    tracking-tight`}
        >
          Key Capabilities
        </h2>
      </div>

      {/* Orbital Timeline Section */}
      <div
        className="w-full flex-1 flex items-center justify-center "
        ref={containerRef}
        onClick={handleContainerClick}
      >
          <div className="relative w-full max-w-6xl min-h-[320px] sm:min-h-[520px] md:min-h-[800px] flex items-center justify-center">
          <div
            className="absolute w-full h-full flex items-center justify-center"
            ref={orbitRef}
            style={{
              perspective: "800px",
            }}
          >
            {/* Center Core */}
            <div
              className={`absolute w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br animate-pulse flex items-center justify-center z-10 cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                centerExpanded ? "scale-125 shadow-2xl" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                toggleCenterCore();
              }}
            >
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-teal-400/20 animate-ping opacity-70"></div>
              <div
                className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-blue-400/10 animate-ping opacity-50"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <FileText
                className={`w-8 h-8 sm:w-10 sm:h-10 ${theme === "dark" ? "text-white" :"text-black"}`}
              />
            </div>

            {/* Orbit Ring (responsive) */}
            <div
              className="absolute rounded-full pointer-events-none"
              aria-hidden
              style={{
                width: `${orbitRadius * 2}px`,
                height: `${orbitRadius * 2}px`,
              }}
            >
              <div
                className="w-full h-full rounded-full border"
                style={{
                  borderColor:
                    theme === "dark"
                      ? "rgba(20,184,166,0.35)"
                      : "rgba(0,0,0,0.5)",
                  borderWidth: "2px",
                }}
              />
            </div>

           
               
            {/* Timeline Nodes */}
            {timelineData.map((item, index) => {
              const position = calculateNodePosition(
                index,
                timelineData.length,
              );
              const isExpanded = expandedItems[item.id];
              const isRelated = isRelatedToActive(item.id);
              const isPulsing = pulseEffect[item.id];
              const Icon = item.icon;

              const nodeStyle = {
                transform: `translate(${position.x}px, ${position.y}px)`,
                zIndex: isExpanded ? 200 : position.zIndex,
                opacity: isExpanded ? 1 : position.opacity,
              };

              return (
                <div
                  key={item.id}
                  ref={(el) => (nodeRefs.current[item.id] = el)}
                  className="absolute transition-all duration-400 cursor-pointer"
                  style={nodeStyle}
                  // For pointer devices show on hover/focus; on touch devices keep click behavior
                  {...(!isTouchDevice
                    ? {
                        onMouseEnter: (e) => {
                          e.stopPropagation();
                          openItem(item.id);
                        },
                        onMouseLeave: (e) => {
                          e.stopPropagation();
                          closeItem(item.id);
                        },
                        onFocus: (e) => {
                          e.stopPropagation();
                          openItem(item.id);
                        },
                        onBlur: (e) => {
                          e.stopPropagation();
                          closeItem(item.id);
                        },
                      }
                    : {
                        onClick: (e) => {
                          e.stopPropagation();
                          toggleItem(item.id);
                        },
                      })}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.stopPropagation();
                      toggleItem(item.id);
                    }
                    if (e.key === "Escape") {
                      e.stopPropagation();
                      closeItem(item.id);
                    }
                  }}
                >
                  {/* Energy Glow */}
                  <div
                    className={`absolute rounded-full -inset-1 ${
                      isPulsing ? "animate-pulse duration-800" : ""
                    }`}
                    style={{
                      background: `radial-gradient(circle, ${
                        theme === "dark"
                          ? "rgba(255,255,255,0.2)"
                          : "rgba(0,0,0,0.1)"
                      } 0%, rgba(255,255,255,0) 70%)`,
                      // fallback energy to 0 when not provided
                      width: `${(item.energy || 0) * 0.5 + 40}px`,
                      height: `${(item.energy || 0) * 0.5 + 40}px`,
                      left: `-${((item.energy || 0) * 0.5 + 40 - 40) / 2}px`,
                      top: `-${((item.energy || 0) * 0.5 + 40 - 40) / 2}px`,
                    }}
                  ></div>

                  {/* Node Circle */}
                  <div
                    className={`
                    w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                    ${
                      isExpanded
                        ? theme === "dark"
                          ? "bg-white text-black"
                          : "bg-gray-500 text-white"
                        : isRelated
                          ? theme === "dark"
                            ? "bg-white/30 text-black"
                            : "bg-gray-700 text-white"
                          : theme === "dark"
                            ? "bg-black text-white"
                            : "bg-gray-300 text-black"
                    }
                    border-2 
                    ${
                      isExpanded
                        ? theme === "dark"
                          ? "border-white shadow-lg shadow-white/30"
                          : "border-gray-500 shadow-lg shadow-gray-900/30"
                        : isRelated
                          ? theme === "dark"
                            ? "border-white animate-pulse"
                            : "border-gray-700 animate-pulse"
                          : theme === "dark"
                            ? "border-white/40"
                            : "border-gray-600"
                    }
                    transition-all duration-300 transform
                    ${isExpanded ? "scale-150" : ""}
                  `}
                  >
                    <Icon size={isExpanded ? 22 : 16} />
                  </div>

                  {/* Node Title */}
                  <div
                    className={`
                    absolute top-8 sm:top-14 left-1/2 -translate-x-1/2 max-w-[90px] sm:max-w-[140px] truncate text-xs sm:text-sm font-semibold tracking-wider
                    transition-all duration-300
                    ${
                      isExpanded
                        ? theme === "dark"
                          ? "text-white scale-125"
                          : "text-gray-900 scale-125"
                        : theme === "dark"
                          ? "text-white/80"
                          : "text-black"
                    }
                  `}
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}

            {/* Expanded Cards in Center */}
            {Object.entries(expandedItems).map(([itemId, isExpanded]) => {
              if (!isExpanded) return null;

              const item = timelineData.find((i) => i.id === parseInt(itemId));
              if (!item) return null;

              return (
                <div
                  key={`card-${itemId}`}
                  className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 max-w-[90vw] rounded-lg shadow-2xl overflow-visible ${
                    theme === "dark"
                      ? "bg-gray-900/95 backdrop-blur-sm border border-white/30"
                      : "bg-white/95 backdrop-blur-sm border border-gray-300"
                  }`}
                  style={{
                    zIndex: 1000,
                  }}
                  onMouseEnter={() => openItem(item.id)}
                  onMouseLeave={() => closeItem()}
                  onFocus={() => openItem(item.id)}
                  onBlur={() => closeItem()}
                  tabIndex={0}
                >
                  {/* Card Header */}
                  <div className="p-6 pb-3">
                    <h3
                      className={`text-lg font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="px-6 pb-6">
                    <p
                      className={`text-sm ${
                        theme === "dark" ? "text-white/80" : "text-black"
                      }`}
                    >
                      {item.content}
                    </p>

                    {/* Connected Nodes */}
                    {item.relatedIds.length > 0 && (
                      <div
                        className={`mt-5 pt-4 border-t ${
                          theme === "dark"
                            ? "border-white/10"
                            : "border-gray-200"
                        }`}
                      >
                        <h4
                          className={`text-sm uppercase tracking-wider font-medium mb-3 ${
                            theme === "dark" ? "text-white/70" : "text-black"
                          }`}
                        >
                          Connected Nodes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find(
                              (i) => i.id === relatedId,
                            );
                            return (
                              <button
                                key={relatedId}
                                className={`px-3 py-2 text-sm rounded transition-all ${
                                  theme === "dark"
                                    ? "border border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white"
                                    : "border border-gray-300 bg-transparent hover:bg-gray-100 text-black hover:text-black"
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                              >
                                {relatedItem?.title} →
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
