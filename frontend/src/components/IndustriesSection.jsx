import React from "react";

const industries = [
    {
        title: "Energy & Sustainability",
        image:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Healthcare",
        image:
            "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Enterprise",
        image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Smart Cities",
        image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Finance",
        image:
            "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Retail",
        image:
            "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80",
    },
];

const IndustriesSection = () => {
    return (
        <section className="w-full px-4 md:px-8 py-24 bg-[#0b0b0f] text-white overflow-hidden">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Industries We Support
                </h2>
                <p className="text-white/60 mt-3">
                    Hover on a card to explore
                </p>
            </div>

            {/* Angled Slider */}
            <div className="relative w-full">
                <div className="flex gap-8 animate-slider">

                    {[...industries, ...industries].map((item, i) => (
                        <div
  key={i}
  className="group relative 
min-w-[220px] sm:min-w-[260px] lg:min-w-[300px] 
xl:min-w-[320px]
h-[300px] sm:h-[360px] lg:h-[380px] xl:h-[420px]
rounded-2xl overflow-hidden shadow-2xl
transition-transform duration-500 ease-out"
  style={{
    transform: "perspective(1000px) rotateY(18deg)",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.transform = "perspective(1000px) rotateY(0deg)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.transform = "perspective(1000px) rotateY(18deg)")
  }
>


                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Hover Overlay */}
                            <div
                                className="absolute inset-0 bg-black/60 
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 
                flex items-center justify-center"
                            >
                                <h3 className="text-2xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
