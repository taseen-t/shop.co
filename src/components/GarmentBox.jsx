import { Star, StarHalf } from "lucide-react";

const GarmentBox = () => {
  return (
    <>
      <div className="display inline-flex overflow-x-auto scrollbar-hide py-4 gap-[20px]">
        <div className="flex flex-col p-4 max-w-sm ml-[100px]">
          <div className="w-full aspect-square overflow-hidden mb-4 rounded-3xl">
            <img
              src="./src/assets/images/shirt1.png"
              alt="shirt1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="font-Satoshi font-bold text-[20px] leading-[1.05] mb-2">
            T-Shirt with Tape Details
          </h2>
          <div className="flex gap-1 mb-2">
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <StarHalf
              size={25}
              fill="#FFC633"
              color="#FFC633"
              strokeWidth={0}
            />
            <p className="font-satoshi font-[14px]">
              4.5/<span className="opacity-60">5</span>
            </p>
          </div>
          <span className="font-semibold text-lg text-left text-[24px]">
            $120
          </span>
        </div>

        <div className="flex flex-col p-4 max-w-sm ml-[100px]">
          <div className="w-full aspect-square overflow-hidden mb-4 rounded-3xl">
            <img
              src="./src/assets/images/shirt1.png"
              alt="shirt1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="font-Satoshi font-bold text-[20px] leading-[1.05] mb-2">
            T-Shirt with Tape Details
          </h2>
          <div className="flex gap-1 mb-2">
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <StarHalf
              size={25}
              fill="#FFC633"
              color="#FFC633"
              strokeWidth={0}
            />
            <p className="font-satoshi font-[14px]">
              4.5/<span className="opacity-60">5</span>
            </p>
          </div>
          <span className="font-semibold text-lg text-left text-[24px]">
            $120
          </span>
        </div>

        <div className="flex flex-col p-4 max-w-sm ml-[100px]">
          <div className="w-full aspect-square overflow-hidden mb-4 rounded-3xl">
            <img
              src="./src/assets/images/shirt1.png"
              alt="shirt1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="font-Satoshi font-bold text-[20px] leading-[1.05] mb-2">
            T-Shirt with Tape Details
          </h2>
          <div className="flex gap-1 mb-2">
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <StarHalf
              size={25}
              fill="#FFC633"
              color="#FFC633"
              strokeWidth={0}
            />
            <p className="font-satoshi font-[14px]">
              4.5/<span className="opacity-60">5</span>
            </p>
          </div>
          <span className="font-semibold text-lg text-left text-[24px]">
            $120
          </span>
        </div>

        <div className="flex flex-col p-4 max-w-sm ml-[100px]">
          <div className="w-full aspect-square overflow-hidden mb-4 rounded-3xl">
            <img
              src="./src/assets/images/shirt1.png"
              alt="shirt1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="font-Satoshi font-bold text-[20px] leading-[1.05] mb-2">
            T-Shirt with Tape Details
          </h2>
          <div className="flex gap-1 mb-2">
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <Star size={25} fill="#FFC633" color="#FFC633" strokeWidth={0} />
            <StarHalf
              size={25}
              fill="#FFC633"
              color="#FFC633"
              strokeWidth={0}
            />
            <p className="font-satoshi font-[14px]">
              4.5/<span className="opacity-60">5</span>
            </p>
          </div>
          <span className="font-semibold text-lg text-left text-[24px]">
            $120
          </span>
        </div>
      </div>
    </>
  );
};

export default GarmentBox;
