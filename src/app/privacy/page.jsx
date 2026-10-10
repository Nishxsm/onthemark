"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import "../../styles/common/PrivacyPolicy.css";

export default function PrivacyPolicy() {
    const [policyHTML, setPolicyHTML] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPolicy() {
            try {
                const response = await fetch("/privacy-policy.html");

                if (!response.ok) {
                    throw new Error("Failed to load privacy policy");
                }

                const html = await response.text();
                setPolicyHTML(html);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadPolicy();
    }, []);

    return (
        <>
            <Navbar />

            <main className="privacy-policy-page">
                <div className="privacy-policy-container">
                    {loading ? (
                        <p className="privacy-policy-loading">
                            Loading privacy policy...
                        </p>
                    ) : policyHTML ? (
                        <div
                            className="privacy-policy-content"
                            dangerouslySetInnerHTML={{
                                __html: policyHTML,
                            }}
                        />
                    ) : (
                        <p>
                            Unable to load the privacy policy.
                            Please try again later.
                        </p>
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}