"use client";

import { motion } from "motion/react";
import "../../styles/services/ServicesCTA.css";

export default function ServicesCTA() {
    return (
        <section className="services-cta">
            <div className="services-cta-glow" />

            <div className="services-cta-accent" />

            <motion.div
                className="services-cta-content"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >

                <h2>
                    Have something
                    <br />
                    <span>in mind?</span>
                </h2>

                <p>
                    Tell us what you're building. We'll help you
                    figure out the rest.
                </p>

                <a
                    href="/contact"
                    className="services-cta-button"
                >
                    <span>Start a project</span>

                    <span className="services-cta-arrow">
                    <svg
                    viewBox="0 0 32 20"
                    aria-hidden="true"
                    >
                <path d="M2 10H27" />
                <path d="M20 3L27 10L20 17" />
    </svg>
</span>
                </a>
            </motion.div>
        </section>
    );
}