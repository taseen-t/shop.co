import { Star, StarHalf } from "lucide-react";

const ProductCard = ({ title, image, price, oldPrice, discount, rating }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          size={25}
          fill="#FFC633"
          color="#FFC633"
          strokeWidth={0}
        />
      );
    }

    if (halfStar) {
      stars.push(
        <StarHalf
          key="half"
          size={25}
          fill="#FFC633"
          color="#FFC633"
          strokeWidth={0}
        />
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col w-[295px]">
      <div className="w-full aspect-square overflow-hidden mb-4 rounded-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h2 className="font-Satoshi font-bold text-[20px] leading-[1.05] mb-2">
        {title}
      </h2>
      <div className="flex gap-1 mb-2 items-center">
        {renderStars()}
        <p className="font-satoshi text-[14px]">
          {rating}/<span className="opacity-60">5</span>
        </p>
      </div>
      <span className="font-semibold text-[24px] flex items-center">
        ${price}
        {oldPrice && (
          <span className="opacity-40 line-through ml-[10px]">${oldPrice}</span>
        )}
        {discount && (
          <span className="font-satoshi bg-[#ff3333]/10 text-[#ff3333] ml-[10px] text-[12px] rounded-full py-[6px] px-[13.5px]">
            -{discount}%
          </span>
        )}
      </span>
    </div>
  );
};

export default ProductCard;
