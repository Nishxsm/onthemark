"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../styles/common/Navbar.css";

const navItems = [
    {
        label: "HOME",
        href: "/",
    },
    {
        label: "SERVICES",
        href: "/services",
    },
    {
        label: "PORTFOLIO",
        href: "/portfolio",
    },
    {
        label: "CONTACT",
        href: "/contact",
    },
];

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show at the very top
            if (currentScrollY <= 20) {
                setHidden(false);
            }
            // Scrolling down
            else if (currentScrollY > lastScrollY) {
                setHidden(true);
            }
            // Scrolling up
            else if (currentScrollY < lastScrollY) {
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
            {/* Logo */}
            <div className="navbar-brand">
                <Link href="/">
                    <img
                        src="/images/otm-logo1.png"
                        alt="On The Mark"
                    />
                </Link>
            </div>

            {/* Main navigation */}
            <nav className="navbar-links">
                {navItems.map((item) => {
                    const isActive =
                        pathname === item.href ||
                        (
                            item.href !== "/" &&
                            pathname.startsWith(`${item.href}/`)
                        );

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`navbar-link ${
                                isActive
                                    ? "navbar-link-active"
                                    : ""
                            }`}
                        >
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* CTA */}
            <Link
                href="/contact"
                className="navbar-button"
            >
                GET STARTED
            </Link>
        </header>
    );
}