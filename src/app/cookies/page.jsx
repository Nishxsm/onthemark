import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import "../../styles/common/CookiePolicy.css";

export default function CookiePolicyPage() {
    return (
        <>
            <Navbar />

            <main className="cookie-policy-page">
                <iframe
                    className="cookie-policy-frame"
                    src="/cookie-policy.html"
                    title="Cookie Policy"
                />
            </main>

            <Footer />
        </>
    );
}