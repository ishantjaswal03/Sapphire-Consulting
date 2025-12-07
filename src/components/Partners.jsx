import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        id: "healthcare-technology",
        title: "Healthcare Technology",
        desc: "We help healthcare organizations unlock the power of their data to drive better clinical decisions, improve patient outcomes, and streamline operations. From HCIT platforms to data-first solutions, our products are built with human-centric design and strict regulatory compliance in mind.",
        link: "/healthcare-technology"
    },
    {
        id: "educational-platforms",
        title: "Educational Platforms",
        desc: "We design digital learning platforms that combine intuitive UX, AI-driven personalization, and rich analytics to keep learners engaged. Our solutions help institutions track progress, optimize content, and deliver scalable, modern education experiences.",
        link: "/educational-platforms"
    },
    {
        id: "marketing-technology",
        title: "Marketing Technology",
        desc: "We build martech solutions that connect campaigns, customer data, and analytics into one coherent stack. From customer journeys to real-time insights, we help brands orchestrate smarter, more personalized marketing at scale.",
        link: "/marketing-technology"
    },
    {
        id: "cloud-architecture",
        title: "Cloud Architecture",
        desc: "We architect secure, scalable cloud foundations that power mission-critical products. Our team blends cloud services, integration, and DevOps so your applications stay resilient, compliant, and ready to grow.",
        link: "/cloud-architecture"
    },
    {
        id: "data-analytics",
        title: "Data Analytics",
        desc: "We turn fragmented data into actionable insights with advanced analytics and AI. From dashboards to predictive models, we help teams make faster, evidence-based decisions across healthcare, fintech, and beyond.",
        link: "/data-analytics"
    }
];

