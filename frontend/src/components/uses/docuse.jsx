import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeProvider";
import { Cpu, Activity, ShieldCheck, Users } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "IT Teams",
    icon: Cpu,
    description:
      "Integrate DocShift into existing pipelines to automate document ingestion, parsing, and validation at scale.",
    pairWith: 2,
  },
  {
    id: 2,
    title: "Automation Engineers",
    icon: Activity,
    description:
      "Build reliable, rule-driven or ML-based workflows to convert and normalize documents for downstream systems.",
    pairWith: 1,
  },
  {
    id: 3,
    title: "Government & Public Sector",
    icon: ShieldCheck,
    description:
      "Comply with regulatory and archival standards while automating forms, reports, and records processing.",
    pairWith: 4,
  },
  {
    id: 4,
    title: "Large Enterprises",
    icon: Users,
    description:
      "Scale document transformation across departments with centralized governance, auditing, and SLAs.",
    pairWith: 3,
  },
];

export default function DocUse() {
  const [flipped, setFlipped] = useState({});
  const { theme } = useTheme();
  const touchRef = useRef(false);
  const touchTimeoutRef = useRef(null);

  const toggleFlip = (card) => {
    const otherId = card.pairWith;
    setFlipped((s) => ({
      ...s,
      [card.id]: !s[card.id],
      [otherId]: !s[otherId],
    }));
  };

  // Handle immediate touch on mobile to flip and avoid double click toggle
  const handleTouchStart = (card) => {
    touchRef.current = true;
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    toggleFlip(card);
    touchTimeoutRef.current = setTimeout(() => {
      touchRef.current = false;
      touchTimeoutRef.current = null;
    }, 800);
  };

  const handleClick = (card) => {
    // Ignore the click that follows an intentional touchstart to prevent double-toggle
    if (touchRef.current) {
      touchRef.current = false;
      if (touchTimeoutRef.current) {
        clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = null;
      }
      return;
    }
    toggleFlip(card);
  };

  useEffect(() => {
    // Clean up touch timeout on unmount
    return () => {
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    };
  }, []);

  // Detect touch devices to avoid applying hover flip on touch (some mobile browsers emulate hover)
  useEffect(() => {
    const addTouchClass = () => {
      document.documentElement.classList.add("has-touch");
    };

    // If touch is already available, mark it immediately
    if (
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0)
    ) {
      addTouchClass();
    } else {
      // Otherwise, add once on first touch interaction
      const onFirstTouch = () => {
        addTouchClass();
        window.removeEventListener("touchstart", onFirstTouch, {
          capture: true,
        });
      };
      window.addEventListener("touchstart", onFirstTouch, {
        once: true,
        passive: true,
        capture: true,
      });
      // cleanup
      return () =>
        window.removeEventListener("touchstart", onFirstTouch, {
          capture: true,
        });
    }
  }, []);

  return (
    <section className="py-8 px-3 sm:py-12 sm:px-8 lg:px-16 ">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-purple-200 dark:via-purple-300 dark:to-purple-500 tracking-tight`}
        >
          Who Uses DocShift?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg-mb-10 ">
          {cards.map((card) => {
            const Icon = card.icon;
            const isFlipped = !!flipped[card.id];
            return (
              <div
                key={card.id}
                className={`flip-card group relative w-full h-36 sm:h-44 md:h-52 ${isFlipped ? "is-flipped" : ""}`}
                onClick={() => handleClick(card)}
                onTouchStart={() => handleTouchStart(card)}
                role="button"
                aria-pressed={isFlipped}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleClick(card)}
                style={{ touchAction: "manipulation" }}
              >
                <div
                  className={`flip-inner absolute inset-0 rounded-xl shadow-lg bg-transparent transition-transform duration-700 ease-in-out transform-gpu ${
                    isFlipped ? "rotate-y-180" : ""
                  } group-hover:rotate-y-180`}
                  aria-hidden={false}
                >
                  {/* Front */}
                  <div
                    className={`flip-face front absolute inset-0 rounded-xl p-5 flex flex-col items-start justify-center gap-3 ${theme === "dark" ? "bg-gray-900 border border-gray-800 text-gray-200" : "bg-white border border-gray-200 text-gray-700"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-gradient-to-br from-teal-500 to-blue-500 text-white">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <h3 className="text-md sm:text-lg font-semibold">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className={`flip-face back absolute inset-0 rounded-xl p-4 sm:p-5 flex flex-col justify-center text-xs sm:text-sm transform rotate-y-180 backface-hidden ${theme === "dark" ? "bg-gray-900 border border-gray-800 text-gray-200" : "bg-white border border-gray-200 text-gray-700"}`}
                  >
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Local styles for 3D flip effect (kept local to component) */}
      <style>{`
        .flip-card { perspective: 1000px; }
        .flip-inner { transform-style: preserve-3d; }
        .flip-face { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
        .front { z-index: 2; }
        .back { transform: rotateY(180deg); }
        /* Utility classes used in JS for rotateY to keep Tailwind usage simple */
        .rotate-y-180 { transform: rotateY(180deg); }
        .transform-gpu { transform: translateZ(0); }
        /* Mobile-friendly: flip when parent has .is-flipped */
        .flip-card.is-flipped .flip-inner { transform: rotateY(180deg); }
        @media (hover: hover) and (pointer: fine) {
          .flip-card:hover .flip-inner { transform: rotateY(180deg); }

        }
      `}</style>
    </section>
  );
}
