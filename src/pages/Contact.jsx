import ContactHero from "../components/contact/ContactHero";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ContactFormSection from "../components/contact/ContactFormSection";

export default function Contact() {
    return (
        <main className="contact-page">
            <Navbar />
            <ContactHero />
            <ContactFormSection />
            <Footer />
        </main>
    );
}