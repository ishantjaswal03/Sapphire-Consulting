import React, { useEffect, useRef } from 'react';
import { TrendingDown, Activity, Zap, ShieldCheck, TrendingUp, Database, Clock, BarChart3 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useMobileHover from '../hooks/useMobileHover';

gsap.registerPlugin(ScrollTrigger);

// Helper to get icon and graphic based on label/content
const getVisuals = (label) => {
    const l = label.toLowerCase();
    if (l.includes('cost') || l.includes('reduction') || l.includes('errors')) return { icon: TrendingDown, graphic: 'wave' };
    if (l.includes('uptime') || l.includes('reliability') || l.includes('accuracy')) return { icon: Activity, graphic: 'circle' };
    if (l.includes('faster') || l.includes('speed') || l.includes('time')) return { icon: Zap, graphic: 'gauge' };
    if (l.includes('compliance') || l.includes('security') || l.includes('breaches')) return { icon: ShieldCheck, graphic: 'shield' };
    if (l.includes('roi') || l.includes('growth') || l.includes('increase') || l.includes('conversion')) return { icon: TrendingUp, graphic: 'chart' };
    if (l.includes('data') || l.includes('insights') || l.includes('view')) return { icon: Database, graphic: 'bars' };
    return { icon: BarChart3, graphic: 'chart' };
};

const ProvenImpactCard = ({ stat, addToRefs }) => {
    const cardRef = useRef(null);
    useMobileHover(cardRef);

    const setRef = (el) => {
        cardRef.current = el;
        addToRefs(el);
    };

    const { icon: Icon, graphic } = getVisuals(stat.label + stat.sub);

    return (
        <div
            ref={setRef}
            className="relative bg-black/40 backdrop-blur-md p-6 group transition-all duration-500 hover:-translate-y-2 hover:bg-black/60 group-[.mobile-hover]:-translate-y-2 group-[.mobile-hover]:bg-black/60 w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[350px]"
            style={{
                clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'
            }}
        >
            {/* Neon Border (Simulated with pseudo-elements or inset shadow) */}
            <div
                className="absolute inset-0 pointer-events-none transition-all duration-500 group-hover:shadow-[inset_0_0_30px_rgba(97,255,177,0.2)] group-[.mobile-hover]:shadow-[inset_0_0_30px_rgba(97,255,177,0.2)]"
                style={{
                    boxShadow: 'inset 0 0 20px rgba(97, 255, 177, 0.05)',
                    clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
                    border: '1px solid rgba(97, 255, 177, 0.3)',
                    zIndex: 20
                }}
            />
            {/* Active Border Glow on Hover */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 group-[.mobile-hover]:opacity-100 transition-opacity duration-500"
                style={{
                    clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
                    border: '1px solid #61FFB1',
                    zIndex: 21,
                    boxShadow: '0 0 15px rgba(97, 255, 177, 0.3)'
                }}
            />

            {/* Content Layout */}
            <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">

                {/* Top Row: Value & Icon */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                        <span className="stat-value text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] tabular-nums">
                            {stat.val}
                        </span>
                        <span className="text-[10px] font-bold text-[#61FFB1] uppercase tracking-widest mt-2 group-hover:text-white group-[.mobile-hover]:text-white transition-colors duration-300">
                            {stat.label}
                        </span>
                    </div>
                    <div className="p-2 rounded-full bg-[#61FFB1]/10 group-hover:bg-[#61FFB1]/20 group-[.mobile-hover]:bg-[#61FFB1]/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-[#61FFB1] opacity-80 stroke-[1.5] group-hover:scale-110 group-[.mobile-hover]:scale-110 transition-transform duration-300" />
                    </div>
                </div>

                {/* Bottom Graphic Area */}
                <div className="mt-4 relative h-16 w-full opacity-30 group-hover:opacity-60 group-[.mobile-hover]:opacity-60 transition-opacity duration-500">
                    {/* Simulated Graphics based on type */}
                    {graphic === 'wave' && (
                        <svg viewBox="0 0 100 20" className="w-full h-full fill-none stroke-[#61FFB1] stroke-2">
                            <path d="M0 10 Q 25 20 50 10 T 100 10" className="animate-pulse" />
                            <path d="M0 10 L 100 10" className="opacity-20" />
                        </svg>
                    )}
                    {graphic === 'circle' && (
                        <div className="w-12 h-12 rounded-full border-4 border-[#61FFB1]/30 border-t-[#61FFB1] mx-auto animate-spin-slow" />
                    )}
                    {graphic === 'gauge' && (
                        <div className="w-full h-full flex items-end justify-center pb-2">
                            <div className="w-16 h-8 border-t-2 border-r-2 border-l-2 border-[#61FFB1] rounded-t-full relative overflow-hidden">
                                <div className="absolute bottom-0 left-1/2 w-1 h-6 bg-[#61FFB1] origin-bottom -rotate-45 group-hover:rotate-45 group-[.mobile-hover]:rotate-45 transition-transform duration-1000 ease-out" />
                            </div>
                        </div>
                    )}
                    {graphic === 'shield' && (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-12 h-2 bg-[#61FFB1]/20 rounded-full overflow-hidden">
                                <div className="w-full h-full bg-[#61FFB1] animate-pulse origin-left scale-x-0 group-hover:scale-x-100 group-[.mobile-hover]:scale-x-100 transition-transform duration-1000" />
                            </div>
                        </div>
                    )}
                    {graphic === 'chart' && (
                        <div className="flex items-end justify-between h-full px-2 gap-1">
                            <div className="w-1/5 h-[40%] bg-[#61FFB1]/30 group-hover:h-[50%] group-[.mobile-hover]:h-[50%] transition-all duration-300 delay-0" />
                            <div className="w-1/5 h-[60%] bg-[#61FFB1]/50 group-hover:h-[70%] group-[.mobile-hover]:h-[70%] transition-all duration-300 delay-75" />
                            <div className="w-1/5 h-[80%] bg-[#61FFB1]/70 group-hover:h-[90%] group-[.mobile-hover]:h-[90%] transition-all duration-300 delay-150" />
                            <div className="w-1/5 h-[100%] bg-[#61FFB1] group-hover:h-[100%] group-[.mobile-hover]:h-[100%] transition-all duration-300 delay-200" />
                        </div>
                    )}
                    {graphic === 'bars' && (
                        <div className="flex flex-col gap-1 h-full justify-center">
                            <div className="w-full h-1 bg-[#61FFB1]/30 group-hover:w-[90%] group-[.mobile-hover]:w-[90%] transition-all duration-500" />
                            <div className="w-[80%] h-1 bg-[#61FFB1]/50 group-hover:w-[100%] group-[.mobile-hover]:w-[100%] transition-all duration-500 delay-75" />
                            <div className="w-[60%] h-1 bg-[#61FFB1]/70 group-hover:w-[80%] group-[.mobile-hover]:w-[80%] transition-all duration-500 delay-150" />
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="mt-2 text-[11px] text-gray-400 border-t border-white/10 pt-3 leading-relaxed group-hover:text-gray-300 group-[.mobile-hover]:text-gray-300 transition-colors">
                    {stat.sub}
                </div>
            </div>
        </div>
    );
};

const ProvenImpact = ({ title = "Proven Impact", stats, backgroundImage }) => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Section Title
            gsap.fromTo("h2",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Animate Cards Stagger
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            // Animate Numbers
            cardsRef.current.forEach((card, index) => {
                const stat = stats[index];
                // Extract number and suffix (e.g., "95%" -> 95, "%")
                const match = stat.val.match(/([\d.]+)(.*)/);
                if (match) {
                    const value = parseFloat(match[1]);
                    const suffix = match[2];
                    const numberEl = card.querySelector('.stat-value');

                    gsap.fromTo(numberEl,
                        { innerText: 0 },
                        {
                            innerText: value,
                            duration: 2,
                            ease: "power2.out",
                            snap: { innerText: 1 }, // Snap to integers, modify if decimals needed
                            onUpdate: function () {
                                numberEl.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
                            },
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top 75%",
                            }
                        }
                    );
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, [stats]);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <div ref={sectionRef} className="py-24 relative overflow-hidden bg-black">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full z-0 opacity-60 transition-transform duration-[20s] ease-linear hover:scale-110"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center text-white drop-shadow-[0_0_15px_rgba(97,255,177,0.5)]">
                    {title}
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {stats.map((stat, i) => (
                        <ProvenImpactCard key={i} stat={stat} addToRefs={addToRefs} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProvenImpact;
