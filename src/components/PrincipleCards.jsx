import React from 'react';

const PrincipleCards = ({ title = "Our Engagement Principles", principles }) => {
    // Default principles if none provided
    const defaultPrinciples = [
        {
            title: "Strategic Alignment",
            desc: "Every initiative starts with a deep understanding of your business goals, ensuring technology directly drives measurable value."
        },
        {
            title: "Agile Execution",
            desc: "We prioritize iterative delivery and rapid feedback loops, allowing us to adapt to change and speed up time-to-market."
        },
        {
            title: "Scalable Architecture",
            desc: "Our solutions are built on precise, future-proof foundations designed to grow with your user base and data needs."
        },
        {
            title: "User-Centric Design",
            desc: "We place the end-user at the heart of the development process, creating intuitive experiences that drive adoption and satisfaction."
        }
    ];

    const data = principles || defaultPrinciples;

    return (
        <div className="py-24 container mx-auto px-6">
            <h2 className="title-with-lines mb-16 text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="group relative p-8 h-full bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#61FFB1]/30 transition-all duration-500"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#61FFB1]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Number / Index (Optional, stylized) */}
                        <div className="absolute top-4 right-4 text-4xl font-bold text-white/[0.03] group-hover:text-[#61FFB1]/10 transition-colors duration-500">
                            0{index + 1}
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            {/* Icon Placeholder (or just title prominence) */}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white group-hover:text-[#61FFB1] transition-colors duration-300">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                                {item.desc}
                            </p>

                            {/* Bottom Decoration */}
                            <div className="mt-6 w-12 h-0.5 bg-white/10 group-hover:bg-[#61FFB1] transition-all duration-500 group-hover:w-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrincipleCards;
