import { useTranslations } from "next-intl";
import MarqueeReviews from "./MarqueeReviews";

function Reviews() {
  const t = useTranslations("Reviews");
  return (
    <section className="p-24 pt-12 bg-green-50" id="reviews">
      <p className="font-semibold text-sm md:text-xl lg:text-2xl">
        {t("title")}
      </p>
      <p className="text-gray-500 mt-4 text-xs md:text-sm lg:text-sm mb-6">
        {t("description")}
      </p>
      <div className="flex gap-8">
        {/* <div className="p-4 mt-4 bg-white rounded-xl shadow-md">
          <p className="font-semibold text-lg">Nabil El Maaroufi</p>
          <p className="text-gray-500">
            IfraneSmartX has consistently delivered exceptional service with a
            high level of professionalism. Their team is knowledgeable and
            always willing to go the extra mile to ensure our needs are met. The
            24/7 availability is a significant advantage, especially for urgent
            matters. I highly recommend them to anyone looking for reliable and
            professional services.
          </p>
        </div>
        <div className="p-4 mt-4 bg-white rounded-xl shadow-md">
          <p className="font-semibold text-lg">Nabil El Maaroufi</p>
          <p className="text-gray-500">
            IfraneSmartX has consistently delivered exceptional service with a
            high level of professionalism. Their team is knowledgeable and
            always willing to go the extra mile to ensure our needs are met. The
            24/7 availability is a significant advantage, especially for urgent
            matters. I highly recommend them to anyone looking for reliable and
            professional services.
          </p>
        </div> */}
        <MarqueeReviews />
      </div>
    </section>
  );
}

export default Reviews;
