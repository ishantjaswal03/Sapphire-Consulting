import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ElectricBorder from '../components/ElectricBorder';
import NeonGlassCard from '../components/NeonGlassCard';
import ProvenImpact from '../components/ProvenImpact';
import PrincipleCards from '../components/PrincipleCards';
import ClientCards from '../components/ClientCards';

gsap.registerPlugin(ScrollTrigger);

const MarketingTechnology = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        // Hero Animation
        const tl = gsap.timeline();
        tl.fromTo(heroRef.current,
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
        ).fromTo(titleRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=1"
        );

        // Section Animations
        sectionsRef.current.forEach((section) => {
            gsap.fromTo(section.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                    }
                }
            );
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <div className="bg-transparent min-h-screen text-white font-sans selection:bg-[#61FFB1] selection:text-black">
            <Navbar />

            {/* Hero Section - Half Height */}
            <div className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    ref={heroRef}
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url("${import.meta.env.BASE_URL}marketing_hero.jpg")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16" ref={titleRef}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        Elevating <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61FFB1] to-white">Brand Engagement</span> Through Technology
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        We build intelligent, data-driven marketing platforms that help brands connect with audiences and drive measurable growth.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">

                {/* Intro Section */}
                <div className="py-24 container mx-auto px-6" ref={addToRefs}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="title-with-lines mb-8">The Future of Marketing is Data-Driven</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Modern marketing demands personalization, automation, and real-time insights. Legacy marketing tools can no longer keep pace with evolving consumer expectations, multi-channel campaigns, and privacy regulations.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Sapphire Consulting bridges the gap between traditional marketing and cutting-edge technology. We design omnichannel platforms that unify customer data, automate workflows, and deliver personalized experiences at scale.
                        </p>
                    </div>
                </div>

                {/* Why Choose Sapphire */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Marketing Teams Choose Sapphire</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Customer-Centric Platforms", desc: "We design with marketers, customers, and data analysts in mind, creating seamless omnichannel experiences.", img: `${import.meta.env.BASE_URL}customer_centric.jpg` },
                                { title: "Privacy & Compliance", desc: "GDPR, CCPA, and data governance built into every solution to protect customer data and brand reputation.", img: `${import.meta.env.BASE_URL}privacy_marketing.jpg` },
                                { title: "Scalable Tech Stack", desc: "Cloud-native, API-first architectures designed to handle high-volume campaigns and real-time personalization.", img: `${import.meta.env.BASE_URL}scalable_marketing.jpg` },
                                { title: "Unified Data Ecosystem", desc: "Integrate CRM, CDP, analytics, social media, and advertising platforms for a complete view of the customer.", img: `${import.meta.env.BASE_URL}unified_data.jpg` },
                                { title: "AI-Powered Insights", desc: "Leverage machine learning for predictive analytics, customer segmentation, and campaign optimization.", img: `${import.meta.env.BASE_URL}ai_marketing.png` },
                                { title: "Agile Campaign Management", desc: "Rapid deployment of campaigns with A/B testing, real-time analytics, and automated optimization.", img: `${import.meta.env.BASE_URL}agile_campaigns.png` },
                            ].map((item, i) => (
                                <NeonGlassCard key={i} {...item} index={i} />
                            ))}
                        </div>
                    </div>
                </div>

                <ProvenImpact
                    backgroundImage={`${import.meta.env.BASE_URL}marketing_hero.jpg`}
                    stats={[
                        { val: "3x", label: "ROI Improvement", sub: "through personalized campaigns and automation" },
                        { val: "50%", label: "Higher Engagement", sub: "across all digital channels" },
                        { val: "20%", label: "Churn Reduction", sub: "with predictive retention strategies" }
                    ]}
                />

                {/* Key Solutions */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Key Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                {
                                    title: "Customer Data Platforms (CDP)",
                                    desc: "Unified customer profiles that combine behavioral, transactional, and demographic data from all touchpoints.",
                                    points: ["Real-time data ingestion and identity resolution", "360-degree customer view", "Privacy-compliant data management"]
                                },
                                {
                                    title: "Marketing Automation",
                                    desc: "End-to-end campaign orchestration with email, SMS, push notifications, and social media automation.",
                                    points: ["Multi-channel journey builder", "Triggered campaigns and drip sequences", "Lead scoring and nurturing workflows"]
                                },
                                {
                                    title: "Personalization Engines",
                                    desc: "AI-driven recommendation systems and dynamic content delivery for web, email, and mobile experiences.",
                                    points: ["Real-time product recommendations", "A/B and multivariate testing", "Behavioral targeting and segmentation"]
                                },
                                {
                                    title: "Social Media Management",
                                    desc: "Centralized platforms for scheduling, monitoring, and analyzing social media campaigns across all channels.",
                                    points: ["Multi-account management", "Social listening and sentiment analysis", "Influencer collaboration tools"]
                                },
                                {
                                    title: "Analytics & Attribution",
                                    desc: "Advanced analytics dashboards with multi-touch attribution modeling and ROI measurement.",
                                    points: ["Custom reporting and visualization", "Predictive analytics and forecasting", "Campaign performance optimization"]
                                },
                                {
                                    title: "E-commerce Integration",
                                    desc: "Seamless integration with e-commerce platforms to drive conversions and track customer journeys.",
                                    points: ["Cart abandonment recovery", "Product catalog synchronization", "Dynamic pricing and promotions"]
                                }
                            ].map((sol, i) => (
                                <ElectricBorder key={i} color="#61FFB1" speed={1} chaos={0.3} thickness={1} style={{ borderRadius: 16 }}>
                                    <div className="group p-6 h-full bg-black/40 backdrop-blur-sm rounded-2xl">
                                        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#61FFB1] transition-colors flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-[#61FFB1] opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {sol.title}
                                        </h3>
                                        <p className="text-gray-300 mb-6 text-lg">{sol.desc}</p>
                                        <ul className="space-y-2">
                                            {sol.points.map((p, j) => (
                                                <li key={j} className="flex items-start gap-3 text-gray-500 text-sm">
                                                    <svg className="w-5 h-5 text-[#61FFB1] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ElectricBorder>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Transformation Journey */}
                <div className="py-24 container mx-auto px-6" ref={addToRefs}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Marketing Transformation Across the Customer Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { stage: "Awareness", items: "SEO, paid ads, social media, content marketing, influencer partnerships, brand discovery." },
                            { stage: "Consideration", items: "Email nurture, retargeting, product comparisons, reviews, personalized content." },
                            { stage: "Conversion", items: "Landing pages, checkout optimization, cart recovery, personalized offers, upsells." },
                            { stage: "Retention", items: "Loyalty programs, subscription management, personalized communications, customer advocacy." },
                        ].map((step, i) => (
                            <div key={i} className="relative p-8 rounded-2xl bg-[#111] border border-white/5 overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#61FFB1] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                                <h3 className="text-xl font-bold mb-4 text-white">{step.stage}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.items}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Who We Work With */}
                <ClientCards
                    clients={[
                        "E-commerce Brands", "B2B SaaS Companies", "Digital Agencies",
                        "Retail Chains", "Media & Publishing", "Startups & Scale-ups"
                    ]}
                />

                {/* Engagement Principles */}
                <PrincipleCards
                    title="Our Marketing Engagement Approach"
                    principles={[
                        { title: "Omnichannel Unity", desc: "We connect every touchpoint—from social to email to web—creating a single, fluid conversation with your customer." },
                        { title: "Personalization at Scale", desc: "We move beyond 'Dear [First Name]', using real-time data to deliver hyper-relevant content to millions instantaneously." },
                        { title: "Privacy by Design", desc: "We ensure you can innovate boldly while staying compliant with GDPR/CCPA, turning data privacy into a brand trust asset." },
                        { title: "ROI-Driven Tech", desc: "We optimize your stack to eliminate bloat, ensuring every tool pays for itself through measurable revenue impact." }
                    ]}
                />

                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default MarketingTechnology;
