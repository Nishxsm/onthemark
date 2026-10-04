"use client";

import { motion } from "motion/react";
import "../../styles/portfolio/PortfolioHero.css";

export default function PortfolioHero() {
    return (
        <section className="portfolio-hero">
            <motion.div
                className="portfolio-hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
            >
                <h1>
                    Selected
                    <br />
                    <span>work that matters.</span>
                </h1>

                <p>
                    A collection of websites, digital products and
                    technology solutions built to solve real problems
                    and create meaningful digital experiences.
                </p>
            </motion.div>
        </section>
    );
}