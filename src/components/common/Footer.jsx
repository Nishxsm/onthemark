import Image from "next/image";
import Link from "next/link";
import "../../styles/common/Footer.css";

const company = [
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookies", href: "/cookies" }
];

const services = [
    { label: "Website Design", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "Web Applications", href: "/services" },
    { label: "Digital Consultancy", href: "/services" },
    { label: "Single Page Website", href: "/services" },
];

function MailIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer__top-line" />

            <div className="footer__inner">

                {/* BRAND */}
                <div className="footer__brand">

                    <Link
                        href="/"
                        className="footer__logo-link"
                    >
                        <Image
                            src="/images/otm-logo1.png"
                            alt="Logo"
                            width={70}
                            height={56}
                            className="footer__logo"
                        />
                    </Link>

                    <p className="footer__tagline">
                        Creating exceptional digital experiences
                        <br />
                        for startups and businesses worldwide.
                    </p>

                    <Link
                        href="/contact"
                        className="footer__cta"
                    >
                        <span>Start Your Project</span>

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="m13 6 6 6-6 6" />
                        </svg>
                    </Link>

                </div>


                {/* COMPANY */}
                <div className="footer__column">

                    <h3 className="footer__heading">
                        Company
                    </h3>

                    <nav className="footer__links">
                        {company.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                </div>


                {/* SERVICES */}
                <div className="footer__column">

                    <h3 className="footer__heading">
                        Services
                    </h3>

                    <nav className="footer__links">
                        {services.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                </div>


                {/* CONTACT */}
                <div className="footer__column footer__contact">

                    <h3 className="footer__heading">
                        Get In Touch
                    </h3>

                    <div className="footer__contact-list">

                        <a
                            href="mailto:info@onthemark.in"
                            className="footer__contact-item"
                        >
                            <MailIcon />

                            <span>
                                info@onthemark.in
                            </span>
                        </a>


                        <div className="footer__contact-item">

                            <PhoneIcon />

                            <div className="footer__contact-stack">
                                <a href="8369877560">
                                    +91 8369877560
                                </a>

                                <a href="">
                                    
                                </a>
                            </div>

                        </div>


                        <div className="footer__contact-item">

                            <LocationIcon />

                            <div className="footer__contact-stack">
                                <span>Mumbai</span>
                                <span>India</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}