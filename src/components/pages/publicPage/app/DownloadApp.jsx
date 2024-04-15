import Heading from "../shared/Heading";
import circle from "@/assets/android/circles.svg";

const DownloadApp = () => {
  return (
    <section className="b_profile_container">
      <div className="grid md:grid-cols-5 md:gap-6 items-center md:justify-between justify-center">
        <div className="md:col-span-2">
          <Heading
            text="Download Mobile App
To Stay Connected"
          ></Heading>
          <p className="mt-10    md:text-base text-xs">
            Business Profile Projects gives you the added advantage of several
            other bProfile apps and third party apps through seamless
            integrations.
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
        <div className="col-span- lg:block hidden"></div>
        <div className="m-16  gap-10 col-span-2 ">
          <div className="relative">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] md:h-[600px] h-[400px] md:w-[300px] w-[200px]">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden md:w-[272px] w-[172px] md:h-[572px] h-[372px] bg-white dark:bg-gray-800">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                  className="dark:hidden md:w-[272px] w-[272px] md:h-[572px] h-[372px]"
                  alt=""
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                  className="hidden dark:block w-[272px] md:h-[572px] h-[372px]"
                  alt=""
                />
              </div>
            </div>
            <img
              className="scale-x-[5] w-3/12 mx-auto absolute lg:block hidden -z-10 -bottom-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={circle}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
