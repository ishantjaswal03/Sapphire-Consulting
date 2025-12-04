{ label: "Cloud Architecture", href: "/cloud-architecture", ariaLabel: "Cloud Architecture" },
{ label: "Data Analytics", href: "/data-analytics", ariaLabel: "Data Analytics" }
            ]
        },
{
    label: "Company",
        bgColor: "#1a1a1a",
            textColor: "#fff",
                links: [
                    { label: "Home", href: "/", ariaLabel: "Home" },
                    { label: "Privacy Policy", href: "/privacy", ariaLabel: "Privacy Policy" },
                    { label: "Terms of Service", href: "/terms", ariaLabel: "Terms of Service" }
                ]
},
{
    label: "Connect",
        bgColor: "#222",
            textColor: "#fff",
                links: [
                    { label: "Contact Us", href: "#contact", ariaLabel: "Contact Us", mobileOnly: true },
                    { label: "Email", href: "mailto:contact@sapphiretechconsulting.com", ariaLabel: "Email us" }
                ]
}
    ];

return (
    <CardNav
        logo={`${import.meta.env.BASE_URL}logo.png`}
        logoAlt="Sapphire Consulting"
        companyName="Sapphire Consulting"
        items={navItems}
        baseColor="#000"
        menuColor="#fff"
        buttonBgColor="#61FFB1"
        buttonTextColor="#000"
        ease="power3.out"
    />
);
};

export default Navbar;
