import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const JourneyCards = ({ steps }) => {
    // Default Content (Healthcare) if no props provided
    const defaultSteps = [
        {
            id: 1,
            stage: "Pre-Visit",
            items: "Online discovery, appointment booking, digital onboarding, eligibility checks."
        },
        {
            id: 2,
            stage: "During Visit",
            items: "Digital forms, integrated EHR, clinical decision support, e-prescriptions."
        },
        {
            id: 3,
            stage: "Post-Visit",
            items: "Follow-up reminders, remote monitoring, teleconsultations, digital billing."
        },
        {
            id: 4,
            stage: "Operations",
            items: "Real-time dashboards for occupancy, revenue, quality metrics, and patient satisfaction."
        }
    ];

    const data = steps || defaultSteps;
    const [activeId, setActiveId] = useState(data[0]?.id || 1);

    return (
        <div className="w-full h-auto flex flex-col md:flex-row items-start gap-4 p-4">
            {data.map((step) => {
                const isActive = activeId === step.id;

                return (
                    <motion.div
                        key={step.id}
                        layout
                        onClick={() => setActiveId(step.id)}
                        onMouseEnter={() => setActiveId(step.id)}
                        animate={{
                            backgroundColor: isActive ? '#61FFB1' : '#000000',
                            color: isActive ? '#000000' : '#ffffff',
                            borderColor: isActive ? 'transparent' : 'rgba(255, 255, 255, 0.2)'
                        }}
                        className={`
                            relative rounded-[2.5rem] p-8 cursor-pointer overflow-hidden
                            flex flex-col border
                            md:flex-1
                            ${isActive ? 'md:flex-[1.5]' : 'hover:border-[#61FFB1]/50'}
                        `}
                        transition={{
                            layout: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
                            colors: { duration: 0.3 }
                        }}
                    >
                        {/* Header Area */}
                        <div className="flex justify-between items-start mb-4">
                            <motion.h3
                                layout="position"
                                className={`font-bold leading-tight ${isActive ? 'text-4xl pr-4' : 'text-2xl'}`}
                            >
                                {step.stage}
                            </motion.h3>

                            {/* Arrow Icon - Visible on Inactive */}
                            <motion.div
                                layout
                                initial={false}
                                animate={{
                                    opacity: isActive ? 0 : 1,
                                    scale: isActive ? 0 : 1,
                                    color: isActive ? '#000000' : '#ffffff'
                                }}
                                transition={{ duration: 0.3 }}
                                className="bg-transparent"
                            >
                                <ArrowUpRight className="w-6 h-6" />
                            </motion.div>
                        </div>

                        {/* Content Area - Visible only when active */}
                        <div className="relative overflow-hidden w-full">
                            <AnimatePresence mode="popLayout">
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <p className="text-xl font-medium leading-relaxed max-w-md">
                                            {step.items}
                                        </p>

                                        {/* Decorative decorative lines/pills for branding */}
                                        <div className="mt-12 flex gap-2 opacity-50">
                                            <div className="h-1.5 w-16 bg-black rounded-full" />
                                            <div className="h-1.5 w-4 bg-black/40 rounded-full" />
                                            <div className="h-1.5 w-4 bg-black/40 rounded-full" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default JourneyCards;
