import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const industries = [
  "Energy & Clean Power",
  "Government & Cities",
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

  return (
    <section className="relative min-h-screen w-full overflow-hidden isolate ">
      {/* Background */}
      <img
        src={backgroundImageUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/60' : 'bg-white'}`} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-18 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-3 mt-10 rounded-full px-5 text-sm sm:text-base py-2 ring-1 backdrop-blur  ${theme === 'dark' ? 'bg-white/10 ring-white/15 text-white' : 'bg-white ring-gray-200 text-gray-900'}`}>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
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
            <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              Artificial Intelligence, LLMs, Automation, Blockchain &
              Cybersecurity
            </span>
            . We design scalable, intelligent systems that drive efficiency,
            security, and long-term growth.
          </p>
        </div>

        {/* Industries Section (Swiper) */}
        <div className="mt-26 sm:mt-20 max-w-7xl px-4 mt-5 sm:px-6 mx-auto">
          <h2 className={`text-center ${theme ==='dark'?'text-white' : 'text-gray-900'} text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 lg:mb-10`}>
            Industries We Empower
          </h2>

          <div className="relative mt-10">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="industries-swiper"
            >
              {industries.map((industry, index) => (
                <SwiperSlide key={index}>
                  <div className={`rounded-lg sm:rounded-xl px-3 py-4 sm:px-4 sm:py-6 text-center text-xs sm:text-sm md:text-base font-medium transition whitespace-nowrap ${theme === 'dark' ? 'bg-white/10 backdrop-blur ring-1 ring-white/15 text-white/90 hover:bg-white/15' : 'bg-transparent border border-gray-300 text-gray-800 hover:border-pink-400'}`}>
                    {industry}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;
