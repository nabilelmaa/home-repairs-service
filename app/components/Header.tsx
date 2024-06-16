"use client";
import { useState, useEffect } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  return (
    <div className="p-6 flex justify-between">
      <div>
        <p className="text-green-400 font-bold">IfraneSmartX</p>
      </div>
      <div className="text-gray-500 font-sans">
        <ul className="flex justify-center gap-4">
          <li className="hover:text-green-400 transition cursor-pointer">
            About
          </li>
          <li className="hover:text-green-400 transition cursor-pointer">
            Services
          </li>
          <li className="hover:text-green-400 transition cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-green-400 transition cursor-pointer">
            Reviews
          </li>
        </ul>
      </div>
      <div
        className="relative text-left flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex p-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200 cursor-pointer">
          {selectedLanguage === "en"
            ? "English"
            : selectedLanguage === "fr"
            ? "Français"
            : "العربية"}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        </div>
        {isOpen && (
          <div className="origin-top-left absolute left-0 mt-10 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              <div
                onClick={() => handleLanguageChange("en")}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                English
              </div>
              <div
                onClick={() => handleLanguageChange("fr")}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Français
              </div>
              <div
                onClick={() => handleLanguageChange("ar")}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                العربية
              </div>
            </div>
          </div>
        )}
        <button className="ml-4 p-2 border rounded-full bg-green-400 hover:bg-green-500 transition">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Header;
