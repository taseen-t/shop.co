import ProductCard from "./ProductCard";

const GarmentBox = () => {
  const products = [
    {
      title: "Vertical Stiped Shirt",
      image: "./src/assets/images/verticalStriped.png",
      price: 211.99,
      oldPrice: 231.99,
      discount: 20,
      rating: 5,
    },
    {
      title: "Courage Graphic T-shirt",
      image: "./src/assets/images/orangeT.png",
      price: 144.99,
      rating: 4,
    },
    {
      title: "Loose Fit Bermuda Shorts",
      image: "./src/assets/images/shorts.png",
      price: 79.99,
      rating: 3,
    },
    {
      title: "Faded Skinny Jeans",
      image: "./src/assets/images/skinny.png",
      price: 209.99,
      rating: 4.5,
    },
  ];

  return (
    <>
      <div className="w-full flex items-center justify-center overflow-x-auto scrollbar-hide gap-5 py-4">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-[36px]">
        <button className="cursor-pointer flex justify-center items-center border border-[#E8ECEF] bg-white text-black text-[16px] rounded-full py-[15px] px-[80px] hover:border-gray-300 transition-colors duration-300">
          View All
        </button>
      </div>

      <div className="py-[64px] mx-[100px]">
        <div className="border-b opacity-[10%]"></div>
      </div>
    </>
  );
};

export default GarmentBox;
