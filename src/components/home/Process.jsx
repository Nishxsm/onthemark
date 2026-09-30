"use client";

import { useEffect, useRef } from "react";
import {
    Search,
    Palette,
    Code2,
    Rocket,
    ArrowRight,
} from "lucide-react";
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

function NetworkBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const context = canvas.getContext("2d");
        const section = canvas.parentElement;

        let animationFrame;
        let width = 0;
        let height = 0;

        const nodes = [];
        const nodeCount = 60;
        const connectionDistance = 140;
        const speed = 0.08;

        const resizeCanvas = () => {
            const rect = section.getBoundingClientRect();
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

            width = rect.width;
            height = rect.height;

            canvas.width = width * pixelRatio;
            canvas.height = height * pixelRatio;

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            context.setTransform(
                pixelRatio,
                0,
                0,
                pixelRatio,
                0,
                0
            );
        };

        const createNodes = () => {
            nodes.length = 0;

            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed,
                    radius: Math.random() * 1.5 + 1,
                });
            }
        };

        const draw = () => {
            context.clearRect(0, 0, width, height);

            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];

                node.x += node.vx;
                node.y += node.vy;

                if (node.x < -20) {
                    node.x = width + 20;
                }

                if (node.x > width + 20) {
                    node.x = -20;
                }

                if (node.y < -20) {
                    node.y = height + 20;
                }

                if (node.y > height + 20) {
                    node.y = -20;
                }
            }

            // Draw connections.
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const nodeA = nodes[i];
                    const nodeB = nodes[j];

                    const dx = nodeA.x - nodeB.x;
                    const dy = nodeA.y - nodeB.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity =
                            (1 - distance / connectionDistance) * 0.19;

                        context.beginPath();
                        context.moveTo(nodeA.x, nodeA.y);
                        context.lineTo(nodeB.x, nodeB.y);
                        context.strokeStyle = `rgba(23, 24, 28, ${opacity})`;
                        context.lineWidth = 0.7;
                        context.stroke();
                    }
                }
            }

            // Draw nodes.
            for (const node of nodes) {
                context.beginPath();
                context.arc(
                    node.x,
                    node.y,
                    node.radius,
                    0,
                    Math.PI * 2
                );

                context.fillStyle = "rgba(23, 24, 28, 0.45)";
                context.fill();
            }

            animationFrame = requestAnimationFrame(draw);
        };

        resizeCanvas();
        createNodes();
        draw();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className="process-network" />;
}

export default function Process() {
    return (
        <section className="process" id="about">
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
                        <div
                            className="process-item"
                            key={stage.number}
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
                        </div>
                    );
                })}
            </div>
        </section>
    );
}