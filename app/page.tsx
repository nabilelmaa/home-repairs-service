import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Hero />
      {/* <button className="p-2 border rounded-full bg-green-400 hover:bg-green">Get started</button> */}
    </main>
  );
}
