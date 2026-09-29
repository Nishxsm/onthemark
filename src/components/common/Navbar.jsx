"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../../styles/common/Navbar.css";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show at the very top
            if (currentScrollY <= 20) {
                setHidden(false);
            } else if (currentScrollY > lastScrollY) {
                setHidden(true);
            } else if (currentScrollY < lastScrollY) {
                setHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`navbar ${
                hidden ? "navbar-hidden" : ""
            }`}
        >
            <div className="navbar-brand">
                <Link href="/">
                    <img
                        src="/images/otm-logo1.png"
                        alt="On The Mark"
                    />
                </Link>
            </div>

            <nav className="navbar-links">
                <a href="#services">SERVICES</a>
                <a href="#contact">CONTACT</a>

                <Link
                    href="/contact"
                    className="navbar-button"
                >
                    GET STARTED
                </Link>

            </nav>
        </header>
    );
}