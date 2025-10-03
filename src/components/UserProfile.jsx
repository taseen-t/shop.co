import { useState } from "react";
import { User, Mail, MessageSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-integralcf font-bold text-gray-900">User Profile</h1>
              <p className="text-gray-600 font-satoshi">Manage your account information</p>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-integralcf font-bold mb-6">Profile Information</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-satoshi font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-satoshi font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your email address"
                  required
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Suggestion Field */}
            <div>
              <label htmlFor="suggestion" className="block text-sm font-satoshi font-medium text-gray-700 mb-2">
                Suggestions
              </label>
              <div className="relative">
                <textarea
                  id="suggestion"
                  name="suggestion"
                  value={formData.suggestion}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Share your suggestions or feedback..."
                />
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-xl font-satoshi font-medium hover:bg-gray-800 transition-colors duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h3 className="text-xl font-integralcf font-bold mb-4">Account Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-satoshi font-bold mb-2">Order History</h4>
              <p className="text-gray-600 text-sm">Track your previous purchases</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-satoshi font-bold mb-2">Wishlist</h4>
              <p className="text-gray-600 text-sm">Save items for later</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-satoshi font-bold mb-2">Rewards</h4>
              <p className="text-gray-600 text-sm">Earn points on every purchase</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h4 className="font-satoshi font-bold mb-2">Support</h4>
              <p className="text-gray-600 text-sm">Get help when you need it</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;