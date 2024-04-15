import Heading from "../shared/Heading";
import missionImage from "@/assets/goal.png";
import goalImage from "@/assets/mission.png";
import valueImage from "@/assets/value.svg";
import LogoImage from "@/assets/logo/logo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="py-10 md:py-20 xl:py-28 b_profile_container ">
      <div className="">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-6">
            <div className="w-[100px] md:w-[145px] xl:w-[176px]">
              <Link to={"/"}>
                <img src={LogoImage} alt="logo" loading="lazy" />
              </Link>
            </div>
            <div className="h-20  w-[1px] bg-black"></div>
            <Heading text="About Us" align="start"></Heading>
          </div>
        </div>
        <p className="text-center mt-10 text-lg">
          Connecting Businesses to the World
        </p>
        <p className="mt-2 lg:w-8/12 md:w-10/12 mx-auto text-center text-xs md:text-base">
          Business Profile, an innovative initiative by the International IT
          Association of Bangladesh (IITAB), dedicated to connecting businesses
          to the world. Our commitment lies in centralizing businesses of all
          sizes and industries in one accessible space, fostering connections,
          unlocking new opportunities and highlight the diversity of legal
          businesses, ranging from the remote corners to the urban giants,
          bringing them all into the limelight.
        </p>

        <div className="md:mt-28 mt-10 mb-16">
          <div className="grid lg:grid-cols-8 items-center justify-between mt-6 gap-6">
            <div className="md:mt-16 mt-6 md:mb-16 mb-6 col-span-4">
              <Heading text="Our Mission" align="start"></Heading>
              <div className="md:mt-6 mt-3">
                <p className="">Connecting Businesses to the World</p>
                <p className="mt-4 text-xs md:text-base">
                  Our mission is to empower individuals and businesses by
                  providing innovative solutions that enhance their online
                  presence and digital identity. We strive to deliver
                  high-quality services that cater to the unique needs of our
                  clients, fostering growth, and creating lasting value. Through
                  a commitment to excellence and customer satisfaction, we aim
                  to be a trusted partner in the journey of our clients&#39;
                  success in the digital and business markets.
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <img src={missionImage} className="w-full" alt="" />
            </div>
            <div className="col-span-2">
              <Heading
                text="Empowering Growth Through Digital Excellence"
                align="start"
              ></Heading>
            </div>
          </div>
          <div className="grid lg:grid-cols-8 items-center justify-between mt-6 gap-6">
            <div className="md:mt-16 mt-6 md:mb-16 mb-6 col-span-4">
              <Heading text="Our Mission" align="start"></Heading>
              <div className="md:mt-6 mt-3">
                <p className="mt-4 text-xs md:text-base">
                  Our mission is to empower individuals and businesses by
                  providing innovative solutions that enhance their online
                  presence and digital identity. We strive to deliver
                  high-quality services that cater to the unique needs of our
                  clients, fostering growth, and creating lasting value. Through
                  a commitment to excellence and customer satisfaction, we aim
                  to be a trusted partner in the journey of our clients&#39;
                  success in the digital and business markets.
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <img src={goalImage} className="w-full" alt="" />
            </div>
            <div className="col-span-2">
              <Heading
                text="Empowering Growth Through Digital Excellence"
                align="start"
              ></Heading>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="mt-6 hidden">
              <div className="">
                <div className="grid grid-cols-5 items-center gap-6">
                  <div className="col-span-1">
                    <img src={valueImage} className=" object-contain" alt="" />
                  </div>
                  <div className="col-span-4">
                    <Heading text="Our Value" align="start"></Heading>
                  </div>
                </div>
                <div className="grid grid-cols-5 items-center gap-6">
                  <div className="col-span-1"></div>
                  <div className="col-span-4">
                    <div className="mt-4">
                      <p className="">Connecting Businesses to the World</p>
                      <p className="mt-4">
                        Our mission is to empower individuals and businesses by
                        providing innovative solutions that enhance their online
                        presence and digital identity. We strive to deliver
                        high-quality services that cater to the unique needs of
                        our clients, fostering growth, and creating lasting
                        value. Through a commitment to excellence and customer
                        satisfaction, we aim to be a trusted partner in the
                        journey of our clients&#39; success in the digital and
                        business markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
