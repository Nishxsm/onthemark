
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import "../../styles/portfolio/PortfolioCard.css";

export default function PortfolioCard({ work }) {
    const images = work.images?.length ? work.images : [work.image];
    const [activeImage, setActiveImage] = useState(0);
    const isPortrait = work.type === "app";

    const showPrevious = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setActiveImage((current) =>
            current === 0 ? images.length - 1 : current - 1
        );
    };

    const showNext = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setActiveImage((current) =>
            current === images.length - 1 ? 0 : current + 1
        );
    };

    return (
        <motion.div
            className="portfolio-card-wrapper"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <article className="portfolio-card">
                <div
                    className={`portfolio-card-image ${
                        isPortrait ? "portfolio-card-image-app" : ""
                    }`}
                >
                    <Link
                        href={work.caseStudy || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-image-link"
                        aria-label={`Visit ${work.title}`}
                        onClick={(event) => {
                            if (!work.caseStudy || work.caseStudy === "#") {
                                event.preventDefault();
                            }
                        }}
                    >
                        <img
                            key={images[activeImage]}
                            src={images[activeImage]}
                            alt={`${work.title} preview ${activeImage + 1}`}
                        />

                        <span className="portfolio-image-visit">
                            <ExternalLink size={18} />
                        </span>
                    </Link>

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                className="portfolio-image-arrow portfolio-image-prev"
                                onClick={showPrevious}
                                aria-label={`Previous image for ${work.title}`}
                            >
                                <ArrowLeft size={19} />
                            </button>

                            <button
                                type="button"
                                className="portfolio-image-arrow portfolio-image-next"
                                onClick={showNext}
                                aria-label={`Next image for ${work.title}`}
                            >
                                <ArrowRight size={19} />
                            </button>

                            <div className="portfolio-image-indicators">
                                {images.map((image, index) => (
                                    <button
                                        key={image}
                                        type="button"
                                        className={`portfolio-image-dot ${
                                            activeImage === index
                                                ? "portfolio-image-dot-active"
                                                : ""
                                        }`}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                            setActiveImage(index);
                                        }}
                                        aria-label={`Show image ${index + 1}`}
                                        aria-pressed={activeImage === index}
                                    />
                                ))}
                            </div>

                            <span className="portfolio-image-counter">
                                {String(activeImage + 1).padStart(2, "0")}
                                {" / "}
                                {String(images.length).padStart(2, "0")}
                            </span>
                        </>
                    )}
                </div>

                <div className="portfolio-card-content">
                    <div className="portfolio-card-meta">
                        <span>{work.year || "2026"}</span>
                        <span className="portfolio-meta-separator">•</span>
                        <span>{work.category}</span>
                    </div>

                    <h2>{work.title}</h2>
                    <p>{work.description}</p>

                    <div className="portfolio-card-technologies">
                        {work.technologies.map((technology) => (
                            <span key={technology}>{technology}</span>
                        ))}
                    </div>
                </div>
            </article>
        </motion.div>
    );
}
