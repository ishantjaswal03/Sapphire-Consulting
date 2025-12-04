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

const HealthcareTechnology = () => {
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
                        backgroundImage: 'url("/healthcare_hero.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 30%', // Adjusted for better focus
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16" ref={titleRef}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61FFB1] to-white">Patient Care</span> Through Technology
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        We build secure, scalable, and intelligent digital solutions that empower healthcare providers to deliver better outcomes.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">

                {/* Intro Section */}
                <div className="py-24 container mx-auto px-6" ref={addToRefs}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="title-with-lines mb-8">The Future of Health is Digital</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            The healthcare industry is undergoing a massive shift towards interoperability, patient-centric care, and data-driven decision making. Legacy systems can no longer keep up with the demands of modern medicine or regulatory expectations.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Sapphire Consulting bridges the gap between traditional healthcare and cutting-edge technology. We design compliant, user-friendly platforms that streamline workflows, reduce administrative burden, and enhance the patient experience across the entire care journey.
                        </p>
                    </div>
                </div>

                {/* Why Choose Sapphire */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Healthcare Teams Choose Sapphire</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Built for Clinical Reality", desc: "We design with doctors, nurses, admin staff, and patients in mind, not just the tech stack.", img: "/clinical_reality.png" },
                                { title: "Security First", desc: "Every solution is architected with data protection, privacy, and compliance at the core.", img: "/security_first.png" },
                                { title: "Scalable Foundations", desc: "Cloud-native, API-first architectures ready to support growth and peak loads.", img: "/scalable_foundations.png" },
                                { title: "Interoperable by Design", desc: "We integrate with existing EHR, LIS, RIS, and hospital systems to avoid “rip and replace.”", img: "/interoperable_design.png" },
                                { title: "Experience Across Care Settings", desc: "Hospitals, multi-specialty clinics, diagnostics, telehealth startups, insurers, and digital health platforms.", img: "/care_settings.png" },
                                { title: "Data-Driven Intelligence", desc: "Transforming raw health data into actionable insights for better clinical outcomes and operational efficiency.", img: "/scalable_foundations.png" },
                            ].map((item, i) => (
                                <NeonGlassCard key={i} {...item} index={i} />
                            ))}
                        </div>
                    </div>
                </div>

                <ProvenImpact
                    backgroundImage="/healthcare_hero.png"
                    stats={[
                        { val: "40%", label: "Efficiency Increase", sub: "in administrative and clinical workflows" },
                        { val: "2.5x", label: "Faster Diagnosis", sub: "through AI-assisted imaging and analysis" },
                        { val: "100%", label: "Compliance", sub: "with HIPAA, GDPR, and local regulations" }
                    ]}
                />

                {/* Key Solutions */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Key Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                {
                                    title: "Telemedicine Platforms",
                                    desc: "Secure, high-quality video consultation platforms that connect patients with specialists anywhere in the world.",
                                    points: ["Integrated e-prescriptions and digital payments", "Virtual waiting rooms and triage flows", "Multi-device access (mobile, tablet, desktop)"]
                                },
                                {
                                    title: "EHR Integration",
                                    desc: "Seamless integration with major Electronic Health Record systems to ensure data flows freely and securely.",
                                    points: ["HL7 / FHIR-based interoperability", "Bi-directional sync of patient records", "Reduced duplicate data entry"]
                                },
                                {
                                    title: "AI Diagnostics",
                                    desc: "Leveraging machine learning to assist radiologists and clinicians in detecting anomalies faster and more accurately.",
                                    points: ["Decision support tools embedded in workflows", "Risk scoring and anomaly detection", "Continuous model improvement"]
                                },
                                {
                                    title: "Patient Portals",
                                    desc: "Empowering patients with easy access to their medical records, appointment scheduling, and direct communication.",
                                    points: ["Secure access to reports and history", "Self-service appointment booking", "In-app messaging integration"]
                                },
                                {
                                    title: "IoT Remote Monitoring",
                                    desc: "Connecting wearable devices to clinical dashboards for real-time tracking of patient vitals outside the hospital.",
                                    points: ["Continuous monitoring for chronic care", "Customizable alerts for care teams", "Analytics for early intervention"]
                                },
                                {
                                    title: "Data Security",
                                    desc: "Enterprise-grade cybersecurity protocols to protect sensitive patient data and ensure full regulatory compliance.",
                                    points: ["Role-based access control and audit trails", "Data encryption in transit and at rest", "Regular security assessments"]
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Transformation Across the Care Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { stage: "Pre-Visit", items: "Online discovery, appointment booking, digital onboarding, eligibility checks." },
                            { stage: "During Visit", items: "Digital forms, integrated EHR, clinical decision support, e-prescriptions." },
                            { stage: "Post-Visit", items: "Follow-up reminders, remote monitoring, teleconsultations, digital billing." },
                            { stage: "Operations", items: "Real-time dashboards for occupancy, revenue, quality metrics, and patient satisfaction." },
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
                                "Multi-specialty hospitals", "Outpatient clinics", "Diagnostic labs",
                                "Telehealth startups", "Health insurance & TPAs", "Wellness programs"
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
                            { step: "01", title: "Discovery", desc: "Compliance & Workflow Mapping" },
                            { step: "02", title: "Design", desc: "User Journeys & Architecture" },
                            { step: "03", title: "Build", desc: "Agile Dev & Integration" },
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

export default HealthcareTechnology;
