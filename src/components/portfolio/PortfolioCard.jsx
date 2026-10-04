"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import "../../styles/portfolio/PortfolioCard.css";

export default function PortfolioCard({ work }) {
    const cardRef = useRef(null);

    const handleMouseMove = (event) => {
        const card = cardRef.current;

        if (!card) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        card.style.setProperty(
            "--rotate-x",
            `${rotateX}deg`
        );

        card.style.setProperty(
            "--rotate-y",
            `${rotateY}deg`
        );

        card.style.setProperty(
            "--card-scale",
            "1.02"
        );
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;

        if (!card) return;

        card.style.setProperty(
            "--rotate-x",
            "0deg"
        );

        card.style.setProperty(
            "--rotate-y",
            "0deg"
        );

        card.style.setProperty(
            "--card-scale",
            "1"
        );
    };

    return (
        <motion.div
            className="portfolio-card-wrapper"
            initial={{
                opacity: 0,
                y: 25,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <article
                ref={cardRef}
                className="portfolio-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="portfolio-card-image">
                    <img
                        src={work.image}
                        alt={work.title}
                    />
                </div>

                <div className="portfolio-card-content">
                    <div className="portfolio-card-category">
                        {work.category}
                    </div>

                    <h2>{work.title}</h2>

                    <p>{work.description}</p>

                    <div className="portfolio-card-technologies">
                        {work.technologies.map((technology) => (
                            <span key={technology}>
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </motion.div>
    );
}