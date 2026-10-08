import Hero from "../components/home/Hero";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import HowWeWork from "../components/home/HowWeWork";
import Process from "../components/home/Process";
import Service from "../components/home/Service";
import ProjectCTA from "../components/home/ProjectCTA";

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <HowWeWork />
            <Service />
            <Process />
            <ProjectCTA />
            <Footer />
        </main>
    );
};

export default Home;