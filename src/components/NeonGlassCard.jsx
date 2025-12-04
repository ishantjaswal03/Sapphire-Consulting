import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useMobileHover from '../hooks/useMobileHover';

const NeonGlassCard = ({ title, desc, img, index }) => {
    const cardRef = useRef(null);
    useMobileHover(cardRef);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-full"
        >
            {/* Glow Effect behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#61FFB1] to-[#00C9FF] rounded-2xl blur opacity-25 group-hover:opacity-75 group-[.mobile-hover]:opacity-75 transition duration-1000 group-hover:duration-200 group-[.mobile-hover]:duration-200" />

            {/* Card Content */}
            <div className="relative h-full bg-black/90 backdrop-blur-xl rounded-2xl p-1 overflow-hidden ring-1 ring-white/10">

                {/* Image Container */}
                <div className="relative h-48 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-[#61FFB1]/10 mix-blend-overlay z-10 group-hover:bg-transparent group-[.mobile-hover]:bg-transparent transition-colors duration-500" />
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    {/* Tech Overlay Lines */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#61FFB1] transform -translate-x-full group-hover:translate-x-0 group-[.mobile-hover]:translate-x-0 transition-transform duration-500 ease-out z-20" />
                </div>

                {/* Text Content */}
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#61FFB1] group-[.mobile-hover]:text-[#61FFB1] transition-colors duration-300">
                            {title}
                        </h3>
                        <span className="text-xs font-mono text-[#61FFB1] opacity-0 group-hover:opacity-100 group-[.mobile-hover]:opacity-100 transition-opacity duration-300">
                            [0{index + 1}]
                        </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 group-[.mobile-hover]:text-gray-300 transition-colors duration-300">
                        {desc}
                    </p>


                </div>
            </div>
        </motion.div>
    );
};

export default NeonGlassCard;
