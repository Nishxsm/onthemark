"use client";

import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import NetworkBackground from "../components/common/NetworkBackground";

export default function Portfolio() {
    return (
        <main className="portfolio-page">
            <Navbar />

            <div className="portfolio-content">
                <NetworkBackground />

                <div className="portfolio-content-sections">
                    <PortfolioHero />
                    <PortfolioGrid />
                </div>
            </div>

            <Footer />
        </main>
    );
}