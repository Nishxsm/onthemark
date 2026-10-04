"use client";

import { useEffect, useRef } from "react";
import "../../styles/common/NetworkBackground.css";

export default function NetworkBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        let animationFrame;
        let nodes = [];

        const resize = () => {
            const parent = canvas.parentElement;

            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
        };

        const createNodes = () => {
            const count = Math.floor(
                (canvas.width * canvas.height) / 35000
            );

            nodes = Array.from(
                { length: Math.max(28, Math.min(count, 70)) },
                () => ({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.08,
                    vy: (Math.random() - 0.5) * 0.08,
                    radius: Math.random() * 1.2 + 0.6,
                })
            );
        };

        const draw = () => {
            context.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) {
                    node.vx *= -1;
                }

                if (node.y < 0 || node.y > canvas.height) {
                    node.vy *= -1;
                }
            });

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;

                    const distance = Math.sqrt(
                        dx * dx + dy * dy
                    );

                    const connectionDistance = 150;

                    if (distance < connectionDistance) {
                        const opacity =
                            (1 - distance / connectionDistance) * 0.28;

                        context.beginPath();
                        context.moveTo(
                            nodes[i].x,
                            nodes[i].y
                        );
                        context.lineTo(
                            nodes[j].x,
                            nodes[j].y
                        );

                        context.strokeStyle = `rgba(52, 120, 246, ${opacity})`;
                        context.lineWidth = 1;
                        context.stroke();
                    }
                }
            }

            nodes.forEach((node) => {
                context.beginPath();

                context.arc(
                    node.x,
                    node.y,
                    node.radius,
                    0,
                    Math.PI * 2
                );

                context.fillStyle =
                    "rgba(52, 120, 246, 0.32)";

                context.fill();
            });

            animationFrame = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            resize();
            createNodes();
        };

        resize();
        createNodes();
        draw();

        window.addEventListener(
            "resize",
            handleResize
        );

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="network-background"
            aria-hidden="true"
        />
    );
}