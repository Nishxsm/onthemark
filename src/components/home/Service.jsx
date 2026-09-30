"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "../../styles/home/Service.css";

const services = [
    {
        number: "01",
        title: "Website Design",
        description:
            "Stunning, conversion-focused websites that tell your brand story.",
        category: "DESIGN",
        icon: (
            <svg viewBox="0 0 48 48" aria-hidden="true">
                <path d="M19 12L8 24L19 36" />
                <path d="M29 12L40 24L29 36" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Web Development",
        description:
            "High-performance web applications built with modern technologies.",
        category: "DEVELOPMENT",
        icon: (
            <svg viewBox="0 0 48 48" aria-hidden="true">
                <path d="M27 4L8 27H23L20 44L40 20H25L27 4Z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Web Applications",
        description:
            "Custom web apps tailored to your business needs.",
        category: "APPLICATIONS",
        icon: (
            <svg viewBox="0 0 48 48" aria-hidden="true">
                <path d="M24 5L27 15L37 12L30 20L40 24L30 28L37 36L27 33L24 43L21 33L11 36L18 28L8 24L18 20L11 12L21 15L24 5Z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "UI/UX Design",
        description:
            "Intuitive interfaces that users love to interact with.",
        category: "EXPERIENCE",
        icon: (
            <svg viewBox="0 0 48 48" aria-hidden="true">
                <path d="M24 7C14.6 7 7 14.6 7 24C7 33.4 14.6 41 24 41H29C31.2 41 33 39.2 33 37C33 35.2 31.8 33.6 30 33H27C24.8 33 23 31.2 23 29C23 26.8 24.8 25 27 25H34C38.4 25 41 22.2 41 18C41 11.9 33.4 7 24 7Z" />
                <circle cx="16" cy="20" r="2" />
                <circle cx="22" cy="14" r="2" />
                <circle cx="30" cy="14" r="2" />
                <circle cx="35" cy="19" r="2" />
            </svg>
        ),
    },
];

const Service = () => {
    const sectionRef = useRef(null);
    const [dark, setDark] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setDark(entry.isIntersecting);
                setVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="services"
            className={`services-section ${
                dark ? "services-dark" : ""
            }`}
        >
            <div className="services-inner">

                <div className="services-heading">
                    <span className="services-eyebrow">
                        WHAT WE DO
                    </span>

                    <h2>Our Services</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <article
                            className={`service-card ${
                                index % 2 === 0
                                    ? "service-card-left"
                                    : "service-card-right"
                            } ${
                                visible
                                    ? "service-card-visible"
                                    : ""
                            }`}
                            key={service.title}
                        >
                            <div className="service-card-grid" />

                            <div className="service-card-top">
                                <span className="service-number">
                                    {service.number}
                                </span>

                                <span className="service-category">
                                    {service.category}
                                </span>
                            </div>

                            <div className="service-card-content">
                                <div className="service-icon">
                                    {service.icon}
                                </div>

                                <h3>
                                    {service.title}
                                </h3>

                                <p>
                                    {service.description}
                                </p>
                            </div>

                            <div className="service-card-bottom">
                                <span>
                                    EXPLORE SERVICE
                                </span>

                                <span className="service-card-arrow">
                                    ↗
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                <Link
                    href="/services"
                    className="services-link"
                >
                    <span>
                        View All Services
                    </span>

                    <span className="services-arrow">
                        →
                    </span>
                </Link>

            </div>
        </section>
    );
};

export default Service;