import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const industryCardsRef = useRef([]);
    const approachCardsRef = useRef([]);

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

            // Animate industry cards with stagger
            gsap.fromTo(industryCardsRef.current.filter(Boolean),
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: industryCardsRef.current[0],
                        start: "top 85%",
                    }
                }
            );

            // Animate approach cards with stagger
            gsap.fromTo(approachCardsRef.current.filter(Boolean),
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: approachCardsRef.current[0],
                        start: "top 85%",
                    }
                }
            );

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
        if (el) industryCardsRef.current[index] = el;
    };

    const setApproachRef = (index) => (el) => {
        if (el) approachCardsRef.current[index] = el;
    };

    return (
        <section className="bg-black text-white py-24 partners-section" id="approach" ref={sectionRef}>
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
                        <h2 className="text-2xl font-bold text-white mb-4 text-center">Industries We Serve</h2>

                        <div className="industries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1: Healthcare Technology */}
                            <article className="industry-card group" id="healthcare-technology" ref={setIndustryRef(0)}>
                                <h3 className="text-xl font-bold text-white mb-4">Healthcare Technology</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    We help healthcare organizations unlock the power of their data to drive better clinical decisions,
                                    improve patient outcomes, and streamline operations. From HCIT platforms to data-first solutions, our
                                    products are built with human-centric design and strict regulatory compliance in mind.
                                </p>
                                <Link
                                    to="/healthcare-technology"
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

                            {/* Card 2: Educational Platforms */}
                            <article className="industry-card group" id="educational-platforms" ref={setIndustryRef(1)}>
                                <h3 className="text-xl font-bold text-white mb-4">Educational Platforms</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    We design digital learning platforms that combine intuitive UX, AI-driven personalization, and rich
                                    analytics to keep learners engaged. Our solutions help institutions track progress, optimize content,
                                    and deliver scalable, modern education experiences.
                                </p>
                                <Link
                                    to="/educational-platforms"
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

                            {/* Card 3: Marketing Technology */}
                            <article className="industry-card group" id="marketing-technology" ref={setIndustryRef(2)}>
                                <h3 className="text-xl font-bold text-white mb-4">Marketing Technology</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    We build martech solutions that connect campaigns, customer data, and analytics into one coherent
                                    stack. From customer journeys to real-time insights, we help brands orchestrate smarter, more
                                    personalized marketing at scale.
                                </p>
                                <Link
                                    to="/marketing-technology"
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

                            {/* Card 4: Cloud Architecture */}
                            <article className="industry-card group" id="cloud-architecture" ref={setIndustryRef(3)}>
                                <h3 className="text-xl font-bold text-white mb-4">Cloud Architecture</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    We architect secure, scalable cloud foundations that power mission-critical products. Our team blends
                                    cloud services, integration, and DevOps so your applications stay resilient, compliant, and ready to
                                    grow.
                                </p>
                                <Link
                                    to="/cloud-architecture"
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

                            {/* Card 5: Data Analytics */}
                            <article className="industry-card group" id="data-analytics" ref={setIndustryRef(4)}>
                                <h3 className="text-xl font-bold text-white mb-4">Data Analytics</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    We turn fragmented data into actionable insights with advanced analytics and AI. From dashboards to
                                    predictive models, we help teams make faster, evidence-based decisions across healthcare, fintech, and
                                    beyond.
                                </p>
                                <Link
                                    to="/data-analytics"
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
                        </div>
                    </div>
                </section>

                <div className="text-center mb-16">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Approach to Innovation</h3>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        We combine technical excellence with deep industry knowledge, ensuring every solution scales for future
                        growth.
                    </p>
                </div>
                <div className="approach-grid">
                    <div className="card" tabIndex="0" ref={setApproachRef(0)}>
                        <img
                            src={`${import.meta.env.BASE_URL}section3_card1.jpg`}
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
                            src={`${import.meta.env.BASE_URL}section3_card2.jpg`}
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
                            src={`${import.meta.env.BASE_URL}section3_card3.jpg`}
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
