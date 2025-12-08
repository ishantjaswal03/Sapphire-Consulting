import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './CardNav.css';

const CardNav = ({
    logo,
    logoAlt = 'Logo',
    companyName,
    items,
    className = '',
    ease = 'power3.out',
    baseColor = '#fff',
    menuColor,
    buttonBgColor,
    buttonTextColor
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);
    const cardsRef = useRef([]);
    const tlRef = useRef(null);
    const location = useLocation();

    // Reset menu state when route changes
    useEffect(() => {
        if (isExpanded && tlRef.current) {
            setIsHamburgerOpen(false);
            setIsExpanded(false);
            tlRef.current.reverse();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (!isMobile) return 60; // Standard desktop bar height
        if (isMobile) {
            const contentEl = navEl.querySelector('.card-nav-content');
            if (contentEl) {
                const wasVisible = contentEl.style.visibility;
                const wasPointerEvents = contentEl.style.pointerEvents;
                const wasPosition = contentEl.style.position;
                const wasHeight = contentEl.style.height;

                contentEl.style.visibility = 'visible';
                contentEl.style.pointerEvents = 'auto';
                contentEl.style.position = 'static';
                contentEl.style.height = 'auto';

                contentEl.offsetHeight;

                const topBar = 60;
                const padding = 16;
                const contentHeight = contentEl.scrollHeight;

                contentEl.style.visibility = wasVisible;
                contentEl.style.pointerEvents = wasPointerEvents;
                contentEl.style.position = wasPosition;
                contentEl.style.height = wasHeight;

                return topBar + contentHeight + padding;
            }
        }
        return 260;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.2,
            ease
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.2, ease, stagger: 0.05 }, '-=0.1');

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ease, items]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });

                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const handleLinkClick = (e, href) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            // Close menu if open
            if (isExpanded) {
                toggleMenu();
            }
        }
    };

    const setCardRef = i => el => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div className={`card-nav-container ${className}`}>
            <nav ref={navRef} className={`card-nav liquidGlass-wrapper ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
                <div className="liquidGlass-effect"></div>
                <div className="liquidGlass-tint"></div>
                <div className="liquidGlass-shine"></div>
                <div className="liquidGlass-text">
                    <div className="card-nav-top">
                        <div
                            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
                            onClick={toggleMenu}
                            role="button"
                            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                            tabIndex={0}
                            style={{ color: menuColor || '#000' }}
                        >
                            <div className="hamburger-line" />
                            <div className="hamburger-line" />
                        </div>

                        <Link to="/" className="logo-container">
                            <img src={logo} alt={logoAlt} className="logo" />
                            {companyName && <span className="company-name">{companyName}</span>}
                        </Link>

                        <div className="desktop-nav-menu">
                            {items.map((item, index) => (
                                <div key={index} className="desktop-nav-item">
                                    <span className="desktop-nav-label">{item.label}</span>
                                    <div className="desktop-nav-dropdown">
                                        <div className="desktop-glass-panel">
                                            <div className="liquidGlass-effect"></div>
                                            <div className="liquidGlass-tint"></div>
                                            <div className="liquidGlass-shine"></div>
                                            <div className="liquidGlass-text">
                                                {item.links.map((link, linkIndex) => (
                                                    link.href.startsWith('/') && !link.href.startsWith('//') ? (
                                                        <Link key={linkIndex} to={link.href} className="desktop-nav-link">
                                                            {link.label}
                                                        </Link>
                                                    ) : (
                                                        <a key={linkIndex} href={link.href} className="desktop-nav-link">
                                                            {link.label}
                                                        </a>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>



                    <div className="card-nav-content" aria-hidden={!isExpanded}>
                        {(items || []).slice(0, 3).map((item, idx) => (
                            <div
                                key={`${item.label}-${idx}`}
                                className="nav-card"
                                ref={setCardRef(idx)}
                                style={{ backgroundColor: item.bgColor, color: item.textColor }}
                            >
                                <div className="nav-card-label">{item.label}</div>
                                <div className="nav-card-links">
                                    {item.links?.map((lnk, i) => (
                                        lnk.href.startsWith('/') && !lnk.href.startsWith('//') ? (
                                            <Link key={`${lnk.label}-${i}`} className={`nav-card-link ${lnk.mobileOnly ? 'mobile-only-link' : ''}`} to={lnk.href} aria-label={lnk.ariaLabel}>
                                                <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                                                {lnk.label}
                                            </Link>
                                        ) : (
                                            <a
                                                key={`${lnk.label}-${i}`}
                                                className={`nav-card-link ${lnk.mobileOnly ? 'mobile-only-link' : ''}`}
                                                href={lnk.href}
                                                aria-label={lnk.ariaLabel}
                                                onClick={(e) => handleLinkClick(e, lnk.href)}
                                            >
                                                <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                                                {lnk.label}
                                            </a>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
