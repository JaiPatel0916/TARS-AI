import { useEffect, useRef, useCallback, useMemo, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "../context/ThemeProvider";

const TargetCursor = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true,
}) => {
  const { theme } = useTheme();
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const spinTl = useRef(null);
  const dotRef = useRef(null);
  const sectionRef = useRef(null);

  const isActiveRef = useRef(false);
  const targetCornerPositionsRef = useRef(null);
  const tickerFnRef = useRef(null);
  const activeStrengthRef = useRef(0);

  const isMobile = useMemo(() => {
    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const ua = navigator.userAgent.toLowerCase();
    return (
      (hasTouchScreen && isSmallScreen) ||
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua)
    );
  }, []);

  const constants = useMemo(
    () => ({ borderWidth: 3, cornerSize: 12 }),
    []
  );

  // active index for hover — blur other cards when one is hovered
  const [activeIndex, setActiveIndex] = useState(null);

  const moveCursor = useCallback((x, y) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current || !sectionRef.current) return;

    const section = sectionRef.current;
    const originalCursor = document.body.style.cursor;
    
    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll(".target-cursor-corner");

    let activeTarget = null;
    let currentLeaveHandler = null;
    let isInSection = false;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    });

    const handleMouseEnterSection = () => {
      isInSection = true;
      if (hideDefaultCursor) section.style.cursor = "none";
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeaveSection = () => {
      isInSection = false;
      section.style.cursor = "";
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
      if (currentLeaveHandler) {
        activeStrengthRef.current = 0;
        targetCornerPositionsRef.current = null;
        gsap.ticker.remove(tickerFnRef.current);
        spinTl.current.restart();
        activeTarget = null;
      }
    };

    section.addEventListener("mouseenter", handleMouseEnterSection);
    section.addEventListener("mouseleave", handleMouseLeaveSection);

    spinTl.current = gsap
      .timeline({ repeat: -1 })
      .to(cursor, { rotation: "+=360", duration: spinDuration, ease: "none" });

    const tickerFn = () => {
      if (!targetCornerPositionsRef.current) return;
      const strength = activeStrengthRef.current;
      if (!strength) return;

      const cursorX = gsap.getProperty(cursorRef.current, "x");
      const cursorY = gsap.getProperty(cursorRef.current, "y");

      cornersRef.current.forEach((corner, i) => {
        const target = targetCornerPositionsRef.current[i];
        gsap.to(corner, {
          x: target.x - cursorX,
          y: target.y - cursorY,
          duration: parallaxOn ? 0.2 : 0,
          overwrite: "auto",
        });
      });
    };

    tickerFnRef.current = tickerFn;

    const handleMouseMove = (e) => {
      if (isInSection) {
        moveCursor(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const enterHandler = (e) => {
      const target = e.target.closest(targetSelector);
      if (!target || target === activeTarget) return;

      activeTarget = target;
      spinTl.current.pause();
      gsap.set(cursorRef.current, { rotation: 0 });

      const rect = target.getBoundingClientRect();
      const { borderWidth, cornerSize } = constants;

      targetCornerPositionsRef.current = [
        { x: rect.left - borderWidth, y: rect.top - borderWidth },
        { x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth },
        {
          x: rect.right + borderWidth - cornerSize,
          y: rect.bottom + borderWidth - cornerSize,
        },
        {
          x: rect.left - borderWidth,
          y: rect.bottom + borderWidth - cornerSize,
        },
      ];

      activeStrengthRef.current = 1;
      gsap.ticker.add(tickerFnRef.current);

      currentLeaveHandler = () => {
        activeStrengthRef.current = 0;
        targetCornerPositionsRef.current = null;
        gsap.ticker.remove(tickerFnRef.current);
        spinTl.current.restart();
        activeTarget = null;
      };

      target.addEventListener("mouseleave", currentLeaveHandler, {
        once: true,
      });
    };

    window.addEventListener("mouseover", enterHandler);

    return () => {
      gsap.ticker.remove(tickerFnRef.current);
      spinTl.current?.kill();
      section.style.cursor = "";
      section.removeEventListener("mouseenter", handleMouseEnterSection);
      section.removeEventListener("mouseleave", handleMouseLeaveSection);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", enterHandler);
    };
  }, [isMobile, moveCursor, constants, spinDuration, hideDefaultCursor, parallaxOn]);

  return (
    <>
      {/* ================= WHAT WE DO CONTENT ================= */}
      <section 
        ref={sectionRef}
        className={`w-full py-16 px-4 sm:px-6 lg:px-12 ${
          theme === 'dark' 
            ? 'bg-[rgb(22,16,54)] text-white' 
            : 'bg-gray-50 text-gray-900'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <p className={`cursor-target text-[11px] uppercase tracking-[0.1em] text-center text-semibold text-5xl mb-5 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            What We Do 
          </p>

          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "AI & LLM Modules",
              "AI Chatbots & Virtual Assistants",
              "Blockchain & Quantum Security",
              "Cybersecurity Defense",
              "Workflow Automation (n8n)",
              "Next-gen Digital Products",
              "3D AI Virtual Bots",
              "Sustainable Tech Solutions",
            ].map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => { if (!isMobile) setActiveIndex(i); }}
                onMouseLeave={() => { if (!isMobile) setActiveIndex(null); }}
                className={`cursor-target rounded-xl p-5 transition-all duration-200 ease-out hover:scale-[1.03] ${
                  theme === 'dark'
                    ? 'border border-white/10 hover:border-[#b38cff]'
                    : 'border border-gray-300 hover:border-pink-500 bg-white shadow-sm'
                } ${activeIndex !== null && activeIndex !== i ? 'opacity-60 blur-sm' : 'opacity-100'}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GSAP CURSOR ================= */}
      {!isMobile && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999] opacity-0"
        >
          <div
            ref={dotRef}
            className={`absolute w-1 h-1 rounded-full -translate-x-1/2 -translate-y-1/2 ${
              theme === 'dark' ? 'bg-white' : 'bg-gray-900'
            }`}
          />
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`target-cursor-corner absolute w-3 h-3 border-[3px] ${
                theme === 'dark' ? 'border-white' : 'border-gray-900'
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TargetCursor;
