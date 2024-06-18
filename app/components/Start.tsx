"use client";

import { useTranslations } from "next-intl";

function Start() {
  const t = useTranslations("Hero");
  return (
    <div className="max-w-sm">
      <p className="flex p-2 border rounded-full w-full bg-green-100 text-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          color={"#22c55e"}
          fill={"none"}
        >
          <path
            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 12.5L10.5 15L16 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-2">{t("title")}</span>
      </p>
    </div>
  );
}

export default Start;
