import Hero from "../components/home/Hero";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Process from "../components/home/Process";
import Service from "../components/home/Service";

const Home = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Process />
            <Service />
            <Footer />
        </main>
    );
};

export default Home;