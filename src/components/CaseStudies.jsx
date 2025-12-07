import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
    const carouselRef = useRef(null);
    const titleRef = useRef(null);
    const carouselContainerRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // Scroll animations
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

            gsap.fromTo(carouselContainerRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: carouselContainerRef.current,
                        start: "top 85%",
                    }
                }
            );
        });

        // Carousel drag functionality
        let isDown = false;
        let startX;
        let scrollLeft;

        const disableMarquee = () => {
            carousel.style.animationPlayState = 'paused';
        };
        const enableMarquee = () => {
            carousel.style.animationPlayState = 'running';
        };

        const handleMouseDown = (e) => {
            isDown = true;
            carousel.classList.add('active-drag');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            disableMarquee();
        };

        const handleMouseLeave = () => {
            isDown = false;
            carousel.classList.remove('active-drag');
            enableMarquee();
        };

        const handleMouseUp = () => {
            isDown = false;
            carousel.classList.remove('active-drag');
            enableMarquee();
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        };

        const handleTouchStart = (e) => {
            isDown = true;
            startX = e.touches[0].pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            disableMarquee();
        };

        const handleTouchEnd = () => {
            isDown = false;
            enableMarquee();
        };

        const handleTouchMove = (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        };

        carousel.addEventListener('mousedown', handleMouseDown);
        carousel.addEventListener('mouseleave', handleMouseLeave);
        carousel.addEventListener('mouseup', handleMouseUp);
        carousel.addEventListener('mousemove', handleMouseMove);
        carousel.addEventListener('touchstart', handleTouchStart);
        carousel.addEventListener('touchend', handleTouchEnd);
        carousel.addEventListener('touchmove', handleTouchMove);

        return () => {
            carousel.removeEventListener('mousedown', handleMouseDown);
            carousel.removeEventListener('mouseleave', handleMouseLeave);
            carousel.removeEventListener('mouseup', handleMouseUp);
            carousel.removeEventListener('mousemove', handleMouseMove);
            carousel.removeEventListener('touchstart', handleTouchStart);
            carousel.removeEventListener('touchend', handleTouchEnd);
            carousel.removeEventListener('touchmove', handleTouchMove);
            ctx.revert();
        };
    }, []);

    return (
        <>
            <section className="py-16 bg-transparent text-white" id="case-studies">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" ref={titleRef}>
                        <h2 className="title-with-lines mb-4">Industry Case Studies</h2>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Real-world examples of how we've helped organizations transform their operations through technology.
                        </p>
                    </div>
                </div>
            </section>
            <div className="center-carousel" ref={carouselContainerRef}>
                <div className="carousel" mask="true" id="case-study-carousel" ref={carouselRef}>
                    <article>
                        <img
                            src="https://media.istockphoto.com/photos/doctor-office-picture-id899023542?k=6&m=899023542&s=612x612&w=0&h=1H127H9TeWH8OjoOGtU4v0Vk9oIdBhAhhCdSOv9YVac="
                            alt="Healthcare Technology Interface"
                        />
                        <h2>Healthcare Technology</h2>
                        <div>
                            <h4>HIPAA-Compliant Patient Management System</h4>
                            <p>
                                Secure, scalable patient platform for multiple locations, ensuring HIPAA compliance and smoother
                                operations.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img
                            src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Educational Technology"
                        />
                        <h2>Educational Technology</h2>
                        <div>
                            <h4>Interactive Learning Management System</h4>
                            <p>
                                Created a modern LMS platform for a leading university, supporting mobile learning, interactive content,
                                and personalized analytics.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img
                            src="https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Marketing Technology"
                        />
                        <h2>Marketing Technology</h2>
                        <div>
                            <h4>Customer Analytics & Attribution Platform</h4>
                            <p>
                                Built an enterprise marketing analytics suite that visualized the entire customer journey across multiple
                                touchpoints.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img
                            src="https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Financial Technology"
                        />
                        <h2>Financial Technology</h2>
                        <div>
                            <h4>Automated Investment Portfolio Manager</h4>
                            <p>
                                Developed a next-gen investment platform with algorithmic trading, automated risk profiling, and
                                performance tracking.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img
                            src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="E-Commerce Technology"
                        />
                        <h2>E-Commerce Technology</h2>
                        <div>
                            <h4>Multi-Vendor Marketplace Platform</h4>
                            <p>
                                Designed and deployed a scalable e-commerce platform supporting multiple vendors, payment gateways, and
                                real-time inventory.
                            </p>
                        </div>
                    </article>
                    <article>
                        <img
                            src="https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Cloud Infrastructure"
                        />
                        <h2>Cloud Infrastructure</h2>
                        <div>
                            <h4>Enterprise Cloud Migration & DevOps</h4>
                            <p>
                                Led cloud transformation for a Fortune-500 company, modernizing infrastructure and optimizing cost.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default CaseStudies;
