import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './PillNav.css';

const PillNav = ({
    logo,
    logoAlt = 'Logo',
    items,
    activeHref,
    className = '',
    ease = 'power3.easeOut',
    baseColor = '#fff',
    pillColor = '#060010',
    hoveredPillTextColor = '#060010',
    pillTextColor,
    onMobileMenuClick,
    initialLoadAnimation = true
}) => {
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const circleRefs = useRef([]);
    const tlRefs = useRef([]);
    const activeTweenRefs = useRef([]);
    const logoImgRef = useRef(null);
    const logoTweenRef = useRef(null);
    const hamburgerRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const navItemsRef = useRef(null);
    const logoRef = useRef(null);
    const dropdownRefs = useRef([]);

    useEffect(() => {
        const layout = () => {
            circleRefs.current.forEach((bg, i) => {
                if (!bg) return;

                // Reset styles for the new simple effect
                bg.style.width = '100%';
                bg.style.height = '100%';
                bg.style.bottom = '0';
                bg.style.left = '0';
                bg.style.borderRadius = '9999px';

                // Initial state: scaled down and invisible
                gsap.set(bg, {
                    scale: 0.8,
                    opacity: 0,
                    transformOrigin: 'center center'
                });

                const pill = bg.parentElement;
                const label = pill.querySelector('.pill-label');
                const white = pill.querySelector('.pill-label-hover');
                const { height: h } = pill.getBoundingClientRect();

                if (label) gsap.set(label, { y: 0 });
                if (white) gsap.set(white, { y: h + 12, opacity: 0 });

                tlRefs.current[i]?.kill();
                const tl = gsap.timeline({ paused: true });

                // Simple scale and fade in effect
                tl.to(bg, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                    overwrite: 'auto'
                }, 0);

                if (label) {
                    tl.to(label, { y: -h, duration: 0.4, ease: 'power2.out', overwrite: 'auto' }, 0);
                }

                if (white) {
                    gsap.set(white, { y: h, opacity: 0 });
                    tl.to(white, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', overwrite: 'auto' }, 0);
                }

                tlRefs.current[i] = tl;
            });
        };

        layout();

        const onResize = () => layout();
        window.addEventListener('resize', onResize);

        if (document.fonts?.ready) {
            document.fonts.ready.then(layout).catch(() => { });
        }

        const menu = mobileMenuRef.current;
        if (menu) {
            gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
        }

        if (initialLoadAnimation) {
            const logo = logoRef.current;
            const navItems = navItemsRef.current;

            if (logo) {
                gsap.set(logo, { scale: 0 });
                gsap.to(logo, {
                    scale: 1,
                    duration: 0.6,
                    ease
                });
            }

            if (navItems) {
                // Removed overflow: hidden to ensure dropdowns are visible
                gsap.set(navItems, { width: 0 });
                gsap.to(navItems, {
                    width: 'auto',
                    duration: 0.6,
                    ease
                });
            }
        }

        return () => window.removeEventListener('resize', onResize);
    }, [items, ease, initialLoadAnimation]);

    const handleEnter = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.4,
            ease: 'power2.out',
            overwrite: 'auto'
        });
    };

    const handleLeave = i => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto'
        });
    };

    const handleDropdownEnter = (i) => {
        handleEnter(i);
        const dropdown = dropdownRefs.current[i];
        if (dropdown) {
            gsap.to(dropdown, {
                autoAlpha: 1,
                y: 0,
                duration: 0.3,
                ease
            });
        }
    };

    const handleDropdownLeave = (i) => {
        handleLeave(i);
        const dropdown = dropdownRefs.current[i];
        if (dropdown) {
            gsap.to(dropdown, {
                autoAlpha: 0,
                y: 10,
                duration: 0.2,
                ease
            });
        }
    };

    const handleLogoEnter = () => {
        const img = logoImgRef.current;
        if (!img) return;
        logoTweenRef.current?.kill();
        gsap.set(img, { rotate: 0 });
        logoTweenRef.current = gsap.to(img, {
            rotate: 360,
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;

        if (hamburger) {
            const lines = hamburger.querySelectorAll('.hamburger-line');
            if (newState) {
                gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
            } else {
                gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
            }
        }

        if (menu) {
            if (newState) {
                gsap.set(menu, { visibility: 'visible' });
                gsap.fromTo(
                    menu,
                    { opacity: 0, y: 10, scaleY: 1 },
                    {
                        opacity: 1,
                        y: 0,
                        scaleY: 1,
                        duration: 0.3,
                        ease,
                        transformOrigin: 'top center'
                    }
                );
            } else {
                gsap.to(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1,
                    duration: 0.2,
                    ease,
                    transformOrigin: 'top center',
                    onComplete: () => {
                        gsap.set(menu, { visibility: 'hidden' });
                    }
                });
            }
        }

        onMobileMenuClick?.();
    };

    const isExternalLink = href =>
        href && (href.startsWith('http://') ||
            href.startsWith('https://') ||
            href.startsWith('//') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            href.startsWith('#'));

    const isRouterLink = href => href && !isExternalLink(href);

    const cssVars = {
        ['--base']: baseColor,
        ['--pill-bg']: pillColor,
        ['--hover-text']: hoveredPillTextColor,
        ['--pill-text']: resolvedPillTextColor
    };

    const renderPillContent = (item, i) => (
        <>
            <span
                className="hover-circle"
                aria-hidden="true"
                ref={el => {
                    circleRefs.current[i] = el;
                }}
            />
            <span className="label-stack">
                <span className="pill-label">
                    {item.label}
                    {item.subItems && (
                        <svg
                            className="dropdown-arrow"
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1L5 5L9 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </span>
                <span className="pill-label-hover" aria-hidden="true">
                    {item.label}
                    {item.subItems && (
                        <svg
                            className="dropdown-arrow"
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1L5 5L9 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </span>
            </span>
        </>
    );

    return (
        <div className="pill-nav-container">
            <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
                {isRouterLink(items?.[0]?.href) ? (
                    <Link
                        className="pill-logo"
                        to={items[0].href}
                        aria-label="Home"
                        onMouseEnter={handleLogoEnter}
                        role="menuitem"
                        ref={el => {
                            logoRef.current = el;
                        }}
                    >
                        <img src={logo} alt={logoAlt} ref={logoImgRef} />
                    </Link>
                ) : (
                    <a
                        className="pill-logo"
                        href={items?.[0]?.href || '#'}
                        aria-label="Home"
                        onMouseEnter={handleLogoEnter}
                        ref={el => {
                            logoRef.current = el;
                        }}
                    >
                        <img src={logo} alt={logoAlt} ref={logoImgRef} />
                    </a>
                )}

                <div className="pill-nav-items desktop-only" ref={navItemsRef}>
                    <ul className="pill-list" role="menubar">
                        {items.map((item, i) => (
                            <li
                                key={item.href || `item-${i}`}
                                role="none"
                                className={item.subItems ? 'has-dropdown' : ''}
                                onMouseEnter={() => handleDropdownEnter(i)}
                                onMouseLeave={() => handleDropdownLeave(i)}
                            >
                                {item.subItems ? (
                                    <div className={`pill${activeHref === item.href ? ' is-active' : ''}`}>
                                        {renderPillContent(item, i)}
                                        <div
                                            className="dropdown-menu"
                                            ref={el => dropdownRefs.current[i] = el}
                                        >
                                            {item.subItems.map((subItem, subIndex) => (
                                                isRouterLink(subItem.href) ? (
                                                    <Link
                                                        key={subIndex}
                                                        to={subItem.href}
                                                        className="dropdown-item"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ) : (
                                                    <a
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        className="dropdown-item"
                                                        onClick={(e) => {
                                                            if (subItem.href.startsWith('#')) {
                                                                e.preventDefault();
                                                                document.querySelector(subItem.href)?.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        }}
                                                    >
                                                        {subItem.label}
                                                    </a>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                ) : isRouterLink(item.href) ? (
                                    <Link
                                        role="menuitem"
                                        to={item.href}
                                        className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                                        aria-label={item.ariaLabel || item.label}
                                    >
                                        {renderPillContent(item, i)}
                                    </Link>
                                ) : (
                                    <a
                                        role="menuitem"
                                        href={item.href}
                                        className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                                        aria-label={item.ariaLabel || item.label}
                                    >
                                        {renderPillContent(item, i)}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    className="mobile-menu-button mobile-only"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    ref={hamburgerRef}
                >
                    <span className="hamburger-line" />
                    <span className="hamburger-line" />
                </button>
            </nav>

            <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
                <ul className="mobile-menu-list">
                    {items.map((item, i) => (
                        <li key={item.href || `mobile-item-${i}`}>
                            {item.subItems ? (
                                <>
                                    <div className="mobile-menu-header">{item.label}</div>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <a
                                            key={subIndex}
                                            href={subItem.href}
                                            className="mobile-menu-link sub-link"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                if (subItem.href.startsWith('#')) {
                                                    setTimeout(() => {
                                                        document.querySelector(subItem.href)?.scrollIntoView({ behavior: 'smooth' });
                                                    }, 300);
                                                }
                                            }}
                                        >
                                            {subItem.label}
                                        </a>
                                    ))}
                                </>
                            ) : isRouterLink(item.href) ? (
                                <Link
                                    to={item.href}
                                    className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    href={item.href}
                                    className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PillNav;
