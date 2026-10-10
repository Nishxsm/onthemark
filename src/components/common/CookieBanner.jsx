"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../../styles/common/CookieBanner.css";

const CONSENT_KEY = "otm-cookie-consent";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            const consent = localStorage.getItem(CONSENT_KEY);
            setVisible(!consent);
        } catch (error) {
            setVisible(true);
        }
    }, []);

    const handleConsent = (choice) => {
        try {
            localStorage.setItem(CONSENT_KEY, choice);
        } catch (error) {
            console.error("Could not save cookie consent:", error);
        }

        setVisible(false);
    };

    if (!visible) return null;

    return (
        <aside
            className="cookie-banner"
            role="dialog"
            aria-label="Cookie consent"
            aria-describedby="cookie-banner-description"
        >
            <div className="cookie-banner-content">
                <div className="cookie-banner-text">
                    <span className="cookie-banner-label">
                        YOUR PRIVACY MATTERS
                    </span>

                    <h3>We use cookies</h3>

                    <p id="cookie-banner-description">
                        We use cookies to improve your browsing experience.
                        You can accept all cookies or reject non-essential
                        cookies. Read our{" "}
                        <Link href="/cookies">Cookie Policy</Link> to learn
                        more.
                    </p>
                </div>

                <div className="cookie-banner-actions">
                    <button
                        type="button"
                        className="cookie-btn cookie-btn-reject"
                        onClick={() => handleConsent("rejected")}
                    >
                        Reject Non-Essential
                    </button>

                    <button
                        type="button"
                        className="cookie-btn cookie-btn-accept"
                        onClick={() => handleConsent("accepted")}
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </aside>
    );
}