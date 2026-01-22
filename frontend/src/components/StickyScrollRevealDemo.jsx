import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
        title: "Accord AI",
        description:
            "Enterprise & Trade eco-system enabling secure trading. The AI brain of your organization automating tasks, predicting outcomes, and optimizing resource consumption for sustainable growth. Accord AI was born from the realization that most AI tools today are focused only on tasks  to-do lists, reminders, productivity. But what about the inner work? What about emotional healing, mental clarity, or spiritual alignment? We envisioned a different kind of assistant one that doesn't just help you do, but helps you be.",
        bgColor: {
            light: "#ebf2f3",
            dark: "#111827" // gray-900 (excellent contrast)
        },

        content: (
            <div className="relative h-full w-full">
                <img
                    src="/images/accordai.png"
                    alt="Accord AI"
                    className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-semibold">
                        Accord AI
                    </h3>
                </div>
            </div>
        ),
    }
,
    {
        title: "Regatic AI",
        description: "Processing rigorous calculations + sustainability. The AI that transforms paperwork into smart digital intelligence — reducing human effort and boosting automation efficiency.",
        bgColor: {
            light: "#ebf2f3",
            dark: "#271525"
        },
        content: (
            <div className="relative h-full w-full">
                {/* Image */}
                <img
                    src="/images/RegaticAi.png"
                    alt="Regatic AI"
                    className="h-full w-full object-cover"
                />

                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-semibold">
                       Regatic AI
                    </h3>
                </div>
            </div>
        ),
    },
    {
        title: "DocShift",
        description:
            "AI platform for digital information consistency. Convert, transform & migrate documents seamlessly  powered by secure, compliant & scalable AI automation. DocShift is more than a document management system (DMS) it’s a comprehensive ecosystem designed to address modern document challenges.",
        bgColor: {
            light: "#ebf2f3",
            dark: "#111827"
        },
        content: (
            <div className="relative h-full w-full">
                <img
                    src="/images/docshift.png"
                    alt="DocShift"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-semibold">
                        DocShift
                    </h3>
                </div>
            </div>
        ),
    },
    {
        title: "3D Virtual Bot",
        description:
            "Conversational AI avatar for website engagement. A real-time talking, interactive 3D AI assistant that listens, thinks, responds, and emotionally connects like a human. These bots move beyond traditional text-based interfaces by incorporating human-like visual and animated components, which enhances user engagement and immersion across digital platforms.",
        bgColor: {
            light: "#ebf2f3",
            dark: "#0b1220"
        },
        content: (
            <div className="relative h-full w-full">
                <img
                    src="/images/virtual-bot.jpg"
                    alt="3D Virtual Bot"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-semibold">
                        3D Virtual Bot
                    </h3>
                </div>
            </div>
        ),
    },
];

export default function StickyScrollRevealDemo() {
    return <StickyScroll content={content} />;
}
