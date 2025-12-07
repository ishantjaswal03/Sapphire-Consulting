import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            {/* Hero */}
            <section
                className="relative text-white min-h-[50vh] overflow-hidden flex items-center bg-black"
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
                        <span className="text-glow-green">Terms</span> & <span className="text-glow-green">Conditions</span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
                        Please read these Terms carefully. By accessing or using our services, you agree to be bound by them.
                    </p>
                </div>
            </section>

            {/* TERMS SECTION */}
            <section id="terms" className="bg-black text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="title-with-lines mb-4">Terms &amp; Conditions</h2>
                        <p className="text-gray-300">Last updated: 11-02-2024</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8 text-gray-200 leading-7">
                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Terms and Conditions</h3>
                            <p>
                                These Terms and Conditions (“Terms”) govern the use of the services provided by{' '}
                                <strong>Sapphire Consulting</strong> (“Company”), including but not limited to website access, software
                                development services, and any other services offered by <strong>Sapphire Consulting</strong>. By using
                                our services, you agree to be bound by these Terms.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Services</h3>
                            <p className="mb-2">
                                <strong>Sapphire Consulting</strong> offers a variety of software development services, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Custom software development</li>
                                <li>Mobile app development</li>
                                <li>Website development</li>
                                <li>Integration services</li>
                                <li>Consulting and advisory services</li>
                            </ul>
                            <p className="mt-2">
                                The specific scope of services will be defined in a separate agreement between{' '}
                                <strong>Sapphire Consulting</strong> and the Client.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Client Responsibilities</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    Client shall provide <strong>Sapphire Consulting</strong> with all necessary information and materials
                                    to complete the services in a timely manner.
                                </li>
                                <li>
                                    Client shall cooperate fully with <strong>Sapphire Consulting</strong> and its representatives
                                    throughout the project.
                                </li>
                                <li>
                                    Client shall be responsible for obtaining and maintaining all necessary licenses and permits related
                                    to the project.
                                </li>
                                <li>Client shall be responsible for reviewing and approving all deliverables prior to final release.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Intellectual Property</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    All intellectual property rights in and to the services and deliverables, including but not limited to
                                    software, designs, and documentation, shall be owned by <strong>Sapphire Consulting</strong>.
                                </li>
                                <li>
                                    Client shall be granted a non-exclusive, non-transferable license to use the deliverables for its
                                    internal business purposes only.
                                </li>
                                <li>
                                    Client shall not reverse engineer, modify, or decompile the deliverables without the prior written
                                    consent of <strong>Sapphire Consulting</strong>.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Payment</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    Payment terms will be defined in a separate agreement between <strong>Sapphire Consulting</strong> and
                                    the Client.
                                </li>
                                <li>Late payments may be subject to late fees.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Cancellation/Refund</h3>
                            <p>
                                As our services are intangible digital products, we cannot offer refunds or cancellations once services
                                have been initiated. This is due to the nature of service and the immediate value they provide.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Confidentiality</h3>
                            <p>
                                Both <strong>Sapphire Consulting</strong> and the Client agree to keep all confidential information
                                disclosed to each other confidential. Confidential information includes but is not limited to trade
                                secrets, business plans, technical specifications, and customer information.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Warranties and Disclaimers</h3>
                            <p>
                                <strong>
                                    Sapphire Consulting MAKES NO WARRANTIES, EXPRESS OR IMPLIED, OF ANY KIND WITH RESPECT TO THE SERVICES
                                    OR DELIVERABLES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                                    PURPOSE, OR NON-INFRINGEMENT.
                                </strong>{' '}
                                <strong>Sapphire Consulting</strong> DISCLAIMS ALL LIABILITY FOR ANY DAMAGES ARISING OUT OF OR IN
                                CONNECTION WITH THE SERVICES OR DELIVERABLES, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL,
                                CONSEQUENTIAL, AND PUNITIVE DAMAGES.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Termination</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong>Sapphire Consulting</strong> may terminate these Terms or any agreement with the Client
                                    immediately upon written notice if the Client breaches any provision of these Terms or the agreement.
                                </li>
                                <li>
                                    The Client may terminate these Terms or any agreement with <strong>Sapphire Consulting</strong> upon
                                    written notice for any reason.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Governing Law and Jurisdiction</h3>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of [State/Country]. Any
                                dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the
                                courts of [State/Country].
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Entire Agreement</h3>
                            <p>
                                These Terms constitute the entire agreement between <strong>Sapphire Consulting</strong> and the Client
                                with respect to the subject matter hereof and supersede all prior or contemporaneous communications,
                                representations, or agreements, whether oral or written.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Severability</h3>
                            <p>
                                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck
                                and the remaining provisions shall remain in full force and effect.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-[#61FFB1] mb-3">Amendments</h3>
                            <p>
                                These Terms may be amended only by a written agreement signed by both <strong>Sapphire Consulting</strong>{' '}
                                and the Client.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Terms;
