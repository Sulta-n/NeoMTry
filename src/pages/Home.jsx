import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      {/* Hero */}
      <HeroSection />
      {/* Offers */}
    </div>
  );
};

export default Home;
