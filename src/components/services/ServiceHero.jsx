"use client";

import { motion } from "motion/react";
import "../../styles/services/ServiceHero.css";

export default function ServiceHero() {
    return (
        <section className="services-hero">
            <motion.div
                className="services-hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <h1>
                    Ideas into
                    <br />
                    <span>digital reality.</span>
                </h1>

                <p>
                    From strategy and development to deployment and ongoing
                    support, On The Mark builds practical digital solutions
                    that move your ideas forward.
                </p>
            </motion.div>
        </section>
    );
}