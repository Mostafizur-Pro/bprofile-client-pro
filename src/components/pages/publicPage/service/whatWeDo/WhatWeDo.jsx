import icon01 from "@/assets/service/icon-job-1.svg";
import icon02 from "@/assets/service/icon-job-2.svg";
import icon03 from "@/assets/service/icon-job-3.svg";
import icon04 from "@/assets/service/icon-job-4.svg";
import icon05 from "@/assets/service/icon-job-5.svg";
import icon06 from "@/assets/service/icon-job-6.svg";
import icon07 from "@/assets/service/icon-job-7.svg";
import Heading from "../../shared/Heading";

const WhatWeDo = () => {
  const promotions = [
    {
      title: "Introduce Yourself to the World",
      description:
        "We become a bonafide agency with a tiny team of 3 and then hire our first developers",
      icon: icon01,
      color: "#FAD2E1",
    },
    {
      title: "Facebook and Social Media Promotion",
      description:
        "We create our first campaign for Kaleidoscope Tech and it goes viral",
      icon: icon02,
      color: "#BEE1E6",
    },
    {
      title: "Our Clients will get a back-office (online)",
      description:
        "With a growing body of work, we bring more artists, designers on board.",
      icon: icon03,
      color: "#DDD3FA",
    },
    {
      title: "Create a digital market",
      description:
        "We earn our first organic feature in Magazine as a creative agency",
      icon: icon04,
      color: "#D1ECFD",
    },
    {
      title: "Access to a hall of businessman",
      description:
        "We're not in the business of selling at any cost or running after unrealistic",
      icon: icon05,
      color: "#FAD2E1",
    },
    {
      title: "Support to innovative business plan",
      description:
        "We tell powerful stories that matter to your customers (and us)",
      icon: icon06,
      color: "#BEE1E6",
    },
    {
      title: "Promotion and Marketing",
      description:
        "We commit to original work of the highest standard and giving credit where it's due.",
      icon: icon07,
      color: "#DDD3FA",
    },
    {
      title: "Support to innovative business plan",
      description:
        "We tell powerful stories that matter to your customers (and us)",
      icon: icon01,
      color: "#D1ECFD",
    },
  ];

  return (
    <section>
      <div className="pb-10 pt-28">
        <Heading text=" New Faces! New Ideas!" align="center" />
        <p className=" text-center mt-3 mb-4 md:w-8/12 mx-auto md:text-base text-xs">
          Join our dynamic community where new faces and fresh ideas are always
          welcome. Embrace the opportunity to connect, collaborate, and innovate
          with like-minded individuals eager to make a difference.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-y-6">
        {promotions.map((promotion, idx) => (
          <div
            className={`hover:bg-[${promotion?.color}] rounded-xl`}
            key={idx}
          >
            <div className="">
              <img className="p-3" src={promotion.icon} alt="" />
              <div className="w-full h-0.5 bg-white border-t-2 border-dashed my-3.5"></div>
              <h2 className="lg:text-2xl text-xl font-semibold px-3">
                {promotion.title}
              </h2>
              <p className="md:text-sm text-xs mt-2 px-3 pb-3">
                {promotion.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
