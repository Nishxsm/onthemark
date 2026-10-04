import ContactHero from "../components/contact/ContactHero";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ContactFormSection from "../components/contact/ContactFormSection";
import NetworkBackground from "../components/common/NetworkBackground";

export default function Contact() {
    return (
        <main className="contact-page">
            <Navbar />

            <div className="contact-content">
                <NetworkBackground />

                <div className="contact-content-sections">
                    <ContactHero />
                    <ContactFormSection />
                </div>
            </div>

            <Footer />
        </main>
    );
}