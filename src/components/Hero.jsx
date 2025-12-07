import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CardNav.css'; // Import liquid glass styles

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const videoRef = useRef(null);
    const videoReverseRef = useRef(null);
    const heroContentRef = useRef(null);
    const headlineRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const videoReverse = videoReverseRef.current;

        const setupVideoLooping = (v) => {
            if (!v) return;
            const handleTimeUpdate = () => {
                if (v.duration && v.duration - v.currentTime <= 0.3) {
                    v.currentTime = 0;
                    v.play();
                }
            };
            const handleEnded = () => {
                v.currentTime = 0;
                v.play();
            };

            v.addEventListener('timeupdate', handleTimeUpdate);
            v.addEventListener('ended', handleEnded);

            return () => {
                v.removeEventListener('timeupdate', handleTimeUpdate);
                v.removeEventListener('ended', handleEnded);
            };
        };

        const cleanup1 = setupVideoLooping(video);
        const cleanup2 = setupVideoLooping(videoReverse);

        let currentVideo = 0;
        const switcherInterval = setInterval(() => {
            if (!video || !videoReverse) return;
            if (currentVideo === 0) {
                video.classList.add('opacity-0');
                videoReverse.classList.remove('opacity-0');
                currentVideo = 1;
            } else {
                videoReverse.classList.add('opacity-0');
                video.classList.remove('opacity-0');
                currentVideo = 0;
            }
        }, 8000);

        // Hero content animations
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(headlineRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.3 }
            )
                .fromTo(descriptionRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    '-=0.5'
                )
                .fromTo(buttonRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    '-=0.4'
                );
        }, heroContentRef);

        return () => {
            if (cleanup1) cleanup1();
            if (cleanup2) cleanup2();
            clearInterval(switcherInterval);
            ctx.revert();
        };
    }, []);

    return (
        <section
            className="relative text-white min-h-screen overflow-hidden flex items-center bg-black"
            id="hero"
            style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
            }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm transition-opacity duration-1000"
                id="hero-video"
            >
                <source src={`${import.meta.env.BASE_URL}Hero_section_background.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video
                autoPlay
                loop
                muted
                playsInline
                ref={videoReverseRef}
                className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm transition-opacity duration-1000 opacity-0"
                id="hero-video-reverse"
            >
                <source src={`${import.meta.env.BASE_URL}Hero_section_background.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div id="hero-overlay" className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
            <div id="hero-content" className="container mx-auto px-4 relative z-20 text-center py-28" ref={heroContentRef}>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl mx-auto" ref={headlineRef}>
                    <span className="text-glow-green">Transform</span> Your <span className="text-glow-green">Business</span> with{' '}
                    <span className="text-glow-green">Innovative</span> Technology{' '}
                    <span className="text-glow-green">Solutions</span>
                </h1>
                <p className="text-base md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto" ref={descriptionRef}>
                    Sapphire Consulting delivers cutting-edge software development, digital transformation, and IT consulting
                    services across healthcare, education, marketing technology, and financial services sectors.
                </p>
                <button
                    ref={buttonRef}
                    className="liquidGlass-wrapper"
                    onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    style={{
                        padding: 0, // Reset padding as inner div handles it? Or wrapper?
                        // We need to match the size effectively.
                        borderRadius: '8px',
                        overflow: 'hidden',
                        display: 'inline-block', // Ensure it doesn't span full width if block
                        border: 'none', // Reset default border
                        cursor: 'pointer'
                    }}
                >
                    <div className="liquidGlass-effect"></div>
                    <div className="liquidGlass-tint"></div>
                    <div className="liquidGlass-shine"></div>
                    <div className="liquidGlass-text">
                        <div style={{ background: 'transparent', padding: '12px 24px' }}>
                            <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>Start Your Digital Journey</span>
                        </div>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default Hero;
