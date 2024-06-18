import Image from "next/image";
import FlipText from "./magicui/flip-text";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section>
      {/* <motion.div initial="hidden" animate="visible" className="flex gap-32"> */}
      <div className="flex justify-between gap-32 mb-12">
        <div>
          <p className="text-4xl font-semibold tracking-[0em] text-black darkk:text-white md:text-2xl md:leading-[5rem]">
            {t("title1")}
          </p>
          <p className="text-4xl tracking-[0em] text-black darkk:text-white md:text-sm md:leading-[5rem]">
            {t("title1_desc")}
          </p>
        </div>

        {/* <FlipText
          className="text-4xl font-semibold tracking-[-0.1em] text-black darkk:text-white md:text-2xl md:leading-[5rem]"
          word="Trusted and reliable services"
        /> */}
        {/* <motion.div
          variants={slideInFromRight(0.8)}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold"
        > */}
        <div>
          <Image
            src="/image03.png"
            alt="image03"
            width={350}
            height={45}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between gap-32 mb-12">
        <div>
          <Image
            src="/image02.png"
            alt="image03"
            width={350}
            height={45}
            className="rounded-md"
          />
        </div>
        <FlipText
          className="text-4xl font-semibold tracking-[0em] text-black darkk:text-white md:text-2xl md:leading-[5rem]"
          word="Hero section ☕"
        />
      </div>
    </section>
  );
}

export default Hero;
