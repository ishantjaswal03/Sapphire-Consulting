import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate title
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

            // Animate cards with stagger
            gsap.fromTo(cardsRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: cardsRef.current[0],
                        start: "top 85%",
                    }
                }
            );

            // Mobile Hover Effect
            ScrollTrigger.matchMedia({
                "(max-width: 768px)": function () {
                    cardsRef.current.forEach((card) => {
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

    const setCardRef = (index) => (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current[index] = el;
        }
    };

    return (
        <section className="bg-black py-24 expertise-section" id="expertise" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-24" ref={titleRef}>
                    <h2 className="title-with-lines mb-4">Our Expertise Areas</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Specialized technology solutions designed to drive innovation and growth across diverse industries.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-28 justify-items-center">
                    <div className="card card-1" ref={setCardRef(0)}>
                        <div className="face face1" data-title="Custom Software Development"></div>
                        <div className="face face2">
                            <div className="content">
                                <p>
                                    Enterprise-grade applications built with modern technologies including React, Node.js, Python, and
                                    cloud platforms. We create scalable solutions that grow with your business needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-2" ref={setCardRef(1)}>
                        <div className="face face1" data-title="Mobile & Web Applications"></div>
                        <div className="face face2">
                            <div className="content">
                                <p>
                                    Cross-platform mobile apps and responsive web applications designed for optimal user experience across
                                    all devices and platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-3" ref={setCardRef(2)}>
                        <div className="face face1" data-title="HIPAA & Compliance Solutions"></div>
                        <div className="face face2">
                            <div className="content">
                                <p>
                                    Secure, compliant systems for healthcare and sensitive data handling. Expert implementation of HIPAA,
                                    GDPR, and industry-specific regulatory requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-4" ref={setCardRef(3)}>
                        <div className="face face1" data-title="MarTech & Analytics"></div>
                        <div className="face face2">
                            <div className="content">
                                <p>
                                    Marketing technology platforms, customer analytics, and data-driven solutions to optimize marketing
                                    performance and customer engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-5" ref={setCardRef(4)}>
                        <div className="face face1" data-title="EdTech Solutions"></div>
                        <div className="face face2">
                            <div className="content">
                                <p>
                                    Educational technology platforms including learning management systems, student portals, and
                                    interactive educational applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card card-6" ref={setCardRef(5)}>
                        <div className="face face1" data-title="Digital Transformation"></div>
                        <div className="face face2">
                            <div className="content">
                                <p>
                                    Strategic consulting and implementation to modernize legacy systems, optimize workflows, and drive
                                    digital innovation across your organization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
