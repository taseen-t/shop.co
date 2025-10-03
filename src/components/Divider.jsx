import Marquee from "react-fast-marquee";

const Divider = () => {
  return (
    <div className=" absolute flex marquee-container py-[42px] top-[797px] bg-black h-[122px]">
      <Marquee gradient={false} speed={50} pauseOnHover={true} direction="left">
        <div className="flex items-center gap-34 mx-4">
          <span className="text-lg font-semibold">
            <img src="/images/versaceLogo.png" />
          </span>
          <span className="text-lg">
            <img src="/images/zaraLogo.png" />
          </span>
          <span className="text-lg font-semibold">
            <img src="/images/gucciLogo.png" />
          </span>
          <span className="text-lg">
            <img src="/images/pradaLogo.png" />
          </span>
          <span className="text-lg font-semibold">
            <img src="/images/CKLogo.png" />
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default Divider;
