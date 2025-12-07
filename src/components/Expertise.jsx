import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const expertises = [
    {
        title: "Custom Software Development",
        desc: "Enterprise-grade applications built with modern technologies including React, Node.js, Python, and cloud platforms. We create scalable solutions that grow with your business needs.",
        img: "/exp_custom.png"
    },
    {
        title: "Mobile & Web Applications",
        desc: "Cross-platform mobile apps and responsive web applications designed for optimal user experience across all devices and platforms.",
        img: "/exp_mobile.png"
    },
    {
        title: "HIPAA & Compliance Solutions",
        desc: "Secure, compliant systems for healthcare and sensitive data handling. Expert implementation of HIPAA, GDPR, and industry-specific regulatory requirements.",
        img: "/exp_hipaa_final.png"
    },
    {
        title: "MarTech & Analytics",
        desc: "Marketing technology platforms, customer analytics, and data-driven solutions to optimize marketing performance and customer engagement.",
        img: "/exp_martech.png"
    },
    {
        title: "EdTech Solutions",
        desc: "Educational technology platforms including learning management systems, student portals, and interactive educational applications.",
        img: "/exp_edtech.png"
    },
    {
        title: "Digital Transformation",
        desc: "Strategic consulting and implementation to modernize legacy systems, optimize workflows, and drive digital innovation across your organization.",
        img: "/exp_digital.png"
    }
];

const Expertise = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="bg-transparent py-24 relative" id="expertise">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Section Heading */}
                <div className="mb-16 lg:mb-24 text-center">
                    <h2 className="title-with-lines mb-6">Our Expertise</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Specialized technology solutions designed to drive innovation.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* LEFT COLUMN: Accordion List (Desktop) & Cards (Mobile) */}
                    <div className="w-full lg:w-[60%] flex flex-col">
                        {expertises.map((item, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`
                  group border-b border-white/[0.08] last:border-0 lg:last:border-b
                  ${activeIndex === index ? 'pb-6' : 'pb-0'}
                  transition-all duration-300
                `}
                            >
                                {/* Title Row - Clickable */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className={`
                    w-full py-6 flex items-center justify-between text-left focus:outline-none
                    group-hover:text-white transition-colors duration-300
                    ${activeIndex === index ? 'text-[#61FFB1]' : 'text-gray-300'}
                  `}
                                >
                                    <h3 className="text-xl md:text-3xl font-bold tracking-tight">
                                        {item.title}
                                    </h3>

                                    {/* Chevron Icon (Mobile Only / Subtle Indicator) */}
                                    <span className={`
                    lg:hidden text-2xl transition-transform duration-300
                    ${activeIndex === index ? 'rotate-180 text-[#61FFB1]' : 'text-gray-600'}
                  `}>
                                        ▼
                                    </span>

                                    {/* Desktop Active Indicator */}
                                    <span className={`
                    hidden lg:block text-2xl transition-all duration-300 opacity-0 -translate-x-4
                    ${activeIndex === index ? 'opacity-100 translate-x-0 text-[#61FFB1]' : ''}
                  `}>
                                        →
                                    </span>
                                </button>

                                {/* Mobile Image Banner (Visible only on mobile/active) */}
                                <div className="lg:hidden">
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden mb-4 rounded-xl"
                                            >
                                                <img
                                                    src={import.meta.env.BASE_URL + item.img.substring(1)}
                                                    alt={item.title}
                                                    className="w-full h-48 object-cover bg-gray-900"
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Description - Expandable */}
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-400 text-lg leading-relaxed lg:max-w-xl pb-4">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Image Panel (Desktop Only) */}
                    <div className="hidden lg:block lg:w-[40%] sticky top-32">
                        <div className={`
                            relative w-full aspect-[3/4] bg-[#111] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl
                            transition-all duration-500 ease-in-out
                            ${activeIndex === -1 ? 'opacity-0 translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'}
                        `}>
                            <AnimatePresence mode="wait">
                                {expertises[activeIndex] && (
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={import.meta.env.BASE_URL + expertises[activeIndex].img.substring(1)}
                                            alt={expertises[activeIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Subtle Overlay for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Expertise;
