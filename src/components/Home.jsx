import Navbar from "./Navbar";
import WelcomLine from "./WelcomLine";
import HeroSection from "./HeroSection";
import Divider from "./Divider";
import NewArrivals from "./NewArrivals";
import GarmentBox from "./GarmentBox";
import TopSelling from "./TopSelling";
import GarmentBox1 from "./GarmentBox1";
import DressStyle from "./DressStyle";
import OurHappyCustomers from "./OurHappyCustomers";
import NewsLetter from "./NewsLetter";

const Home = () => {
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
      <OurHappyCustomers />
      <NewsLetter />
    </>
  );
};

export default Home;
