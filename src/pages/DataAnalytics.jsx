import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import ElectricBorder from '../components/ElectricBorder';
import NeonGlassCard from '../components/NeonGlassCard';
import ProvenImpact from '../components/ProvenImpact';

gsap.registerPlugin(ScrollTrigger);

const DataAnalytics = () => {
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
        <div className="bg-black min-h-screen text-white font-sans selection:bg-[#61FFB1] selection:text-black">
            <Navbar />

            {/* Hero Section - Half Height */}
            <div className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    ref={heroRef}
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/data_hero.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16" ref={titleRef}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61FFB1] to-white">Data into Decisions</span> Through Intelligence
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        We build intelligent analytics platforms that turn raw data into actionable insights, empowering businesses to make smarter decisions.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">

                {/* Intro Section */}
                <div className="py-24 container mx-auto px-6" ref={addToRefs}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="title-with-lines mb-8">The Future of Business is Data-Driven</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Modern enterprises are drowning in data but starving for insights. Traditional BI tools can no longer handle the volume, velocity, and variety of modern data sources or deliver the real-time intelligence businesses demand.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Sapphire Consulting bridges the gap between raw data and strategic decisions. We design end-to-end analytics solutions that unify data sources, apply advanced AI/ML, and deliver insights through intuitive dashboards and predictive models.
                        </p>
                    </div>
                </div>

                {/* Why Choose Sapphire */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Data Teams Choose Sapphire</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "End-to-End Solutions", desc: "From data ingestion to visualization, we handle the entire analytics pipeline with modern tools and best practices.", img: "/end_to_end.jpg" },
                                { title: "Real-Time Analytics", desc: "Stream processing and real-time dashboards for immediate insights and proactive decision-making.", img: "/realtime_analytics.jpg" },
                                { title: "AI & Machine Learning", desc: "Predictive models, anomaly detection, forecasting, and recommendation engines built into your workflows.", img: "/ai_ml.jpg" },
                                { title: "Scalable Data Platforms", desc: "Cloud-native data lakes and warehouses that grow with your business without performance degradation.", img: "/scalable_data.jpg" },
                                { title: "Self-Service BI", desc: "Empower business users with intuitive dashboards and drag-and-drop analytics without IT dependency.", img: "/self_service_bi.jpg" },
                                { title: "Data Governance", desc: "Quality frameworks, lineage tracking, access controls, and compliance to ensure trusted data.", img: "/data_governance.jpg" },
                            ].map((item, i) => (
                                <NeonGlassCard key={i} {...item} index={i} />
                            ))}
                        </div>
                    </div>
                </div>

                <ProvenImpact
                    backgroundImage="/data_hero.jpg"
                    stats={[
                        { val: "5x", label: "Faster Insights", sub: "from data collection to decision-making" },
                        { val: "40%", label: "Productivity Boost", sub: "for data science and analyst teams" },
                        { val: "90%", label: "Data Accuracy", sub: "through automated quality checks and governance" }
                    ]}
                />

                {/* Key Solutions */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Key Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                {
                                    title: "Data Warehousing",
                                    desc: "Modern cloud data warehouses with Snowflake, BigQuery, and Redshift for petabyte-scale analytics.",
                                    points: ["Massively parallel processing", "Separation of compute and storage", "Semi-structured data support (JSON, Parquet)"]
                                },
                                {
                                    title: "ETL/ELT Pipelines",
                                    desc: "Robust data integration workflows using Airflow, DBT, Fivetran, and custom orchestration.",
                                    points: ["Automated data ingestion", "Transformation and data quality checks", "Error handling and monitoring"]
                                },
                                {
                                    title: "Business Intelligence",
                                    desc: "Interactive dashboards and reports with Tableau, PowerBI, Looker, and custom visualizations.",
                                    points: ["Role-based access and permissions", "Scheduled reports and alerts", "Embedded analytics for applications"]
                                },
                                {
                                    title: "Predictive Analytics",
                                    desc: "Machine learning models for forecasting, churn prediction, demand planning, and risk assessment.",
                                    points: ["Time series forecasting", "Classification and regression models", "Model deployment and monitoring"]
                                },
                                {
                                    title: "Real-Time Streaming",
                                    desc: "Event-driven architectures with Kafka, Kinesis, and Pub/Sub for real-time data processing.",
                                    points: ["Stream processing with Flink and Spark", "Real-time alerts and notifications", "Event sourcing and CQRS patterns"]
                                },
                                {
                                    title: "Data Science Platforms",
                                    desc: "End-to-end ML platforms with experiment tracking, model registry, and deployment automation.",
                                    points: ["Jupyter and notebook environments", "MLOps and model versioning", "A/B testing and model monitoring"]
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Data Transformation Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { stage: "Collect", items: "Data ingestion from databases, APIs, IoT devices, logs, third-party sources." },
                            { stage: "Store", items: "Data lakes, warehouses, feature stores, optimized storage formats." },
                            { stage: "Analyze", items: "SQL queries, BI dashboards, ML models, statistical analysis, exploration." },
                            { stage: "Act", items: "Automated actions, alerts, recommendations, predictions, business optimization." },
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
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12">Who We Work With</h2>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {[
                                "Financial Services", "Retail & E-commerce", "Healthcare Providers",
                                "Manufacturing", "Telecommunications", "SaaS & Technology"
                            ].map((client, i) => (
                                <span key={i} className="px-6 py-3 rounded-full bg-black border border-white/10 text-gray-300 text-sm md:text-base hover:border-[#61FFB1] hover:text-white transition-colors cursor-default">
                                    {client}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Engagement Approach */}
                <div className="py-24 container mx-auto px-6" ref={addToRefs}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Engagement Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { step: "01", title: "Discovery", desc: "Data Assessment & Use Cases" },
                            { step: "02", title: "Design", desc: "Architecture & Data Models" },
                            { step: "03", title: "Build", desc: "Pipelines & Implementation" },
                            { step: "04", title: "Deploy", desc: "Rollout & Training" },
                            { step: "05", title: "Optimize", desc: "Monitor & Enhance" },
                        ].map((phase, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-6xl font-bold text-white/5 mb-4 group-hover:text-[#61FFB1]/20 transition-colors">{phase.step}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default DataAnalytics;
