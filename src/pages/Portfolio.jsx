"use client";

import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Portfolio() {
    return (
        <main className="portfolio-page">
            <Navbar />
            <PortfolioHero />
            <PortfolioGrid />
            <Footer />
        </main>
    );
}