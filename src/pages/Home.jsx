import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Offers from "../components/Offers";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      {/* Hero */}
      <HeroSection />
      {/* Offers */}
      <Offers />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
