"use client";

import { motion } from "motion/react";
import "../../styles/services/ServicesCTA.css";

export default function ServicesCTA() {
    return (
        <section className="services-cta">
            <div className="services-cta-light" />

            <motion.div
                className="services-cta-content"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <span className="services-cta-label">
                    LET'S WORK TOGETHER
                </span>

                <h2>
                    Have something
                    <br />
                    <span>in mind?</span>
                </h2>

                <p>
                    Tell us what you're building. We'll help you figure
                    out the rest.
                </p>

                <a
                    href="/contact"
                    className="services-cta-button"
                >
                    <span>Start a project</span>
                    <span className="services-cta-arrow">
                        ↗
                    </span>
                </a>
            </motion.div>

            <div className="services-cta-line" />

            <div className="services-cta-footer">
                <span>ON THE MARK</span>
                <span>01 — 07</span>
            </div>
        </section>
    );
}