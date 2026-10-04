"use client";

import { useState } from "react";
import { works, workFilters } from "./workData";
import PortfolioCard from "./PortfolioCard";
import "../../styles/portfolio/PortfolioGrid.css";

export default function PortfolioGrid() {
    const [activeFilter, setActiveFilter] = useState("ALL");

    const filteredWorks =
        activeFilter === "ALL"
            ? works
            : works.filter(
                  (work) => work.category === activeFilter
              );

    return (
        <section className="portfolio-work-section">
            <div className="portfolio-work-inner">
                <div className="portfolio-filters">
                    {workFilters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            className={`portfolio-filter ${
                                activeFilter === filter
                                    ? "portfolio-filter-active"
                                    : ""
                            }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="portfolio-work-grid">
                    {filteredWorks.map((work) => (
                        <PortfolioCard
                            key={work.id}
                            work={work}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}