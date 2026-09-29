import "../../styles/home/Hero.css";

const services = [
    "Digital Consultancy",
    "Web Development",
    "Single Page Website",
    "Product MVP",
    "Deployment Assistance",
    "Tech Solutions",
    "App Development",
];

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-black" />
            <div className="hero-white" />

            <div className="hero-grid" />

            <div className="hero-title">
                <h1>
                    DESIGN THAT CONVERTS
                </h1>
            </div>

            <div className="hero-copy">
                <h2>
                    CODE THAT SHIPS
                </h2>

                <p>
                    One team designs your product and builds it.
                    <br />
                    No handoffs, no lost intent.
                </p>
            </div>

            <div className="hero-cta">
                <a href="#contact">
                    SCHEDULE A FREE ASSESSMENT
                </a>
            </div>

            <div className="hero-services">
                <div className="hero-services-label">
                    SERVICES WE OFFER
                </div>

                <div className="hero-services-window">
                    <div className="hero-services-track">
                        {services.map((service, index) => (
                            <span
                                className="hero-service"
                                key={`service-${index}`}
                            >
                                {service}
                            </span>
                        ))}

                        {services.map((service, index) => (
                            <span
                                className="hero-service"
                                key={`service-copy-${index}`}
                            >
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;