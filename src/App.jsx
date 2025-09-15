import Navbar from "./components/Navbar";
import WelcomLine from "./components/WelcomLine";
import HeroSection from "./components/HeroSection";
import Divider from "./components/Divider";
import NewArrivals from "./components/NewArrivals";
import GarmentBox from "./components/GarmentBox";
import TopSelling from "./components/topSelling";
import GarmentBox1 from "./components/GarmentBox1";
import DressStyle from "./components/DressStyle";

function App() {
  return (
    <>
      <WelcomLine />
      <Navbar />
      <HeroSection />
      <Divider />
      <NewArrivals />
      <GarmentBox />
      <TopSelling />
      <GarmentBox1 />
      <DressStyle />
    </>
  );
}

export default App;
