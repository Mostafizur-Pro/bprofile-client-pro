import Heading from "../shared/Heading";
import logo from "@/assets/AllLogo/b.png";
import w1 from "@/assets/android/whyChoose/features1.png";
import w2 from "@/assets/android/whyChoose/features2.png";
import w3 from "@/assets/android/whyChoose/features3.png";
import w4 from "@/assets/android/whyChoose/features4.png";

const WhyBusinessProfile = () => {
  return (
    <section>
      <div className="b_profile_container pt-32">
        <Heading text="Why Choose Business Profile App" align="center" />
        <p className="text-center pt-6">
          Discover peace of mind with our round-the-clock support system,
          ensuring you receive assistance whenever you need it.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center lg:gap-0 gap-3 lg:my-0 my-16">
          <div className="flex items-end justify-end gap-14 flex-col">
            <div className="flex gap-3 items-center">
              <div className="">
                <h3 className="text-3xl text-end">Top Flexibility</h3>
                <p className="text-xs md:text-base text-end mt-3">
                  Empowering Users with 24/7 Support Solutions and Tailored
                  Solutions
                </p>
              </div>
              <img
                src={w1}
                className="xl:w-32 md:w-24 w-16 xl:h-32 md:h-24 h-16 "
                alt=""
              />
            </div>
            <div className="flex gap-3 items-center">
              <div className="">
                <h3 className="text-3xl text-end">Time Saving</h3>
                <p className="text-xs md:text-base text-end mt-3">
                  Maximizing Efficiency: Our 24/7 Support Saves You Time and
                  Hassle
                </p>
              </div>
              <img
                src={w2}
                className="xl:w-32 md:w-24 w-16 xl:h-32 md:h-24 h-16 "
                alt=""
              />
            </div>
          </div>
          <div className="lg:flex hidden  items-center justify-center my-44">
            <div className="lg:inline-block hidden relative border xl:p-24 p-16 border-black border-dashed rounded-full ">
              <img src={logo} className="rounded-full w-24 h-24" alt="" />
            </div>
          </div>
          <div className="flex items-start justify-start gap-14 flex-col">
            <div className="flex gap-3 items-center">
              <img
                src={w3}
                className="xl:w-32 md:w-24 w-16 xl:h-32 md:h-24 h-16 "
                alt=""
              />
              <div className="md:mt-0 mt-6 ">
                <h3 className="text-3xl text-start">Best Manages</h3>
                <p className="text-xs md:text-base text-start mt-3">
                  Excellence in Management: Our 24/7 Support Ensures the Best
                  Solutions, Always
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={w4}
                className="xl:w-32 md:w-24 w-16 xl:h-32 md:h-24 h-16 "
                alt=""
              />
              <div className="">
                <h3 className="text-3xl text-start">Collaborative</h3>
                <p className="text-xs md:text-base text-start mt-3">
                  Fostering Collaboration: Our 24/7 Support Promotes Teamwork
                  for Superior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBusinessProfile;