const Partners = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const industryCardsRef = useRef([]); // Used for mobile grid animations
    const approachCardsRef = useRef([]);

    // State for Desktop Accordion
    const [activeIndex, setActiveIndex] = useState(0); // Default to first item or -1? User said "visible before hover", implies static image mostly.

    // User requested "one image". We'll use a static image for the desktop view.
    const staticImage = `${import.meta.env.BASE_URL}Industries_We_Serve.png`;

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    useEffect(() => {
        Splitting();

        const ctx = gsap.context(() => {
            // Animate main title
            gsap.fromTo(titleRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                    }
                }
            );

            // Animate industry cards (Mobile Grid)
            // Filter out nulls in case desktop view is active and these aren't rendered or partial
            const validCards = industryCardsRef.current.filter(Boolean);
            if (validCards.length > 0) {
                gsap.fromTo(validCards,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: validCards[0],
                            start: "top 85%",
                        }
                    }
                );
            }

            // Animate approach cards
            const validApproach = approachCardsRef.current.filter(Boolean);
            if (validApproach.length > 0) {
                gsap.fromTo(validApproach,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        scrollTrigger: {
                            trigger: validApproach[0],
                            start: "top 85%",
                        }
                    }
                );
            }

            // Mobile Hover Effect
            ScrollTrigger.matchMedia({
                "(max-width: 768px)": function () {
                    // Industry Cards
                    industryCardsRef.current.forEach((card) => {
                        if (card) {
                            ScrollTrigger.create({
                                trigger: card,
                                start: "top 60%",
                                end: "bottom 40%",
                                toggleClass: "mobile-hover",
                            });
                        }
                    });

                    // Approach Cards
                    approachCardsRef.current.forEach((card) => {
                        if (card) {
                            ScrollTrigger.create({
                                trigger: card,
                                start: "top 60%",
                                end: "bottom 40%",
                                toggleClass: "mobile-hover",
                            });
                        }
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const setIndustryRef = (index) => (el) => {
        industryCardsRef.current[index] = el;
    };

    const setApproachRef = (index) => (el) => {
        if (el) approachCardsRef.current[index] = el;
    };

    return (
        <section className="bg-transparent text-white py-24 partners-section" id="approach" ref={sectionRef}>
            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-24" ref={titleRef}>
                    <h2 className="title-with-lines mb-4">Innovative Technology Partners</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Sapphire Consulting is a forward-thinking technology consultancy based in Miami, Florida. We specialize in
                        delivering innovative software solutions that address complex business challenges across multiple
                        industries.
                    </p>
                </div>

                {/* NEW INDUSTRIES SECTION */}
                <section className="industries-section py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-white mb-12 text-center">Industries We Serve</h2>

                        {/* MOBILE VIEW (Grid - Original Design) */}
                        <div className="industries-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
                            {industries.map((item, index) => (
                                <article
                                    key={item.id}
                                    className="industry-card group"
                                    id={item.id}
                                    ref={setIndustryRef(index)}
                                >
                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                    <Link
                                        to={item.link}
                                        className="read-more-btn inline-flex items-center gap-2 text-sm font-medium text-[#61FFB1] transition-colors group-hover:text-white"
                                    >
                                        Read more
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </article>
                            ))}
                        </div>

                        {/* DESKTOP VIEW (Accordion - Expertise Style - Image Left / Text Right) */}
                        <div className="hidden lg:flex flex-row gap-24 items-start">

                            {/* LEFT COLUMN: Static Image */}
                            <div className="w-[40%] sticky top-32" ref={el => industryCardsRef.current[100] = el /* Use high index hack or separate ref? Let's use separate ref in future but for now keep simple */}>
                                <div className="relative w-full aspect-[3/4] bg-[#111] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={staticImage}
                                        alt="Industry Expertise"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Accordion List */}
                            <div className="w-[60%] flex flex-col">
                                {industries.map((item, index) => (
                                    <div
                                        key={item.id}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`
                                            group border-b border-white/[0.08] last:border-0 lg:last:border-b
                                            ${activeIndex === index ? 'pb-6' : 'pb-0'}
                                            transition-all duration-300
                                        `}
                                    >
                                        {/* Title Row */}
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className={`
                                                w-full py-6 flex items-center justify-between text-left focus:outline-none
                                                group-hover:text-white transition-colors duration-300
                                                ${activeIndex === index ? 'text-[#61FFB1]' : 'text-gray-300'}
                                            `}
                                        >
                                            <h3 className="text-3xl font-bold tracking-tight">
                                                {item.title}
                                            </h3>

                                            {/* Active Indicator */}
                                            <span className={`
                                                hidden lg:block text-2xl transition-all duration-300 opacity-0 -translate-x-4
                                                ${activeIndex === index ? 'opacity-100 translate-x-0 text-[#61FFB1]' : ''}
                                            `}>
                                                →
                                            </span>
                                        </button>

                                        {/* Description & Link - Expandable */}
                                        <AnimatePresence>
                                            {activeIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-4">
                                                        <p className="text-gray-400 text-lg leading-relaxed lg:max-w-xl mb-4">
                                                            {item.desc}
                                                        </p>
                                                        <Link
                                                            to={item.link}
                                                            className="inline-flex items-center gap-2 text-sm font-medium text-[#61FFB1] transition-colors hover:text-white"
                                                        >
                                                            Read more
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth="2"
                                                                stroke="currentColor"
                                                                className="w-4 h-4"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                            </svg>
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                <div className="text-center mb-16 mt-24">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Approach to Innovation</h3>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        We combine technical excellence with deep industry knowledge, ensuring every solution scales for future
                        growth.
                    </p>
                </div>
                <div className="approach-grid">
                    <div className="card" tabIndex="0" ref={setApproachRef(0)}>
                        <img
                            src={`${import.meta.env.BASE_URL}innovation_agile.png`}
                            alt="A team collaborating at a whiteboard with sticky notes."
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://placehold.co/687x916/000000/61FFB1?text=Agile+Team';
                            }}
                        />
                        <div className="text">
                            <h2 data-splitting="">Agile Development</h2>
                            <p data-splitting="">
                                Iterative, flexible development cycles that adapt to your changing needs and deliver value quickly and
                                efficiently.
                            </p>
                        </div>
                    </div>
                    <div className="card" tabIndex="0" ref={setApproachRef(1)}>
                        <img
                            src={`${import.meta.env.BASE_URL}innovation_infra.png`}
                            alt="Server racks in a data center with blue and purple lighting."
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://placehold.co/687x916/000000/28b274?text=Cloud+Servers';
                            }}
                        />
                        <div className="text">
                            <h2 data-splitting="">Scalable Infrastructure</h2>
                            <p data-splitting="">
                                Robust cloud-native architectures (AWS, Azure, GCP) designed for high availability, security, and future
                                growth.
                            </p>
                        </div>
                    </div>
                    <div className="card" tabIndex="0" ref={setApproachRef(2)}>
                        <img
                            src={`${import.meta.env.BASE_URL}innovation_insights.png`}
                            alt="A laptop and tablet displaying various data charts and graphs."
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://placehold.co/687x916/000000/61FFB1?text=Data+Insights';
                            }}
                        />
                        <div className="text">
                            <h2 data-splitting="">Data-Driven Insights</h2>
                            <p data-splitting="">
                                Leveraging AI, machine learning, and advanced analytics to unlock powerful insights and drive informed
                                decision-making.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
