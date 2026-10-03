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

    const handleButtonMove = (event) => {
        const button = event.currentTarget;
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const moveX = (x - rect.width / 2) * 0.08;
        const moveY = (y - rect.height / 2) * 0.08;

        button.style.setProperty(
            "--button-x",
            `${moveX}px`
        );

        button.style.setProperty(
            "--button-y",
            `${moveY}px`
        );
    };

    const handleButtonLeave = (event) => {
        const button = event.currentTarget;

        button.style.setProperty(
            "--button-x",
            "0px"
        );

        button.style.setProperty(
            "--button-y",
            "0px"
        );
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
                <h1>
                    Strategy, design
                    <br />
                    and technology
                    <br />
                    <span>under one roof.</span>
                </h1>

                <p>
                    From early ideas and MVPs to websites,
                    applications and custom technology, On The
                    Mark helps businesses plan, build and launch
                    digital products.
                </p>

                <div className="hero-actions">
                    <a
                        href="#contact"
                        className="hero-button hero-button-primary"
                        onMouseMove={handleButtonMove}
                        onMouseLeave={handleButtonLeave}
                    >
                        <span className="button-label">
                            Start a project
                        </span>

                        <span className="button-arrow">
                            <svg
                                viewBox="0 0 32 20"
                                aria-hidden="true"
                            >
                                <path d="M2 10H27" />
                                <path d="M20 3L27 10L20 17" />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="#services"
                        className="hero-button hero-button-secondary"
                        onMouseMove={handleButtonMove}
                        onMouseLeave={handleButtonLeave}
                    >
                        <span className="button-label">
                            Our services
                        </span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
}