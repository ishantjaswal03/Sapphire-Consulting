import React, { useState } from 'react';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);

        fetch('contact.php', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert(
                        "Success! Thank you for your project request. We'll review your requirements within 24 hours and get back to you with next steps."
                    );
                    e.target.reset();
                } else {
                    alert('Error: ' + data.message.replace(/<[^>]*>/g, ''));
                }
            })
            .catch((error) => {
                // In a real React app without PHP backend, this will fail.
                // We can simulate success for demonstration if needed, but per instructions, we keep logic.
                console.error('Error:', error);
                alert(
                    'Error: Could not send message. Please try again or email us directly at contact@sapphiretechconsulting.com'
                );
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8 md:p-10 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-600 text-white shadow-xl">
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <div className="flex items-start gap-4 mb-8">
                    <div className="shrink-0 mt-0.5">
                        <svg
                            className="w-6 h-6 text-emerald-200"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6l3.5 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold text-emerald-100">Business Hours</p>
                        <p className="text-emerald-50/90">Mon–Fri: 9:00 AM – 6:00 PM EST</p>
                        <p className="text-emerald-50/90">Weekend: By Appointment</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="shrink-0 mt-0.5">
                        <svg
                            className="w-6 h-6 text-emerald-200"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5V6.75A1.75 1.75 0 0 0 13.25 5h-7.5A1.75 1.75 0 0 0 4 6.75v10.5A1.75 1.75 0 0 0 5.75 19h7.5A1.75 1.75 0 0 0 15 17.25V13l5 3V7l-5 3z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold text-emerald-100">Free Consultation</p>
                        <p className="text-emerald-50/90">Schedule a 30-minute discovery call to discuss your project needs.</p>
                    </div>
                </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl contact-section-form">
                <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="cf-submitted" value="1" />

                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-200 mb-1">
                            Full Name <span className="text-emerald-400">*</span>
                        </label>
                        <input
                            id="fullName"
                            name="cf-name"
                            type="text"
                            required
                            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                            Email Address <span className="text-emerald-400">*</span>
                        </label>
                        <input
                            id="email"
                            name="cf-email"
                            type="email"
                            required
                            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-1">
                            Company / Organization
                        </label>
                        <input
                            id="company"
                            name="cf-company"
                            type="text"
                            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-gray-200 mb-1">
                            Industry Focus
                        </label>
                        <select
                            id="industry"
                            name="cf-industry"
                            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400"
                        >
                            <option value="" className="bg-gray-950 text-gray-100">Select your industry</option>
                            <option className="bg-gray-950 text-gray-100">Healthcare</option>
                            <option className="bg-gray-950 text-gray-100">Education</option>
                            <option className="bg-gray-950 text-gray-100">Marketing / MarTech</option>
                            <option className="bg-gray-950 text-gray-100">Financial Services / FinTech</option>
                            <option className="bg-gray-950 text-gray-100">E-Commerce</option>
                            <option className="bg-gray-950 text-gray-100">Cloud / DevOps</option>
                            <option className="bg-gray-950 text-gray-100">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="details" className="block text-sm font-medium text-gray-200 mb-1">
                            Project Details <span className="text-emerald-400">*</span>
                        </label>
                        <textarea
                            id="details"
                            name="cf-message"
                            rows="6"
                            required
                            className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400"
                            placeholder="Please describe your project requirements, timeline, and any specific technical needs..."
                        ></textarea>
                    </div>

                    <div className="pt-2">
                        <button type="submit" disabled={isSubmitting}>
                            <div>
                                <span>{isSubmitting ? 'Sending...' : 'Send Project Request'}</span>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
