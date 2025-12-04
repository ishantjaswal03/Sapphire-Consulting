import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useMobileHover from '../hooks/useMobileHover';

const FuturisticCard = ({ title, desc, img, index }) => {
    const cardRef = useRef(null);
    useMobileHover(cardRef);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group h-full"
        >
            {/* Holographic Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#61FFB1] to-[#00C9FF] rounded-2xl opacity-20 group-hover:opacity-70 group-[.mobile-hover]:opacity-70 blur transition duration-500 group-hover:duration-200 group-[.mobile-hover]:duration-200" />

            {/* Main Card Container */}
            <div className="relative h-full bg-black rounded-2xl border border-white/10 overflow-hidden">

                {/* Tech Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#61FFB1]/30 rounded-tl-lg z-20 group-hover:border-[#61FFB1] group-[.mobile-hover]:border-[#61FFB1] transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#61FFB1]/30 rounded-tr-lg z-20 group-hover:border-[#61FFB1] group-[.mobile-hover]:border-[#61FFB1] transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#61FFB1]/30 rounded-bl-lg z-20 group-hover:border-[#61FFB1] group-[.mobile-hover]:border-[#61FFB1] transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#61FFB1]/30 rounded-br-lg z-20 group-hover:border-[#61FFB1] group-[.mobile-hover]:border-[#61FFB1] transition-colors duration-300" />

                {/* Image Section */}
                <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 group-[.mobile-hover]:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-[url('/scanline.png')] opacity-10 pointer-events-none z-10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#61FFB1]/20 to-transparent opacity-0 group-hover:opacity-100 group-[.mobile-hover]:opacity-100 transition-opacity duration-500 z-10" />
                </div>

                {/* Content Section */}
                <div className="p-8 relative z-10">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#61FFB1] group-[.mobile-hover]:text-[#61FFB1] transition-colors duration-300 flex items-center gap-2">
                        {title}
                        <span className="inline-block w-2 h-2 bg-[#61FFB1] rounded-full opacity-0 group-hover:opacity-100 group-[.mobile-hover]:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#61FFB1]" />
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 group-[.mobile-hover]:text-gray-300 transition-colors duration-300">
                        {desc}
                    </p>
                </div>

                {/* Animated Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-40 group-[.mobile-hover]:opacity-40 transition-opacity duration-500 pointer-events-none" />
            </div>
        </motion.div>
    );
};

export default FuturisticCard;
