"use client";

import { motion } from "motion/react";
import "../../styles/home/Hero.css";

export default function Hero() {
    const handleMouseMove = (event) => {
        const hero = event.currentTarget;
        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hero.style.setProperty("--mouse-x", `${x}px`);
        hero.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section
            className="hero"
            onMouseMove={handleMouseMove}
        >
            <div className="hero-glow" />

            <div className="hero-reveal">
                <div className="hero-reveal-image" />
            </div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <div className="hero-tag">
                    <span />
                    DIGITAL PRODUCTS, BUILT WITH PURPOSE
                </div>

                <h1>
                    Strategy, design
                    <br />
                    and technology
                    <br />
                    <span>under one roof.</span>
                </h1>

                <p>
                    From early ideas and MVPs to websites, applications
                    and custom technology, On The Mark helps businesses
                    plan, build and launch digital products.
                </p>

                <div className="hero-actions">
                    <a
                        href="#contact"
                        className="hero-button hero-button-primary"
                    >
                        <span className="button-label">
                            <span>Start a project</span>
                            <span>Start a project</span>
                        </span>

                        <span className="button-arrow">↗</span>
                    </a>

                    <a
                        href="#services"
                        className="hero-button hero-button-secondary"
                    >
                        <span className="button-label">
                            <span>Our services</span>
                            <span>Our services</span>
                        </span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}