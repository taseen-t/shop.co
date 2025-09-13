import { X } from "lucide-react"


const WelcomLine = () => {
  return (
    <div className="bg-black text-white relative flex items-center justify-center py-2">
      <h1 className="text-sm font-satoshi w-full text-center">Sign up now and get 20% off to your first order. <span className="underline cursor-pointer">Sign Up Now</span></h1>
      <X className="w-6 h-6 text-white absolute right-32 top-1/2 -translate-y-1/2 cursor-pointer" />
    </div>
  )
}

export default WelcomLine

