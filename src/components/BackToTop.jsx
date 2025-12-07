import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Track scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Cleanup
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top handler
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 rounded-full 
                             bg-black/30 backdrop-blur-md border border-white/10
                             text-[#61FFB1] shadow-[0_0_15px_rgba(97,255,177,0.3)]
                             hover:bg-black/50 hover:shadow-[0_0_25px_rgba(97,255,177,0.5)]
                             transition-all duration-300 group"
                    aria-label="Back to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
