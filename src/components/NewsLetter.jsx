import { Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-black text-white mx-[100px] p-8 rounded-3xl mb-16">
        <h2 className="text-3xl font-integralcf font-bold mb-6">
          <div className="text-center md:text-left lg:text-left">
            STAY UPTO DATE ABOUT
          </div>
          <div className="text-center md:text-left lg:text-left">
            OUR LATEST UPDATES
          </div>
        </h2>
        <form className="flex flex-col justify-end items-center gap-4 w-full max-w-md mx-auto">
          <div className="relative w-full">
            <input
              className="w-full px-12 py-[12px] rounded-4xl bg-white text-black"
              type="email"
              placeholder="Enter your email address"
            />
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
              strokeWidth={2}
            />
          </div>
          <button
            className="w-full py-[12px] bg-white text-black font-satoshi rounded-3xl hover:bg-gray-200 transition-colors duration-300"
            type="submit"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
