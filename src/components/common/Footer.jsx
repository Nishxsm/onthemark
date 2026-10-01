import Image from "next/image";
import Link from "next/link";
import "../../styles/common/Footer.css";

const company = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Digital Consultancy",
  "Web Development",
  "Single page website",
  "Product MVP",
  "Deployment assistance",
  "Tech Solutions (emails, website maintenance)",
  "App development",
];

const Icon = ({ children }) => (
  <svg
    className="footer__icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <Image src="/logo.png" alt="Logo" width={90} height={72} className="footer__logo" />
          <p className="footer__tagline">
            Creating exceptional digital experiences for startups and businesses worldwide.
          </p>
          <Link href="/contact" className="footer__cta">
            Start Your Project
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        {/* Company */}
        <div className="footer__col">
          <h3 className="footer__heading">Company</h3>
          <ul className="footer__list">
            {company.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="footer__link">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h3 className="footer__heading">Services</h3>
          <ul className="footer__list">
            {services.map((s) => (
              <li key={s}>
                <Link href="/services" className="footer__link">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h3 className="footer__heading">Get In Touch</h3>
          <ul className="footer__contact">
            <li>
              <Icon>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </Icon>
              <a href="mailto:workelvyen@gmail.com">workelvyen@gmail.com</a>
            </li>
            <li>
              <Icon>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </Icon>
              <span className="footer__stack">
                <a href="tel:+919306928510">+91 93069 28510</a>
                <a href="tel:+919991239374">+91 99912 39374</a>
              </span>
            </li>
            <li>
              <Icon>
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </Icon>
              <span className="footer__stack footer__muted">
                <span>Gurugram</span>
                <span>India</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}