"use client";

import { motion } from "motion/react";
import Link from "next/link";
import NetworkBackground from "../common/NetworkBackground";
import "../../styles/home/ProjectCTA.css";

export default function ProjectCTA() {
    return (
        <section className="final-cta">
            <NetworkBackground />

            <motion.div
                className="final-cta-content"
                initial={{
                    opacity: 0,
                    y: 35,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <h2>
                    The next
                    <br />
                    <span>great product</span>
                    <br />
                    starts with
                    <br />
                    one conversation.
                </h2>

                <p>
                    No complicated process. No unnecessary
                    back-and-forth. Just a direct conversation
                    about what you want to build.
                </p>

                <div className="final-cta-actions">
                    <Link
                        href="/contact"
                        className="final-cta-button final-cta-button-primary"
                    >
                        <span>Start a Project</span>
                        <span className="final-cta-arrow">
                            →
                        </span>
                    </Link>

                    <Link
                        href="/portfolio"
                        className="final-cta-button final-cta-button-secondary"
                    >
                        <span>See Our Work</span>
                        <span className="final-cta-work-arrow">
                            ↗
                        </span>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}