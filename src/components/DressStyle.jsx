const DressStyle = () => {
  return (
    <>
      <div className="bg-[#f0f0f0] mx-[100px] rounded-[40px] my-[80px]">
        <div className="w-full flex justify-center">
          <h1 className="font-integralcf font-bold text-[48px] mx-[276px] leading-[1.05] my-[70px]">
            BROWSE BY DRESS STYLE
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-[20px] p-4 mb-[80px]">
          <div className="relative h-[289px] w-full rounded-[20px] overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-[1.02]">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 z-0"></div>
            <img
              src="./src/assets/images/casual.png"
              alt="casual img"
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="absolute top-8 left-8 font-Satoshi-bold text-[32px] font-bold text-black z-10">
              Casual
            </h2>
          </div>
          <div className="relative col-span-2 h-[289px] w-full rounded-[20px] overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-[1.02]">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 z-0"></div>
            <img
              src="./src/assets/images/formal.png"
              alt="Formal img"
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="absolute top-8 left-8 font-Satoshi-bold text-[32px] font-bold text-black z-10">
              Formal
            </h2>
          </div>
          <div className="relative col-span-2 h-[289px] w-full rounded-[20px] overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-[1.02]">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 z-0"></div>
            <img
              src="./src/assets/images/party.png"
              alt="party img"
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="absolute top-8 left-8 font-Satoshi-bold text-[32px] font-bold text-black z-10">
              Party
            </h2>
          </div>
          <div className="relative h-[289px] w-full rounded-[20px] overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-[1.02]">
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 z-0"></div>
            <img
              src="./src/assets/images/gym.png"
              alt="gym img"
              className="w-full h-full object-cover rounded-[20px] transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="absolute top-8 left-8 font-Satoshi-bold text-[32px] font-bold text-black z-10">
              Gym
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DressStyle;
