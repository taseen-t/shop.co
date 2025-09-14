import Navbar from "./components/Navbar";
import WelcomLine from "./components/WelcomLine";
import HeroSection from "./components/HeroSection";
import Divider from "./components/Divider";
import NewArrivals from "./components/NewArrivals";
import GarmentBox from "./components/GarmentBox";

function App() {
  return (
    <>
      <WelcomLine />
      <Navbar />
      <HeroSection />
      <Divider />
      <NewArrivals />
      <GarmentBox />
    </>
  );
}

export default App;
