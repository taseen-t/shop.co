const HeroSection = () => {
  return (
    <>
      <div className="flex relative flex-col justify-center h-screen w-full">
        <h1
          className="font-integralcf text-[72px] leading-[1.05] text-left absolute"
          style={{ top: 103, left: 100 }}
        >
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p
          className="font-satoshi font-normal leading-[1.05] text-left absolute opacity-60"
          style={{ top: 351, left: 100 }}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed <br /> to bring out your individuality and cater to your
          sense of style.
        </p>
        <button
          className="font-satoshi leading-[1.05] text-left absolute border border-black bg-black text-white py-[16px] px-[54px] rounded-full cursor-pointer hover:opacity-80 transition"
          style={{ top: 432, left: 100 }}
        >
          Shop Now
        </button>

        <div>
          <img src="./src/assets/images/heroImg.png" alt="HeroImage" className="mb-20"/>
          <img
            src="./src/assets/images/star.png"
            alt="star"
            className="absolute top-[86px] left-[1255px]"
          />
          <img
            src="./src/assets/images/star.png"
            alt="star"
            className="absolute top-[297px] left-[750px] w-[56px] h-[56px]"
          />
        </div>

        <div className="absolute" style={{ top: 522, left: 75 }}>
          <div className="flex">
            <div className="px-8 border-r border-[rgba(0,0,0,0.1)]">
              <h1 className="font-satoshi text-[48px] leading-[1.05] font-bold">
                200+
              </h1>
              <p className="font-satoshi font-normal leading-[1.05] text-left opacity-60">
                International Brands
              </p>
            </div>
            <div className="px-8 border-r border-[rgba(0,0,0,0.1)]">
              <h1 className="font-satoshi text-[48px] leading-[1.05] font-bold">
                2000+
              </h1>
              <p className="font-satoshi font-normal leading-[1.05] text-left opacity-60">
                High Quality Products
              </p>
            </div>
            <div className="px-8">
              <h1 className="font-satoshi text-[48px] leading-[1.05] font-bold">
                30,000+
              </h1>
              <p className="font-satoshi font-normal leading-[1.05] text-left opacity-60">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
