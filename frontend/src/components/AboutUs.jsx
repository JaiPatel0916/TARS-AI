import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeProvider";


const industries = [
  "Energy & Clean Power",
  "Government & Smart Cities",
  "Healthcare",
  "Education",
  "Banking & Finance",
  "Retail & E-commerce",
  "Manufacturing",
  "Logistics & Transport",
];

const AboutUs = ({
  backgroundImageUrl = "About.png",
}) => {
  const { theme } = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 1;
    const w = window.innerWidth;
    if (w >= 1280) return 4;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  };

  useEffect(() => {
    const update = () => {
      const ip = getItemsPerView();
      setItemsPerView(ip);
      setCurrentIndex(prev => Math.min(prev, Math.max(0, industries.length - ip)));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, industries.length - itemsPerView);
  const prev = () => setCurrentIndex(i => Math.max(0, i - itemsPerView));
  const next = () => setCurrentIndex(i => Math.min(maxIndex, i + itemsPerView));
  const goToPage = (page) => setCurrentIndex(Math.min(maxIndex, page * itemsPerView));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [itemsPerView]);

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(i => {
        const nextIndex = i + itemsPerView;
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, itemsPerView, maxIndex]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; touchDeltaX.current = 0; };
  const onTouchMove = (e) => { touchDeltaX.current = e.touches[0].clientX - touchStartX.current; };
  const onTouchEnd = () => { const d = touchDeltaX.current; if (d > 50) prev(); else if (d < -50) next(); touchDeltaX.current = 0; };

  return (
    <section className="relative min-h-screen w-full overflow-hidden isolate">
      {/* Background */}
      <img
        src={backgroundImageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/60' : 'bg-white/40'}`} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-3 rounded-full px-5 text-sm sm:text-base py-2 ring-1 backdrop-blur  ${theme === 'dark' ? 'bg-white/10 ring-white/15 text-white' : 'bg-white ring-gray-200 text-gray-900'}`}>
            <span className="text-xs font-semibold bg-white text-black px-3 py-1 rounded-full ${theme==='dark'?'bg-black text-white'">
              About Us
            </span>
            <span className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              TARS AI Pvt. Ltd.
            </span>
          </div>

          {/* Heading */}
         <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className={`text-3xl sm:text-4xl lg:text-4xl xl:text-4xl font-bold mb-3 mt-8 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
              theme === 'dark' 
                ? 'text-white' 
                : 'text-black'
            }`}>
              Who We Are
            </h2>
            <div className={`h-1 w-24 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500`}></div>
          </div>

          {/* Description */}
          <p className={`mt-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-900'} text-base sm:text-lg max-w-3xl mx-auto`}>
            <strong>TARS AI</strong> is a next-generation AI company shaping
            enterprise transformation through{" "}
            <span className="text-white font-medium ">
              Artificial Intelligence, LLMs, Automation, Blockchain &
              Cybersecurity
            </span>
            . We design scalable, intelligent systems that drive efficiency,
            security, and long-term growth.
          </p>
        </div>

        {/* Industries Section (Carousel) */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h2 className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-2xl sm:text-3xl font-semibold mb-6`}>
            Industries We Empower
          </h2>

          <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {industries.map((industry, index) => (
                  <div key={index} className="flex-none px-2" style={{ width: `${100 / itemsPerView}%` }}>
                    <div className={`rounded-xl px-4 py-6 text-center text-sm sm:text-base font-medium transition ${theme === 'dark' ? 'bg-white/10 backdrop-blur ring-1 ring-white/15 text-white/90 hover:bg-white/15' : 'bg-transparent border border-gray-300 text-gray-800 hover:border-pink-400'}`}>
                      {industry}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next Buttons */}
            <button onClick={prev} aria-label="Previous" className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white text-gray-800 shadow'} focus:outline-none`}> 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button onClick={next} aria-label="Next" className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full ${theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-white text-gray-800 shadow'} focus:outline-none`}> 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </button>

            {/* Dots / Pages */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {Array.from({ length: Math.max(1, Math.ceil(industries.length / itemsPerView)) }).map((_, p) => (
                <button key={p} onClick={() => goToPage(p)} className={`w-3 h-3 rounded-full ${Math.floor(currentIndex / itemsPerView) === p ? 'bg-pink-500' : (theme === 'dark' ? 'bg-white/30' : 'bg-gray-300')}`} aria-label={`Go to page ${p + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
