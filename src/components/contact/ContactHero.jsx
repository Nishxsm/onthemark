"use client";

import { motion } from "motion/react";
import "../../styles/contact/ContactHero.css";

export default function ContactHero() {
    return (
        <section className="contact-hero">
            <motion.div
                className="contact-hero-content"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >

                <h1>
                    Start Your
                    <br />
                    <span>Project</span>
                </h1>

                <p>
                    Tell us what you're building and we'll help
                    turn your idea into something real.
                </p>
            </motion.div>
        </section>
    );
}