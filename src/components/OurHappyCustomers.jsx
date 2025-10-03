import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";

const OurHappyCustomers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rating: 5,
    },
    {
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse.",
      rating: 5,
    },

    {
      name: "Emily R.",
      text: "Shop.co has become my go-to destination for fashion. The quality of the clothes is outstanding, and I appreciate the attention to detail in every item I've purchased.",
      rating: 5,
    },
    {
      name: "Michael S.",
      text: "I can't recommend Shop.co enough! The variety of styles and the quality of the clothes are unmatched. I've received countless compliments on the outfits I've bought from here.",
      rating: 5,
    },
    {
      name: "Olivia T.",
      text: "Shopping at Shop.co has been a game-changer for my wardrobe. The clothes are not only stylish but also comfortable and well-made. I've found pieces that I can wear.",
      rating: 5,
    },
    {
      name: "David P.",
      text: "Shop.co has truly elevated my fashion game. The selection is vast, and I love how they cater to different styles. The quality of the clothes is top-notch, and I always feel confident.",
      rating: 5,
    },
    {
      name: "Sophia W.",
      text: "I was initially drawn to Shop.co because of their trendy styles, but what kept me coming back was the exceptional quality of their clothes. Each piece feels like it was made just for me.",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="w-full flex justify-between items-center px-[100px] mb-[80px]">
        <h1 className="font-integralcf font-bold text-[48px] leading-[1.05]">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div className="overflow-visible pl-[80px] pr-[130px] mb-[80px]">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out relative"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`min-w-[calc((100%-64px)/3)] bg-white rounded-[20px] p-8 shadow-md transition-all duration-500
                ${
                  Math.abs(index - currentIndex) > 2
                    ? "opacity-0"
                    : "opacity-100"
                }
                ${
                  index < currentIndex ||
                  index > currentIndex + 2 ||
                  Math.abs(index - (currentIndex + 1)) >= 2
                    ? "blur-lg scale-95"
                    : "blur-0 scale-100"
                }
              `}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={22.58}
                    fill="#FFD700"
                    color="#FFD700"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="font-Satoshi-bold font-bold text-lg">
                  {review.name}
                </h2>
                <CheckCircle2
                  className="w-6 h-6"
                  fill="#4CAF50"
                  color="white"
                />
              </div>
              <p className="text-gray-600 font-satoshi leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurHappyCustomers;
