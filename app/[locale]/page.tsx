import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Start from "../components/Start";
import WhyUs from "../components/WhyUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Start />
      <Hero />
      <WhyUs />
      <Reviews />
    </main>
  );
}
