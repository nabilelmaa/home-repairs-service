"use client";

import { useTranslations, useLocale } from "next-intl";
import LocalSwitcher from "./local-switcher";
import Link from "next/link";

function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-6 flex justify-between">
      <div>
        <p className="text-green-400 font-bold">IfraneSmartX</p>
      </div>
      <div className="text-gray-500 font-sans">
        <ul className="flex justify-center gap-4">
          <li
            className="hover:text-green-400 transition cursor-pointer"
            onClick={() => scrollToSection("footer")}
          >
            {t("nav_about")}
          </li>

          <li
            className="hover:text-green-400 transition cursor-pointer"
            onClick={() => scrollToSection("footer")}
          >
            {t("nav_services")}
          </li>
          <li className="hover:text-green-400 transition cursor-pointer">
            {t("nav_pricing")}
          </li>
          <li
            className="hover:text-green-400 transition cursor-pointer"
            onClick={() => scrollToSection("reviews")}
          >
            {t("nav_reviews")}
          </li>
        </ul>
      </div>
      <div className="relative text-left flex">
        <div className="">
          <LocalSwitcher />
        </div>
        <Link href={`/${locale}/sign-in`}>
          <button className="ml-4 p-2 border rounded-full font-semibold bg-green-400 hover:bg-green-500 transition">
            {t("get_started_button")}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
