import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
