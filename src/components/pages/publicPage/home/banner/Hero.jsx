import heroImage01 from "@/assets/home/hero/1.png";
import heroImage02 from "@/assets/home/hero/2.png";
import heroImage03 from "@/assets/home/hero/3.png";

const Hero = () => {
  return (
    <section className="">
      <div className="banner-section border-y ">
        <div className=" b_profile_container">
          <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center md:gap-16 gap-0">
            {/* text section  */}
            <div className="">
              <div className="xl:w-11/12 md:py-48 py-16">
                <h2 className="xl:text-6xl lg:text-5xl text-3xl font-normal md:font-semibold">
                  Your Platform to Showcase and Sell Your Products
                </h2>
                <p className="md:pt-6 pt-3 pe-6 text-whiteSecondary md:text- text-sm">
                  Business Profile is a project of IITAB (International IT
                  Association of Bangladesh) that is working to bring all the
                  legal businesses out there into the spotlight.
                </p>
                <div className=" pt-6">
                  <a className="" href="bProfile.apk" download="bProfile.apk">
                    <div className="linkWrap">
                      <button className="link style-7">
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Download App</span>
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="ms-auto overflow-x-hidden h-full w-full md:px-14 xl:px-28 md:py-20 xl:py-20 p-10 bg-primary_blue">
              <div className="relative">
                <img src={heroImage02} className="z-20" alt="" />
                <img
                  className="absolute -top-5 -left-14 z-30 animate-bounce-custom "
                  src={heroImage01}
                  alt=""
                />
                <img
                  className="xl:h-80 h-52 absolute -bottom-10 xl:-right-32 -right-16 z-10 animate-bounce-custom"
                  src={heroImage03}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
