import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Offers from "../components/Offers";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      {/* Hero */}
      <HeroSection />
      {/* Offers */}
      <Offers />
    </div>
  );
};

export default Home;
