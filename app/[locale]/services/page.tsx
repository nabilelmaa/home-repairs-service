import SearchBar from "@/app/components/SearchBar";
import { useTranslations } from "next-intl";

export default function page() {
  const t = useTranslations("Services");
  return (
    <div className="min-h-screen p-12">
      <p className="font-semibold text-sm lg:text-2xl text-gray-800">
        Enjoy Exploring Our Popular Service
      </p>
      <p className="mt-2 text-xs lg:text-sm md:text-sm">
        Feel free to book any service you want with the person you want.
      </p>
      <div className="flex justify-center items-center">
        <SearchBar />
      </div>
    </div>
  );
}
