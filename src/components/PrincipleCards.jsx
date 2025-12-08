import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Zap, Target, Layers, Users } from 'lucide-react';

const PrincipleCards = ({ title = "Our Engagement Principles", principles }) => {
    // Default principles if none provided
    const defaultPrinciples = [
        {
            id: 'alignment',
            title: "Strategic Alignment",
            desc: "Every initiative starts with a deep understanding of your business goals, ensuring technology directly drives measurable value. We align engineering velocity with business KPIs to ensure every line of code contributes to the bottom line.",
            icon: Target
        },
        {
            id: 'agile',
            title: "Agile Execution",
            desc: "We prioritize iterative delivery and rapid feedback loops, allowing us to adapt to change and speed up time-to-market. Our sprints are designed for transparency, keeping stakeholders informed and involved at every pivotal moment.",
            icon: Zap
        },
        {
            id: 'scale',
            title: "Scalable Architecture",
            desc: "Our solutions are built on precise, future-proof foundations designed to grow with your user base and data needs. We architect for high availability and modularity, preventing technical debt before it starts.",
            icon: Layers
        },
        {
            id: 'user',
            title: "User-Centric Design",
            desc: "We place the end-user at the heart of the development process, creating intuitive experiences that drive adoption and satisfaction. Design thinking isn't an afterthought—it's woven into our engineering DNA.",
            icon: Users
        }
    ];

    const data = principles ? principles.map((p, i) => ({ ...p, id: i, icon: defaultPrinciples[i]?.icon || Layers })) : defaultPrinciples;
    const [activeId, setActiveId] = useState(data[0].id);

    const activeItem = data.find(p => p.id === activeId);

    return (
        <div className="py-24 container mx-auto px-6">
            <h2 className="title-with-lines mb-16 text-center">{title}</h2>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                {/* Left Side: Interactive List */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={`group relative p-6 cursor-pointer border-b border-white/10 hover:bg-white/5 transition-colors duration-300 ${activeId === item.id ? 'bg-white/5 border-[#61FFB1]' : ''}`}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${activeId === item.id ? 'text-[#61FFB1]' : 'text-gray-400 group-hover:text-white'}`}>
                                    {item.title}
                                </h3>
                                <ChevronRight
                                    className={`w-6 h-6 transition-transform duration-300 ${activeId === item.id ? 'text-[#61FFB1] rotate-90 lg:rotate-0' : 'text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100'}`}
                                />
                            </div>

                            {/* Mobile Accordion Content (Visible only on small screens when active) */}
                            <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeId === item.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                <p className="text-gray-300 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Detailed Content (Desktop Only) */}
                <div className="hidden lg:block w-full lg:w-1/2 relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeId}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <div className="relative h-full flex flex-col justify-center">
                                {/* Large Background Number/Icon Effect */}
                                <div className="absolute -top-12 -right-12 text-[12rem] font-bold text-white/[0.02] select-none pointer-events-none">
                                    {String(data.findIndex(p => p.id === activeId) + 1).padStart(2, '0')}
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-8 inline-flex p-4 rounded-2xl bg-[#61FFB1]/10 text-[#61FFB1] border border-[#61FFB1]/20">
                                        <activeItem.icon className="w-10 h-10" />
                                    </div>

                                    <h3 className="text-4xl font-bold text-white mb-6">
                                        {activeItem.title}
                                    </h3>

                                    <p className="text-xl text-gray-300 leading-relaxed border-l-2 border-[#61FFB1] pl-6">
                                        {activeItem.desc}
                                    </p>

                                    <div className="mt-12 flex gap-4">
                                        <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#61FFB1]"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default PrincipleCards;
