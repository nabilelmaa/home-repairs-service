import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Start from "../components/Start";
import WhyUs from "../components/WhyUs";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Start />
      <Hero />
      <WhyUs />
      <Reviews />
    </main>
  );
}
