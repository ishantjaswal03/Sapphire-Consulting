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

const EducationalPlatforms = () => {
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
                        backgroundImage: `url("${import.meta.env.BASE_URL}education_hero.png")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16" ref={titleRef}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
                        Revolutionizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#61FFB1] to-white">Learning Experiences</span> Through Technology
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        We build engaging, scalable, and intelligent educational platforms that empower institutions to deliver transformative learning outcomes.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">

                {/* Intro Section */}
                <div className="py-24 container mx-auto px-6" ref={addToRefs}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="title-with-lines mb-8">The Future of Education is Digital</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Education is evolving rapidly towards personalized learning, collaborative experiences, and data-driven insights. Traditional learning management systems can no longer meet the demands of modern students, educators, and institutions.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Sapphire Consulting bridges the gap between traditional education and cutting-edge technology. We design intuitive, scalable platforms that enhance engagement, streamline administration, and improve learning outcomes across the entire educational journey.
                        </p>
                    </div>
                </div>

                {/* Why Choose Sapphire */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Educational Institutions Choose Sapphire</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Student-Centric Design", desc: "We design with students, teachers, and administrators in mind, creating engaging and intuitive learning experiences.", img: `${import.meta.env.BASE_URL}student_centric.png` },
                                { title: "Scalable Infrastructure", desc: "Cloud-native architectures that support growth from classrooms to global online universities.", img: `${import.meta.env.BASE_URL}scalable_infra_edu.png` },
                                { title: "Seamless Integration", desc: "Connect with existing SIS, LMS, and third-party tools to create a unified educational ecosystem.", img: `${import.meta.env.BASE_URL}integration_edu.png` },
                                { title: "Engagement & Analytics", desc: "Real-time insights into student performance, engagement metrics, and predictive analytics for intervention.", img: `${import.meta.env.BASE_URL}analytics_edu.png` },
                                { title: "Accessibility First", desc: "WCAG-compliant platforms ensuring every student has equal access to educational resources.", img: `${import.meta.env.BASE_URL}accessibility_edu.png` },
                                { title: "Gamification & Interactive Learning", desc: "Incorporating game mechanics, simulations, and interactive content to boost engagement and retention.", img: `${import.meta.env.BASE_URL}gamification_edu.png` },
                            ].map((item, i) => (
                                <NeonGlassCard key={i} {...item} index={i} />
                            ))}
                        </div>
                    </div>
                </div>

                <ProvenImpact
                    backgroundImage={`${import.meta.env.BASE_URL}education_hero.png`}
                    stats={[
                        { val: "95%", label: "Student Engagement", sub: "increase through interactive learning modules" },
                        { val: "30%", label: "Better Outcomes", sub: "in standardized test scores and retention" },
                        { val: "50%", label: "Time Saved", sub: "for educators through automated grading and admin" }
                    ]}
                />

                {/* Key Solutions */}
                <div className="py-24 bg-white/5 border-y border-white/5" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Key Solutions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                {
                                    title: "Learning Management Systems",
                                    desc: "Comprehensive LMS platforms with course management, assessments, grading, and collaborative tools.",
                                    points: ["Video-based learning with interactive quizzes", "Assignment submission and peer review", "Discussion forums and real-time collaboration"]
                                },
                                {
                                    title: "Virtual Classrooms",
                                    desc: "Live, interactive classroom experiences with HD video, screen sharing, breakout rooms, and recording.",
                                    points: ["Multi-device support (desktop, tablet, mobile)", "Whiteboard and annotation tools", "Attendance tracking and engagement analytics"]
                                },
                                {
                                    title: "Student Information Systems",
                                    desc: "Centralized student data management for enrollment, attendance, grades, and communication.",
                                    points: ["Automated enrollment workflows", "Parent and student portals", "Integration with payment gateways"]
                                },
                                {
                                    title: "Adaptive Learning Platforms",
                                    desc: "AI-driven personalized learning paths that adapt to each student's pace and learning style.",
                                    points: ["Real-time progress tracking", "Customized content recommendations", "Learning gap identification"]
                                },
                                {
                                    title: "Assessment & Proctoring",
                                    desc: "Secure online examination platforms with AI-powered proctoring and plagiarism detection.",
                                    points: ["Randomized question banks", "Live and automated proctoring", "Detailed analytics and reporting"]
                                },
                                {
                                    title: "Content Management",
                                    desc: "Robust content libraries with multimedia support, version control, and accessibility compliance.",
                                    points: ["Multi-format content support", "SCORM/xAPI compliance", "Content sharing and reusability"]
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Digital Transformation Across the Learning Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { stage: "Pre-Enrollment", items: "Course discovery, online applications, eligibility verification, payment processing." },
                            { stage: "Active Learning", items: "Interactive content delivery, real-time assessments, peer collaboration, progress tracking." },
                            { stage: "Assessment & Certification", items: "Secure examinations, automated grading, digital certificates, credential verification." },
                            { stage: "Alumni & Engagement", items: "Continued learning, alumni networks, career services, fundraising platforms." },
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
                                "K-12 Schools", "Universities & Colleges", "Online Course Providers",
                                "Corporate Training Programs", "EdTech Startups", "Certification Bodies"
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
                            { step: "01", title: "Discovery", desc: "Requirements & Pedagogy Mapping" },
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

export default EducationalPlatforms;
