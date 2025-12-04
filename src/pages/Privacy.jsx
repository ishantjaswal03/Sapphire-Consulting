import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            {/* HERO */}
            <section className="relative text-white min-h-[50vh] overflow-hidden flex items-center bg-black" id="hero">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm transition-opacity duration-1000"
                    id="hero-video"
                >
                    <source src="/Hero_section_background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm transition-opacity duration-1000 opacity-0"
                    id="hero-video-reverse"
                >
                    <source src="/Hero_section_background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div id="hero-overlay" className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <div id="hero-content" className="container mx-auto px-4 relative z-20 text-center py-24">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-4xl mx-auto">
                        <span className="text-glow-green">Privacy</span> Policy
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
                        Your trust matters. This page explains what we collect, why we collect it, and how we protect it.
                    </p>
                </div>
            </section>

            {/* PRIVACY CONTENT */}
            <section id="privacy" className="bg-black text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="title-with-lines mb-4">Privacy Policy</h2>
                        <p className="text-gray-300">Last updated: October 26, 2025</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-10 text-gray-200 leading-7">
                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">1. Who We Are</h3>
                            <p>
                                Sapphire Tech Consulting LLC (“Sapphire Tech Consulting,” “we,” “us,” or “our”) provides software
                                development, digital transformation, and consulting services. This Privacy Policy describes how we
                                handle personal information in connection with our websites, products, and services (collectively, the
                                “Services”).
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">2. Information We Collect</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <span className="font-medium">Information you provide</span> (e.g., name, email, company, project
                                    details) via contact forms, sign-ups, or contracts.
                                </li>
                                <li>
                                    <span className="font-medium">Automatic data</span> (e.g., IP address, device and browser info, pages
                                    viewed, timestamps) collected via cookies and similar technologies.
                                </li>
                                <li>
                                    <span className="font-medium">Business information</span> necessary to perform an engagement, such as
                                    technical requirements and content you supply.
                                </li>
                                <li>
                                    <span className="font-medium">Communications</span> (e.g., emails, support messages, call notes) for
                                    client service and recordkeeping.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">3. How We Use Information</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide, operate, and improve the Services and deliverables.</li>
                                <li>Respond to inquiries, schedule consultations, and manage client relationships.</li>
                                <li>Customize content, perform analytics, and enhance user experience.</li>
                                <li>Secure our systems, prevent fraud, and enforce agreements.</li>
                                <li>Comply with legal obligations and exercise legal claims.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">4. Legal Bases (EEA/UK users)</h3>
                            <p>
                                Where applicable, we process personal data based on: (i) <span className="font-medium">contract necessity</span>, (ii){' '}
                                <span className="font-medium">legitimate interests</span> (e.g., improving Services, securing systems),
                                (iii) <span className="font-medium">consent</span> (e.g., certain cookies/marketing), and (iv){' '}
                                <span className="font-medium">legal obligations</span>.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">5. Cookies & Analytics</h3>
                            <p>
                                We may use cookies, local storage, and analytics tools to understand usage and improve performance. You
                                can control cookies via your browser settings. Blocking some cookies may affect site functionality.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">6. Sharing of Information</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <span className="font-medium">Vendors/Processors</span> who assist us with hosting, security,
                                    analytics, communications, or project delivery (bound by confidentiality and data processing terms).
                                </li>
                                <li>
                                    <span className="font-medium">Business transfers</span> (e.g., merger, acquisition, financing, or sale
                                    of assets).
                                </li>
                                <li>
                                    <span className="font-medium">Legal and safety</span> (compelled disclosures, protecting rights,
                                    preventing harm or fraud).
                                </li>
                                <li>
                                    <span className="font-medium">With your consent</span> or at your direction.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">7. International Transfers</h3>
                            <p>
                                We may process information in the United States and other countries. Where required, we implement
                                appropriate safeguards (e.g., standard contractual clauses) for cross-border transfers.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">8. Data Retention</h3>
                            <p>
                                We retain personal information for as long as necessary to provide the Services, comply with legal
                                obligations, resolve disputes, and enforce agreements. Retention periods vary by data type and purpose.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">9. Security</h3>
                            <p>
                                We use reasonable administrative, technical, and physical safeguards appropriate to the nature of the
                                data and our business. No method of transmission or storage is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">10. Your Rights</h3>
                            <p>
                                Subject to applicable laws, you may have rights to access, correct, delete, or restrict processing of
                                your personal data; to data portability; and to object to certain processing. You may also withdraw
                                consent where processing is based on consent.
                            </p>
                            <ul className="list-disc pl-6 mt-3 space-y-2">
                                <li>
                                    <span className="font-medium">EEA/UK:</span> You can lodge a complaint with your local supervisory
                                    authority.
                                </li>
                                <li>
                                    <span className="font-medium">California (CCPA/CPRA):</span> You may request disclosure, correction,
                                    deletion, and opt-out of sale/share of personal information. We do not sell personal information as
                                    defined by CCPA/CPRA.
                                </li>
                            </ul>
                            <p className="mt-3">
                                To exercise rights, email us at{' '}
                                <a
                                    href="mailto:contact@sapphiretechconsulting.com"
                                    className="text-[#61FFB1] underline underline-offset-2"
                                >
                                    contact@sapphiretechconsulting.com
                                </a>
                                .
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">11. Children’s Privacy</h3>
                            <p>
                                Our Services are not directed to children under 13 (or 16 where applicable). We do not knowingly collect
                                personal information from children. If you believe a child has provided us information, contact us to
                                request deletion.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">12. Do Not Track</h3>
                            <p>
                                Some browsers offer “Do Not Track” signals. We currently do not respond to DNT signals. We will update
                                this Policy if that changes.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">13. Changes to This Policy</h3>
                            <p>
                                We may update this Policy from time to time. Material changes will be reflected by updating the “Last
                                updated” date above. Your continued use of the Services after changes indicates acceptance.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">14. Contact Us</h3>
                            <p>
                                Questions or requests? Email{' '}
                                <a
                                    href="mailto:contact@sapphiretechconsulting.com"
                                    className="text-[#61FFB1] underline underline-offset-2"
                                >
                                    contact@sapphiretechconsulting.com
                                </a>{' '}
                                or write to: 2125 Biscayne Blvd, Miami, FL 33137, USA.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Privacy;
