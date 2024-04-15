import icon01 from "@/assets/service/icon-job-1.svg";
import icon02 from "@/assets/service/icon-job-2.svg";
import icon03 from "@/assets/service/icon-job-3.svg";
import icon04 from "@/assets/service/icon-job-4.svg";
import Heading from "../../shared/Heading";

const Business = () => {
  const promotionAndMarketing = [
    {
      title: "Introduce Yourself to the World",
      description:
        "Make a memorable impression with our platform that reaches a global audience.",
      icon: icon01,
      color: "#FAD2E1",
    },
    {
      title: "Access to a Hall of Business-Man",
      description:
        "Connect with a network of experienced professionals to grow your business.",
      icon: icon02,
      color: "#D1ECFD",
    },
    {
      title: "Facebook and Social Media Promotion",
      description:
        "Expand your reach with targeted social media marketing strategies tailored to your business.",
      icon: icon03,
      color: "#FAEDE3",
    },
    {
      title: "Boost Sales with Exclusive Promotions",
      description:
        "Drive sales and increase customer loyalty with special promotions and discounts.",
      icon: icon04,
      color: "#D1ECFD",
    },
  ];
  return (
    <section>
      <div className="pb-10 pt-28">
        <Heading text="Business Promote Services" align="center" />
        <p className=" text-center mt-3 mb-4 md:text-base text-xs">
          Choose the perfect solution for your business
        </p>
      </div>
      <div className="grid  lg:grid-cols-4 md:grid-cols-2 gap-4">
        {promotionAndMarketing.map((promotion, idx) => (
          <div
            className={`rounded-xl drop-shadow-xl mt-${idx} pb-${idx + 1} mb-${
              idx + 2
            } lg:mt-0 lg:pb-0 lg:mb-0`}
            style={{ backgroundColor: `${promotion?.color}` }}
            key={idx}
          >
            <div className="">
              <img className="p-3" src={promotion.icon} alt="" />
              <div className="w-full h-0.5 bg-white border-t-2 border- mb-3.5"></div>
              <h2 className="lg:text-2xl text-xl font-semibold px-5">
                {promotion.title}
              </h2>
              <p className=" md:text-sm text-xs mt-2 px-5 pb-5">
                {promotion.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
