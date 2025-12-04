import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useMobileHover = (ref, className = 'mobile-hover') => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Function to check if it's mobile
        const checkMobile = () => window.matchMedia('(max-width: 768px)').matches;

        if (!checkMobile()) return;

        const st = ScrollTrigger.create({
            trigger: element,
            start: 'top 60%',
            end: 'bottom 40%',
            toggleClass: className,
        });

        return () => {
            st.kill();
        };
    }, [ref, className]);
};

export default useMobileHover;
