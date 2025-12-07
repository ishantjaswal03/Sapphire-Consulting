import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check local storage for consent
        const hasConsented = localStorage.getItem('sapphire_cookie_consent');
        if (!hasConsented) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('sapphire_cookie_consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        // Optionally handle decline (e.g., maintain visibility or minimize)
        // For now, simpler UX is to just hide it for this session or treat close as decline
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto bg-black/40 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-t-2xl md:rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 p-6">

                        <div className="text-left md:max-w-3xl">
                            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                🍪 We value your privacy
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                                By clicking "Accept", you consent to our use of cookies.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <button
                                onClick={handleDecline}
                                className="flex-1 md:flex-none py-2.5 px-6 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-colors border border-transparent hover:border-white/20"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none py-2.5 px-8 rounded-full text-sm font-bold text-black bg-[#61FFB1] hover:bg-white hover:shadow-[0_0_20px_rgba(97,255,177,0.4)] transition-all duration-300"
                            >
                                Accept
                            </button>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
