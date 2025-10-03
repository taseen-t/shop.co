import ProductCard from "./ProductCard";

const GarmentBox = () => {
  const products = [
    {
      title: "T-Shirt with Tape Details",
      image: "/images/shirt1.png",
      price: 119.99,
      rating: 4.5,
    },
    {
      title: "Skinny Fit Jeans",
      image: "/images/jeans.png",
      price: 239.99,
      oldPrice: 259.99,
      discount: 20,
      rating: 3.5,
    },
    {
      title: "Checkered Shirt",
      image: "/images/checkeredShirt.png",
      price: 179.99,
      rating: 4.5,
    },
    {
      title: "Sleeve Striped T-shirt",
      image: "/images/halfSleeves.png",
      price: 129.99,
      oldPrice: 159.99,
      discount: 30,
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
