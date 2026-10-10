"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
    Search,
    Palette,
    Code2,
    Rocket,
} from "lucide-react";
import NetworkBackground from "../common/NetworkBackground";
import "../../styles/home/Process.css";

const stages = [
    {
        number: "01",
        label: "DISCOVER",
        title: "We understand the problem before we build.",
        description:
            "We start by understanding your business, your audience and what you're trying to achieve. This gives us a clear direction before design or development begins.",
        tags: [
            "DISCOVERY",
            "REQUIREMENTS",
            "RESEARCH",
            "STRATEGY",
            "USER FLOWS",
        ],
        icon: Search,
    },
    {
        number: "02",
        label: "DESIGN",
        title: "We turn ideas into clear digital experiences.",
        description:
            "We shape the idea into interfaces and experiences that are simple, useful and aligned with your goals. Every important decision is made with the end user in mind.",
        tags: [
            "WIREFRAMES",
            "UI DESIGN",
            "UX DESIGN",
            "PROTOTYPES",
            "DESIGN SYSTEMS",
        ],
        icon: Palette,
    },
    {
        number: "03",
        label: "BUILD",
        title: "We build with purpose, performance and precision.",
        description:
            "Once the direction is clear, we turn the designs into working digital products using the right technologies for the project.",
        tags: [
            "DEVELOPMENT",
            "INTEGRATIONS",
            "TESTING",
            "PERFORMANCE",
            "SECURITY",
        ],
        icon: Code2,
    },
    {
        number: "04",
        label: "LAUNCH",
        title: "We launch, support and keep improving.",
        description:
            "Going live is only the beginning. We help with deployment, monitor performance and provide ongoing support so your product can continue to evolve.",
        tags: [
            "DEPLOYMENT",
            "MONITORING",
            "SUPPORT",
            "OPTIMIZATION",
            "MAINTENANCE",
        ],
        icon: Rocket,
    },
];

export default function Process() {
    const processRef = useRef(null);

    const isInView = useInView(processRef, {
        once: true,
        amount: 0.15,
    });

    return (
        <section
            className="process"
            id="about"
            ref={processRef}
        >
            <NetworkBackground />

            <div className="process-inner">
                <motion.div
                    className="process-header"
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
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="process-eyebrow">
                        <span className="process-eyebrow-line" />
                        <span>HOW WE PROCESS</span>
                    </div>

                    <div className="process-heading-row">
                        <h2>
                            A process built
                            <br />
                            for{" "}
                            <span>better results.</span>
                        </h2>

                        <p>
                            From the first conversation to the
                            final launch, we follow a clear
                            process designed to turn ideas into
                            useful digital products.
                        </p>
                    </div>
                </motion.div>

                <div className="process-stages">
                    {stages.map((stage, index) => {
                        const Icon = stage.icon;

                        return (
                            <motion.article
                                className="process-stage"
                                key={stage.number}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                animate={
                                    isInView
                                        ? {
                                              opacity: 1,
                                              y: 0,
                                          }
                                        : {
                                              opacity: 0,
                                              y: 60,
                                          }
                                }
                                transition={{
                                    duration: 0.75,
                                    delay: 0.12 + index * 0.12,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                            >
                                <div className="process-stage-content">
                                    <div className="process-stage-meta">
                                        <div className="process-icon">
                                            <Icon
                                                size={29}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <span className="process-number">
                                            {stage.number}
                                        </span>

                                        <span className="process-label">
                                            {stage.label}
                                        </span>
                                    </div>

                                    <h3>{stage.title}</h3>

                                    <p>
                                        {stage.description}
                                    </p>

                                    <div className="process-tags">
                                        {stage.tags.map((tag) => (
                                            <span key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="process-visual">
                                    <div className="process-visual-grid" />

                                    <div className="process-visual-glow" />

                                    <span className="process-visual-number">
                                        {stage.number}
                                    </span>

                                    <div className="process-visual-icon">
                                        <Icon
                                            size={72}
                                            strokeWidth={0.8}
                                        />
                                    </div>

                                    <div className="process-visual-line" />

                                    <span className="process-visual-label">
                                        OTM / {stage.label}
                                    </span>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}