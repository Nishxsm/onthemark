"use client";

import { useEffect, useRef, useState } from "react";
import "../../styles/services/ServiceCard.css";

export default function ServiceCard({ service }) {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const card = cardRef.current;

        if (!card) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(card);

        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={cardRef}
            className={`service-detail-card ${
                visible ? "service-detail-card-visible" : ""
            }`}
        >
            <div className="service-detail-grid" />

            <div className="service-detail-icon">
                {service.icon}
            </div>

            <div className="service-detail-content">
                <h2>{service.title}</h2>

                <p>{service.description}</p>
            </div>

            <div className="service-detail-features">
                {service.features.map((feature) => (
                    <div
                        className="service-detail-feature"
                        key={feature}
                    >
                        <span className="service-detail-dot" />
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </article>
    );
}