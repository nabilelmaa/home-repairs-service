import Image from "next/image";
import FlipText from "./magicui/flip-text";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

function Hero() {
  const t = useTranslations("Hero");
  return (
    <section>
      <div className="flex justify-between gap-32 mb-12">
        <div>
          <p className="text-4xl font-semibold tracking-[0em] text-black darkk:text-white md:text-2xl md:leading-[5rem]">
            {t("title1")}
          </p>
          <p className="text-4xl tracking-[0em] text-black darkk:text-white md:text-sm md:leading-[5rem]">
            {t("title1_desc")}
          </p>
        </div>
        <div>
          <Image
            src="/image01.png"
            alt="image01"
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
            alt="image02"
            width={350}
            height={45}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
