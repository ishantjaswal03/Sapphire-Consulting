import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#61FFB1]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#61FFB1]/5 rounded-full blur-[120px]" />
            </div>

            {/* Glassmorphic Container */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* 1. Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Sapphire Consulting Logo" className="w-10 h-10 object-contain" />
                            <h2 className="text-2xl font-bold text-white">
                                Sapphire Consulting
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Pioneering the future of digital transformation. We build the systems that power tomorrow's enterprises.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/company/sapphire-tech-consulting/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all duration-300 group"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Expertise */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-[#61FFB1] rounded-full" />
                            Expertise
                        </h3>
                        <ul className="space-y-3">
                            {['Custom Software', 'Mobile & Web Apps', 'Cloud Solutions', 'AI & Analytics', 'Cybersecurity'].map((item) => (
                                <li key={item}>
                                    <span className="text-gray-400 text-sm flex items-center gap-2 group cursor-default">
                                        <span className="w-1 h-1 bg-[#61FFB1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Services */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-[#61FFB1] rounded-full" />
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'Healthcare', path: '/healthcare-technology' },
                                { name: 'Education', path: '/educational-platforms' },
                                { name: 'Marketing', path: '/marketing-technology' },
                                { name: 'Cloud Arch', path: '/cloud-architecture' },
                                { name: 'Data Analytics', path: '/data-analytics' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-gray-400 hover:text-[#61FFB1] text-sm transition-colors duration-300 flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-[#61FFB1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Contact */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                            <span className="w-1 h-4 bg-white rounded-full" />
                            Contact
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm group">
                                <span className="text-[#61FFB1] mt-1">📍</span>
                                <span className="group-hover:text-white transition-colors">2125 Biscayne Blvd<br />Miami, FL 33137, USA</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm group">
                                <span className="text-[#61FFB1]">✉️</span>
                                <a href="mailto:contact@sapphiretechconsulting.com" className="group-hover:text-[#61FFB1] transition-colors">contact@sapphiretechconsulting.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
                    <p className="text-gray-500 text-xs text-center">
                        &copy; 2025 Sapphire Consulting LLC. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-gray-500 hover:text-[#61FFB1] text-xs transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-[#61FFB1] text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
