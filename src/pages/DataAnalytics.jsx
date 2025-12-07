import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import NeonGlassCard from '../components/NeonGlassCard';
import ProvenImpact from '../components/ProvenImpact';
import PrincipleCards from '../components/PrincipleCards';
import ClientCards from '../components/ClientCards';
import ChromaGrid from '../components/ChromaGrid';

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
        <div className="bg-transparent min-h-screen text-white font-sans selection:bg-[#61FFB1] selection:text-black">
            <Navbar />

            {/* Hero Section - Half Height */}
            <div className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    ref={heroRef}
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url("${import.meta.env.BASE_URL}data_hero.jpg")`,
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
                        <div style={{ position: 'relative' }}>
                            <ChromaGrid
                                items={[
                                    {
                                        title: "End-to-End Solutions",
                                        subtitle: "From data ingestion to visualization, we handle the entire analytics pipeline with modern tools.",
                                        image: `${import.meta.env.BASE_URL}end_to_end.png`,
                                        borderColor: "#3B82F6",
                                        gradient: "linear-gradient(145deg, #3B82F6, #000)"
                                    },
                                    {
                                        title: "Real-Time Analytics",
                                        subtitle: "Stream processing and real-time dashboards for immediate insights and proactive decision-making.",
                                        image: `${import.meta.env.BASE_URL}realtime_analytics.png`,
                                        borderColor: "#10B981",
                                        gradient: "linear-gradient(180deg, #10B981, #000)"
                                    },
                                    {
                                        title: "AI & Machine Learning",
                                        subtitle: "Predictive models, anomaly detection, forecasting, and recommendation engines built into your workflows.",
                                        image: `${import.meta.env.BASE_URL}ai_ml.png`,
                                        borderColor: "#F59E0B",
                                        gradient: "linear-gradient(165deg, #F59E0B, #000)"
                                    },
                                    {
                                        title: "Scalable Platforms",
                                        subtitle: "Cloud-native data lakes and warehouses that grow with your business without performance degradation.",
                                        image: `${import.meta.env.BASE_URL}scalable_data.png`,
                                        borderColor: "#EF4444",
                                        gradient: "linear-gradient(195deg, #EF4444, #000)"
                                    },
                                    {
                                        title: "Self-Service BI",
                                        subtitle: "Empower business users with intuitive dashboards and drag-and-drop analytics without IT dependency.",
                                        image: `${import.meta.env.BASE_URL}self_service_bi.png`,
                                        borderColor: "#8B5CF6",
                                        gradient: "linear-gradient(225deg, #8B5CF6, #000)"
                                    },
                                    {
                                        title: "Data Governance",
                                        subtitle: "Quality frameworks, lineage tracking, access controls, and compliance to ensure trusted data.",
                                        image: `${import.meta.env.BASE_URL}data_governance.png`,
                                        borderColor: "#06B6D4",
                                        gradient: "linear-gradient(135deg, #06B6D4, #000)"
                                    },
                                ]}
                                radius={300}
                                damping={0.45}
                                fadeOut={0.6}
                                ease="power3.out"
                            />
                        </div>
                    </div>
                </div>

                <ProvenImpact
                    backgroundImage={`${import.meta.env.BASE_URL}data_hero.jpg`}
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
                                <div key={i} className="group p-6 h-full bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#61FFB1]/50 transition-colors">
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
                <ClientCards
                    clients={[
                        "Financial Services", "Retail & E-commerce", "Healthcare Providers",
                        "Manufacturing", "Telecommunications", "SaaS & Technology"
                    ]}
                />

                {/* Engagement Principles */}
                <PrincipleCards
                    title="Our Data Engagement Approach"
                    principles={[
                        { title: "Strategic Alignment", desc: "We ensure every data initiative maps directly to business value, avoiding 'metrics vanity' in favor of actionable KPIs." },
                        { title: "Data Integrity First", desc: "We build rigorous governance and quality checks into the pipeline, because insights are only as good as the data they come from." },
                        { title: "Scalable Foundations", desc: "Our architectures separate compute and storage, allowing your data platform to grow cost-effectively with your needs." },
                        { title: "Actionable Intelligence", desc: "We focus on the 'last mile' of analytics, delivering intuitive dashboards and models that empower teams to decide with confidence." }
                    ]}
                />

                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default DataAnalytics;
