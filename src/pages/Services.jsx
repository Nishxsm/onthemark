import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ServiceHero from "../components/services/ServiceHero";
import ServiceCard from "../components/services/ServiceCard";
import ServicesCTA from "../components/services/ServicesCTA";
import { services } from "../components/services/servicesData";
import "../styles/services/Services.css";

export default function Services() {
    return (
        <>
            <Navbar />

            <main className="services-page">
                <ServiceHero />

                <section className="services-page-list">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.number}
                            service={service}
                        />
                    ))}
                </section>

                <ServicesCTA />
            </main>

            <Footer />
        </>
    );
}