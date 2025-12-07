import React from 'react';

const ClientCards = ({ title = "Who We Work With", clients }) => {
    // Default clients if none provided
    const defaultClients = [
        "Enterprises", "Startups", "Government Agencies", "Non-Profits"
    ];

    const data = clients || defaultClients;

    return (
        <div className="py-24 bg-white/5 border-y border-white/5">
            <div className="container mx-auto px-6">
                <h2 className="title-with-lines mb-16 text-center">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((client, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[#61FFB1]/50 transition-all duration-300 flex items-center justify-center text-center"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#61FFB1]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                                    {client}
                                </h3>
                                {/* Decorative underline */}
                                <div className="mt-3 w-8 h-0.5 bg-[#61FFB1]/30 mx-auto group-hover:w-16 group-hover:bg-[#61FFB1] transition-all duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientCards;
