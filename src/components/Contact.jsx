import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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

            gsap.fromTo(formRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" className="bg-transparent text-white py-24" ref={sectionRef}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-24" ref={titleRef}>
                    <h2 className="title-with-lines mb-4">Start Your Project Journey</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Schedule a complimentary discovery call with our team to discuss your project in detail.
                    </p>
                </div>
                <div id="contact-form-container" ref={formRef}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
