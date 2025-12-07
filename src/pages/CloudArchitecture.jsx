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

const CloudArchitecture = () => {
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
                        backgroundImage: `url("${import.meta.env.BASE_URL}cloud_hero.jpg")`,
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
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61FFB1] to-white">Scalable Infrastructure</span> for the Future
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        We design resilient, secure, and high-performance cloud architectures that power digital transformation at scale.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">

                {/* Intro Section */}
                <div className="py-24 container mx-auto px-6" ref={addToRefs}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="title-with-lines mb-8">The Future of Infrastructure is Cloud-Native</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Modern businesses require agility, scalability, and reliability that traditional on-premise infrastructure can't provide. The cloud enables organizations to innovate faster, reduce costs, and scale effortlessly.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Sapphire Consulting helps enterprises migrate to the cloud and build cloud-native applications from the ground up. We leverage AWS, Azure, and GCP to design architectures optimized for performance, security, and cost efficiency.
                        </p>
                    </div>
                </div>

                {/* Why Choose Sapphire */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Enterprises Choose Sapphire</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Multi-Cloud Expertise", desc: "Deep experience across AWS, Azure, and Google Cloud to design the best solution for your needs.", img: `${import.meta.env.BASE_URL}multi_cloud.png` },
                                { title: "Security-First Design", desc: "Zero-trust architectures, encryption, compliance frameworks, and continuous security monitoring.", img: `${import.meta.env.BASE_URL}security_cloud.png` },
                                { title: "Cost Optimization", desc: "Right-sizing, reserved instances, spot instances, and automated cost monitoring to maximize ROI.", img: `${import.meta.env.BASE_URL}cost_optimization.png` },
                                { title: "DevOps Integration", desc: "CI/CD pipelines, infrastructure as code, and automated deployments for rapid iteration.", img: `${import.meta.env.BASE_URL}devops_integration.png` },
                                { title: "High Availability & DR", desc: "Fault-tolerant designs with disaster recovery and business continuity planning built-in.", img: `${import.meta.env.BASE_URL}high_availability.png` },
                                { title: "Observability & Monitoring", desc: "Comprehensive logging, metrics, tracing, and alerting for proactive issue resolution.", img: `${import.meta.env.BASE_URL}observability.png` },
                            ].map((item, i) => (
                                <NeonGlassCard key={i} {...item} index={i} />
                            ))}
                        </div>
                    </div>
                </div>

                <ProvenImpact
                    backgroundImage={`${import.meta.env.BASE_URL}cloud_hero.jpg`}
                    stats={[
                        { val: "70%", label: "Cost Reduction", sub: "through cloud optimization and rightsizing" },
                        { val: "99.99%", label: "Uptime", sub: "with fault-tolerant architecture" },
                        { val: "10x", label: "Scalability", sub: "to handle peak traffic loads" }
                    ]}
                />

                {/* Key Solutions */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Key Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                {
                                    title: "Cloud Migration",
                                    desc: "End-to-end migration services from on-premise to cloud with minimal downtime and risk.",
                                    points: ["Assessment and readiness planning", "Data migration and validation", "Post-migration optimization"]
                                },
                                {
                                    title: "Kubernetes & Containerization",
                                    desc: "Build scalable, portable applications with Docker and Kubernetes orchestration.",
                                    points: ["Microservices architecture", "Auto-scaling and load balancing", "GitOps and service mesh integration"]
                                },
                                {
                                    title: "Serverless Architectures",
                                    desc: "Event-driven, cost-efficient applications using Lambda, Azure Functions, and Google Cloud Functions.",
                                    points: ["API gateways and event triggers", "Stateless compute patterns", "Pay-per-use pricing model"]
                                },
                                {
                                    title: "Infrastructure as Code",
                                    desc: "Automate infrastructure provisioning with Terraform, CloudFormation, and Pulumi.",
                                    points: ["Version-controlled infrastructure", "Automated environment creation", "Drift detection and remediation"]
                                },
                                {
                                    title: "Data Lake & Warehousing",
                                    desc: "Modern data architectures for analytics, ML, and business intelligence at scale.",
                                    points: ["S3, Azure Data Lake, BigQuery", "ETL/ELT pipelines with Airflow", "Real-time and batch processing"]
                                },
                                {
                                    title: "Security & Compliance",
                                    desc: "Zero-trust security models, identity management, and compliance automation.",
                                    points: ["IAM and role-based access control", "Encryption and key management", "Audit trails and compliance reporting"]
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Cloud Transformation Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { stage: "Assess", items: "Infrastructure audit, cost analysis, workload prioritization, migration strategy." },
                            { stage: "Design", items: "Architecture blueprints, security frameworks, disaster recovery planning, capacity planning." },
                            { stage: "Migrate", items: "Phased migration, data transfer, testing and validation, rollback strategies." },
                            { stage: "Optimize", items: "Performance tuning, cost management, continuous monitoring, scaling automation." },
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
                        "Enterprise Organizations", "Financial Services", "Healthcare Providers",
                        "SaaS Companies", "E-commerce Platforms", "Media & Entertainment"
                    ]}
                />

                {/* Engagement Principles */}
                <PrincipleCards
                    title="Our Cloud Engagement Approach"
                    principles={[
                        { title: "Assessment First", desc: "We document every dependency and cost driver before writing a line of code, ensuring no surprises during migration." },
                        { title: "Security by Design", desc: "We implement Zero Trust principles at the infrastructure level, treating identity as the new perimeter." },
                        { title: "Automation Standard", desc: "If we do it twice, we automate it. verification, provisioning, and deployment are handled by code, not manual clicks." },
                        { title: "Cost-Aware Architecture", desc: "We design for financial efficiency, utilizing spot instances, auto-scaling, and lifecycle policies to keep opex low." }
                    ]}
                />

                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default CloudArchitecture;
