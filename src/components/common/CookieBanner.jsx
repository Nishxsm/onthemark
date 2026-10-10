"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "otm-cookie-consent";

const buttonBase = {
    padding: "12px 16px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "inherit",
    whiteSpace: "nowrap",
};

export default function CookieBanner() {
    const [visible, setVisible] = useState(null);
    const [policyOpen, setPolicyOpen] = useState(false);

    useEffect(() => {
        try {
            setVisible(localStorage.getItem(CONSENT_KEY) === null);
        } catch {
            setVisible(true);
        }
    }, []);

    useEffect(() => {
        if (!policyOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") setPolicyOpen(false);
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [policyOpen]);

    function handleConsent(choice) {
        try {
            localStorage.setItem(CONSENT_KEY, choice);
        } catch (error) {
            console.error("Could not save cookie consent:", error);
        }

        setVisible(false);
        setPolicyOpen(false);
    }

    return (
        <>
            {visible === true && (
                <aside
                    role="dialog"
                    aria-label="Cookie consent"
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        left: "20px",
                        right: "20px",
                        zIndex: 2147483647,
                        boxSizing: "border-box",
                        padding: "16px 18px",
                        border: "1px solid #34445e",
                        borderRadius: "14px",
                        background: "#101827",
                        color: "#ffffff",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
                    }}
                >
                    <div className="cookie-banner-content">
                        <div className="cookie-banner-copy">
                            <h3>We use cookies</h3>

                            <div className="cookie-banner-description">
                                <span>
                                    We use cookies to improve your browsing experience.
                                    Choose whether to accept non-essential cookies.
                                </span>

                                <button
                                    type="button"
                                    onClick={() => setPolicyOpen(true)}
                                    className="cookie-policy-link"
                                >
                                    Read Cookie Policy →
                                </button>
                            </div>
                        </div>

                        <div className="cookie-banner-actions">
                            <button
                                type="button"
                                onClick={() => handleConsent("rejected")}
                                style={{
                                    ...buttonBase,
                                    border: "1px solid #465266",
                                    background: "transparent",
                                    color: "#ffffff",
                                }}
                            >
                                Reject Non-Essential
                            </button>

                            <button
                                type="button"
                                onClick={() => handleConsent("accepted")}
                                style={{
                                    ...buttonBase,
                                    border: "1px solid #3478f6",
                                    background: "#3478f6",
                                    color: "#ffffff",
                                }}
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </aside>
            )}

            {policyOpen && (
                <div
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setPolicyOpen(false);
                        }
                    }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 2147483647,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "16px",
                        background: "rgba(0,0,0,0.82)",
                    }}
                >
                    <section
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="cookie-policy-title"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            maxWidth: "900px",
                            height: "85vh",
                            overflow: "hidden",
                            border: "1px solid #34445e",
                            borderRadius: "12px",
                            background: "#101827",
                        }}
                    >
                        <header
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "16px 20px",
                                color: "#ffffff",
                            }}
                        >
                            <h2
                                id="cookie-policy-title"
                                style={{ margin: 0, fontSize: "20px" }}
                            >
                                Cookie Policy
                            </h2>

                            <button
                                type="button"
                                onClick={() => setPolicyOpen(false)}
                                aria-label="Close policy"
                                style={{
                                    ...buttonBase,
                                    padding: "5px 12px",
                                    border: "1px solid #465266",
                                    background: "transparent",
                                    color: "#ffffff",
                                    fontSize: "24px",
                                }}
                            >
                                ×
                            </button>
                        </header>

                        <iframe
                            src="/cookie-policy.html"
                            title="OnTheMark Cookie Policy"
                            style={{
                                width: "100%",
                                flex: 1,
                                minHeight: 0,
                                border: 0,
                                background: "#ffffff",
                            }}
                        />

                        <footer
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                flexWrap: "wrap",
                                gap: "10px",
                                padding: "14px 20px",
                            }}
                        >
                            <button
                                type="button"
                                onClick={() => handleConsent("rejected")}
                                style={{
                                    ...buttonBase,
                                    border: "1px solid #465266",
                                    background: "transparent",
                                    color: "#ffffff",
                                }}
                            >
                                Reject Non-Essential
                            </button>

                            <button
                                type="button"
                                onClick={() => handleConsent("accepted")}
                                style={{
                                    ...buttonBase,
                                    border: 0,
                                    background: "#3478f6",
                                    color: "#ffffff",
                                }}
                            >
                                Accept All
                            </button>
                        </footer>
                    </section>
                </div>
            )}

            <style jsx>{`
                .cookie-banner-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                }

                .cookie-banner-copy {
                    flex: 1 1 auto;
                    min-width: 0;
                }

                .cookie-banner-copy h3 {
                    margin: 0 0 3px;
                    font-size: 22px;
                    line-height: 1.2;
                    color: #ffffff;
                }

                .cookie-banner-description {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    column-gap: 5px;
                    row-gap: 2px;
                    color: #b5c0d0;
                    font-size: 13px;
                    line-height: 1.4;
                }

                .cookie-policy-link {
                    flex-shrink: 0;
                    padding: 0;
                    border: 0;
                    background: transparent;
                    color: #77a5ff;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    white-space: nowrap;
                }

                .cookie-banner-actions {
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                    gap: 12px;
                }

                @media (max-width: 760px) {
                    .cookie-banner-content {
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 14px;
                    }

                    .cookie-banner-actions {
                        width: 100%;
                        flex-wrap: wrap;
                    }
                }

                @media (max-width: 480px) {
                    .cookie-banner-actions button {
                        flex: 1;
                        white-space: normal;
                    }
                }
            `}</style>
        </>
    );
}