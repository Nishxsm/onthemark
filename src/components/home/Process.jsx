"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
    Search,
    Palette,
    Code2,
    Rocket,
    ArrowRight,
} from "lucide-react";
import NetworkBackground from "../common/NetworkBackground";
import "../../styles/home/Process.css";

const stages = [
    {
        number: "01",
        label: "UNDERSTAND",
        title: "Discover",
        description:
            "We understand your idea, goals and technical needs before anything gets built.",
        icon: Search,
    },
    {
        number: "02",
        label: "DEFINE",
        title: "Design",
        description:
            "We turn your vision into clear interfaces, experiences and product direction.",
        icon: Palette,
    },
    {
        number: "03",
        label: "CREATE",
        title: "Build",
        description:
            "We develop websites, applications, MVPs and custom digital solutions.",
        icon: Code2,
    },
    {
        number: "04",
        label: "DELIVER",
        title: "Launch",
        description:
            "We bring everything together, deploy it and get your product ready for users.",
        icon: Rocket,
    },
];

export default function Process() {
    const processRef = useRef(null);

    const isInView = useInView(processRef, {
        once: false,
        amount: 0.2,
    });

    return (
        <section
            className="process"
            id="about"
            ref={processRef}
        >
            <NetworkBackground />

            <div className="process-header">
                <div className="process-eyebrow">
                    <span className="process-eyebrow-line" />
                    <span>HOW WE WORK</span>
                </div>

                <div className="process-heading-row">
                    <h2>
                        From idea to{" "}
                        <span>something real.</span>
                    </h2>

                    <p>
                        A straightforward process designed to
                        turn ideas into useful digital products.
                    </p>
                </div>
            </div>

            <div className="process-grid">
                {stages.map((stage, index) => {
                    const Icon = stage.icon;

                    return (
                        <motion.div
                            className="process-item"
                            key={stage.number}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={
                                isInView
                                    ? {
                                          opacity: 1,
                                          y: 0,
                                      }
                                    : {
                                          opacity: 0,
                                          y: 30,
                                      }
                            }
                            transition={{
                                duration: 0.65,
                                delay: index * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <article className="process-card">
                                <div className="process-card-top">
                                    <span className="process-number">
                                        {stage.number}
                                    </span>

                                    <span className="process-label">
                                        {stage.label}
                                    </span>
                                </div>

                                <div className="process-icon-wrap">
                                    <div className="process-icon">
                                        <Icon
                                            size={42}
                                            strokeWidth={1.4}
                                        />
                                    </div>
                                </div>

                                <div className="process-content">
                                    <h3>{stage.title}</h3>

                                    <p>{stage.description}</p>
                                </div>

                                <div className="process-card-bottom">
                                    <span>
                                        0{index + 1} / 04
                                    </span>

                                    <div className="process-progress">
                                        <span
                                            style={{
                                                width: `${
                                                    ((index + 1) /
                                                        stages.length) *
                                                    100
                                                }%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </article>

                            {index < stages.length - 1 && (
                                <div className="process-arrow">
                                    <ArrowRight
                                        size={22}
                                        strokeWidth={1.2}
                                    />
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}