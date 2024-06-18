import { useTranslations } from "next-intl";

function WhyUs() {
  const t = useTranslations("Us");
  return (
    <div className="flex items-center justify-center bg-green-400 max-w-full rounded-sm p-24 bg-pattern">
      <div className="p-12 bg-white rounded-xl shadow-lg">
        <p className="font-semibold text-sm md:text-xl lg:text-2xl">
          {t("title")}
        </p>
        <p className="text-gray-500 mt-4 text-xs md:text-sm lg:text-sm">
          {t("description")}
        </p>
        <div className="flex gap-8">
          <div>
            <div className="mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={42}
                height={42}
                color={"#22c55e"}
                fill={"none"}
              >
                <path
                  d="M13.9448 18.1667V12.8333M15.5073 12.8333V11.5M15.5073 19.5V18.1667M13.9448 15.5H17.0698M17.0698 15.5C17.5876 15.5 18.0073 15.9477 18.0073 16.5V17.1667C18.0073 17.719 17.5876 18.1667 17.0698 18.1667H13.0073M17.0698 15.5C17.5876 15.5 18.0073 15.0523 18.0073 14.5V13.8333C18.0073 13.281 17.5876 12.8333 17.0698 12.8333H13.0073"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5025 9C11.914 9 9.00488 11.9101 9.00488 15.5C9.00488 19.0898 11.914 22 15.5025 22C19.091 22 22.0002 19.0899 22.0002 15.5C22.0002 11.9101 19.091 9 15.5025 9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00516 6C11.3177 6 14.003 5.10457 14.003 4C14.003 2.89543 11.3177 2 8.00516 2C4.69264 2 2.00732 2.89543 2.00732 4C2.00732 5.10457 4.69264 6 8.00516 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 4V8.02171V12.0434C2 12.7473 3.17905 13.6328 6.1323 14M2.10733 8.54768C3.3124 9.60965 5.4609 10.0602 7.75706 10.0602M13.9957 4.12134V6.13597"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="font-semibold mt-2">{t("qualified_people")}</p>
            <p className="text-gray-500 text-sm mt-2">
              {t("qualified_people_desc")}
            </p>
          </div>
          <div>
            <div className="mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={42}
                height={42}
                color={"#22c55e"}
                fill={"none"}
              >
                <path
                  d="M5.04798 8.60657L2.53784 8.45376C4.33712 3.70477 9.503 0.999914 14.5396 2.34474C19.904 3.77711 23.0904 9.26107 21.6565 14.5935C20.2227 19.926 14.7116 23.0876 9.3472 21.6553C5.36419 20.5917 2.58192 17.2946 2 13.4844"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V12L14 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="font-semibold mt-2">{t("services_24_7")}</p>
            <p className="text-gray-500 text-sm mt-2">
              {t("services_24_7_desc")}
            </p>
          </div>
          <div className="">
            <div className="mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={42}
                height={42}
                color={"#22c55e"}
                fill={"none"}
              >
                <path
                  d="M13.9448 18.1667V12.8333M15.5073 12.8333V11.5M15.5073 19.5V18.1667M13.9448 15.5H17.0698M17.0698 15.5C17.5876 15.5 18.0073 15.9477 18.0073 16.5V17.1667C18.0073 17.719 17.5876 18.1667 17.0698 18.1667H13.0073M17.0698 15.5C17.5876 15.5 18.0073 15.0523 18.0073 14.5V13.8333C18.0073 13.281 17.5876 12.8333 17.0698 12.8333H13.0073"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5025 9C11.914 9 9.00488 11.9101 9.00488 15.5C9.00488 19.0898 11.914 22 15.5025 22C19.091 22 22.0002 19.0899 22.0002 15.5C22.0002 11.9101 19.091 9 15.5025 9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00516 6C11.3177 6 14.003 5.10457 14.003 4C14.003 2.89543 11.3177 2 8.00516 2C4.69264 2 2.00732 2.89543 2.00732 4C2.00732 5.10457 4.69264 6 8.00516 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 4V8.02171V12.0434C2 12.7473 3.17905 13.6328 6.1323 14M2.10733 8.54768C3.3124 9.60965 5.4609 10.0602 7.75706 10.0602M13.9957 4.12134V6.13597"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="font-semibold mt-2"> {t("competitive_pricing")}</p>
            <p className="text-gray-500 text-sm mt-2">
              {t("competitive_pricing_desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
