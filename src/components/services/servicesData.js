const websiteIcon = (
    <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M19 12L8 24L19 36" />
        <path d="M29 12L40 24L29 36" />
    </svg>
);

const developmentIcon = (
    <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M27 4L8 27H23L20 44L40 20H25L27 4Z" />
    </svg>
);

const consultancyIcon = (
    <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="17" />
        <path d="M24 14V24L31 29" />
    </svg>
);

const mvpIcon = (
    <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="7" width="34" height="34" rx="5" />
        <path d="M15 17H33" />
        <path d="M15 24H33" />
        <path d="M15 31H26" />
    </svg>
);

const deploymentIcon = (
    <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 7V32" />
        <path d="M15 23L24 32L33 23" />
        <path d="M10 41H38" />
    </svg>
);

const techIcon = (
    <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="17" />
        <path d="M17 24H31" />
        <path d="M24 17V31" />
    </svg>
);

const appIcon = (
    <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="10" y="5" width="28" height="38" rx="5" />
        <path d="M17 12H31" />
        <circle cx="24" cy="36" r="2" />
    </svg>
);

export const services = [
    {
        number: "01",
        category: "CONSULTANCY",
        title: "Digital Consultancy",
        description:
            "Strategic digital guidance to help you understand, plan and execute the right technology for your business.",
        features: [
            "Digital Strategy",
            "Technology Planning",
            "Technical Consultation",
            "Product Direction",
        ],
        icon: consultancyIcon,
    },
    {
        number: "02",
        category: "DEVELOPMENT",
        title: "Web Development",
        description:
            "High-performance websites and web solutions built around your business needs.",
        features: [
            "Modern Web Technologies",
            "API Integration",
            "Responsive Development",
            "Deployment & Hosting",
        ],
        icon: developmentIcon,
    },
    {
        number: "03",
        category: "WEBSITES",
        title: "Single Page Website",
        description:
            "Focused, professional single-page websites designed to establish your presence and communicate your brand clearly.",
        features: [
            "Responsive Design",
            "Custom UI",
            "Performance Optimization",
            "SEO Setup",
        ],
        icon: websiteIcon,
    },
    {
        number: "04",
        category: "PRODUCT",
        title: "Product MVP",
        description:
            "Lean minimum viable products that turn your idea into a working product ready to validate with real users.",
        features: [
            "MVP Strategy",
            "Rapid Development",
            "Core Feature Development",
            "Product Validation",
        ],
        icon: mvpIcon,
    },
    {
        number: "05",
        category: "DEPLOYMENT",
        title: "Deployment Assistance",
        description:
            "We help take your finished product from the development environment to a live, accessible platform.",
        features: [
            "Hosting Setup",
            "Domain Configuration",
            "Production Deployment",
            "Environment Setup",
        ],
        icon: deploymentIcon,
    },
    {
        number: "06",
        category: "TECH SOLUTIONS",
        title: "Tech Solutions",
        description:
            "Practical technology solutions for ongoing digital needs, including emails, website maintenance and support.",
        features: [
            "Business Emails",
            "Website Maintenance",
            "Technical Support",
            "Digital Infrastructure",
        ],
        icon: techIcon,
    },
    {
        number: "07",
        category: "APPLICATIONS",
        title: "App Development",
        description:
            "Custom applications built to solve specific business problems and provide useful digital experiences.",
        features: [
            "Custom Applications",
            "Application Architecture",
            "API Integration",
            "Deployment Support",
        ],
        icon: appIcon,
    },
];