"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import LocalSwitcher from "./local-switcher";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const t = useTranslations("Header");
  const locale = useLocale();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="p-6 flex justify-between items-center">
      <div>
        <p className="text-green-400 font-bold">IfraneSmartX</p>
      </div>
      <nav className="text-gray-500 font-sans flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <div className="flex-grow" />
            <div className="relative text-left flex items-center">
              <LocalSwitcher />
              <FaUserCircle className="text-2xl ml-4" />
              {/* <button
                className="ml-4 p-2 border rounded-full font-semibold bg-green-400 hover:bg-green-500 transition"
                onClick={handleLogout}
              >
                {t("signout_button")}
              </button> */}
            </div>
          </>
        ) : (
          <>
            <ul className="flex justify-center gap-4">
              <li
                className="hover:text-green-400 transition cursor-pointer"
                onClick={() => scrollToSection("footer")}
              >
                {t("nav_about")}
              </li>
              <li
                className="hover:text-green-400 transition cursor-pointer"
                onClick={() => scrollToSection("services")}
              >
                {t("nav_services")}
              </li>
              <li
                className="hover:text-green-400 transition cursor-pointer"
                onClick={() => scrollToSection("us")}
              >
                {t("nav_pricing")}
              </li>
              <li
                className="hover:text-green-400 transition cursor-pointer"
                onClick={() => scrollToSection("reviews")}
              >
                {t("nav_reviews")}
              </li>
            </ul>
            <div className="relative text-left flex items-center">
              <LocalSwitcher />
              <Link href={`/${locale}/sign-in`}>
                <button className="ml-4 p-2 border rounded-full font-semibold text-black bg-green-400 hover:bg-green-500 transition">
                  {t("signin_button")}
                </button>
              </Link>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
