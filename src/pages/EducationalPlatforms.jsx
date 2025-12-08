import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';


import PrincipleCards from '../components/PrincipleCards';
import ClientCards from '../components/ClientCards';
import ChromaGrid from '../components/ChromaGrid';
import JourneyCards from '../components/JourneyCards';

gsap.registerPlugin(ScrollTrigger);

const EducationalPlatforms = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const sectionsRef = useRef([]);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

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
                <motion.div
                    ref={heroRef}
                    className="absolute inset-0 z-0"
                    style={{
                        y,
                        backgroundImage: `url("${import.meta.env.BASE_URL}education_hero.png")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                </motion.div>

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
                <div className="py-24" ref={addToRefs}>
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Educational Institutions Choose Sapphire</h2>
                        <div style={{ position: 'relative' }}>
                            <ChromaGrid
                                items={[
                                    {
                                        title: "Student-Centric Design",
                                        subtitle: "We design with students, teachers, and administrators in mind, creating engaging and intuitive learning experiences.",
                                        image: `${import.meta.env.BASE_URL}student_centric.png`,
                                        borderColor: "#3B82F6",
                                        gradient: "linear-gradient(145deg, #3B82F6, #000)"
                                    },
                                    {
                                        title: "Scalable Infrastructure",
                                        subtitle: "Cloud-native architectures that support growth from classrooms to global online universities.",
                                        image: `${import.meta.env.BASE_URL}scalable_infra_edu.png`,
                                        borderColor: "#10B981",
                                        gradient: "linear-gradient(180deg, #10B981, #000)"
                                    },
                                    {
                                        title: "Seamless Integration",
                                        subtitle: "Connect with existing SIS, LMS, and third-party tools to create a unified educational ecosystem.",
                                        image: `${import.meta.env.BASE_URL}integration_edu.png`,
                                        borderColor: "#F59E0B",
                                        gradient: "linear-gradient(165deg, #F59E0B, #000)"
                                    },
                                    {
                                        title: "Engagement & Analytics",
                                        subtitle: "Real-time insights into student performance, engagement metrics, and predictive analytics for intervention.",
                                        image: `${import.meta.env.BASE_URL}analytics_edu.png`,
                                        borderColor: "#EF4444",
                                        gradient: "linear-gradient(195deg, #EF4444, #000)"
                                    },
                                    {
                                        title: "Accessibility First",
                                        subtitle: "WCAG-compliant platforms ensuring every student has equal access to educational resources.",
                                        image: `${import.meta.env.BASE_URL}accessibility_edu.png`,
                                        borderColor: "#8B5CF6",
                                        gradient: "linear-gradient(225deg, #8B5CF6, #000)"
                                    },
                                    {
                                        title: "Gamification Learning",
                                        subtitle: "Incorporating game mechanics, simulations, and interactive content to boost engagement and retention.",
                                        image: `${import.meta.env.BASE_URL}gamification_edu.png`,
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

                {/* Key Solutions */}
                <div className="py-24" ref={addToRefs}>
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
                <div className="pt-24 pb-2 container mx-auto px-6" ref={addToRefs}>
                    <h2 className="title-with-lines mb-16 text-center">Digital Transformation Across the Learning Journey</h2>
                    <JourneyCards
                        steps={[
                            { id: 1, stage: "Pre-Enrollment", items: "Course discovery, online applications, eligibility verification, payment processing." },
                            { id: 2, stage: "Active Learning", items: "Interactive content delivery, real-time assessments, peer collaboration, progress tracking." },
                            { id: 3, stage: "Assessment", items: "Secure examinations, automated grading, digital certificates, credential verification." },
                            { id: 4, stage: "Alumni", items: "Continued learning, alumni networks, career services, fundraising platforms." }
                        ]}
                    />
                </div>

                {/* Who We Work With */}
                <ClientCards
                    clients={[
                        "K-12 Schools", "Universities & Colleges", "Online Course Providers",
                        "Corporate Training Programs", "EdTech Startups", "Certification Bodies"
                    ]}
                />

                {/* Engagement Principles */}
                <PrincipleCards
                    title="Our Engagement Approach"
                    principles={[
                        { title: "Pedagogical Alignment", desc: "We map technology directly to learning outcomes, ensuring digital tools enhance rather than distract from educational goals." },
                        { title: "Inclusive Access", desc: "Our designs prioritize accessibility and equity, guaranteeing that every student, regardless of ability, can fully participate." },
                        { title: "Data-Informed Design", desc: "We build loops of feedback and analytics into the core, allowing educators to iterate based on real student performance data." },
                        { title: "Scalable Ecosystems", desc: "We architect solutions that integrate seamlessly with existing SIS/LMS tools and scale from pilots to campus-wide deployments." }
                    ]}
                />

                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default EducationalPlatforms;
