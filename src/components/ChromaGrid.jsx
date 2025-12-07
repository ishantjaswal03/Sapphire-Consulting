import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

const ChromaGrid = ({
    items,
    className = '',
    radius = 300,
    columns = 3,
    rows = 2,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) => {
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });

    const demo = [
        // ... demo data omitted to keep file clean, we will pass props
    ];
    const data = items?.length ? items : demo;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = e => {
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardClick = url => {
        if (url) {
            // Use standard navigation if it's a route, or window.open if external
            if (url.startsWith('http')) {
                window.open(url, '_blank', 'noopener,noreferrer');
            } else {
                window.location.href = url; // Or use a router hook if passed/available, but href works for hash router too usually
                // Optimally we should receive a navigate prop or use Link but this component is generic.
                // Let's stick to handleCardClick logic provided but safe.
            }
        }
    };

    const handleCardMove = e => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${className}`}
            style={{
                '--r': `${radius}px`,
                '--cols': columns,
                '--rows': rows
            }}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            {data.map((c, i) => (
                <article
                    key={i}
                    className="chroma-card"
                    onMouseMove={handleCardMove}
                    onClick={() => handleCardClick(c.url)}
                    style={{
                        '--card-border': c.borderColor || 'transparent',
                        '--card-gradient': c.gradient,
                        cursor: c.url ? 'pointer' : 'default'
                    }}
                >
                    <div className="chroma-img-wrapper">
                        <img src={c.image} alt={c.title} loading="lazy" />
                    </div>
                    <footer className="chroma-info">
                        <h3 className="name text-lg font-bold">{c.title}</h3>
                        {c.handle && <span className="handle text-sm">{c.handle}</span>}
                        <p className="role text-gray-400 text-sm mt-1">{c.subtitle}</p>
                        {c.location && <span className="location">{c.location}</span>}
                    </footer>
                </article>
            ))}
            <div className="chroma-overlay" />
            <div ref={fadeRef} className="chroma-fade" />
        </div>
    );
};

export default ChromaGrid;
