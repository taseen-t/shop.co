import { useState } from "react";
import { X } from "lucide-react";

const WelcomLine = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Hide the component after animation completes
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`bg-black text-white relative flex items-center justify-center py-2 transition-all duration-300 ease-in-out transform ${
        isClosing ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <h1 className="text-sm font-satoshi w-full text-center">
        Sign up now and get 20% off to your first order.{" "}
        <span className="underline cursor-pointer">Sign Up Now</span>
      </h1>
      <X
        className="w-6 h-6 text-white absolute right-32 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-300 hover:rotate-90 transition-all duration-200"
        onClick={handleClose}
      />
    </div>
  );
};

export default WelcomLine;
