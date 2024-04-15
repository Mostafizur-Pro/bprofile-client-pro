// import logo from "../../../assets/All logo/b.png";
import logo from "@/assets/AllLogo/b.png";
import "./Banner.css";
// import image1 from "../../../assets/home/slider3/1.1.png";
// import image2 from "../../../assets/home/slider3/2.1.png";
// import image3 from "../../../assets/home/slider3/3.1.png";
const HomeBanner = () => {
  return (
    <div>
      <section className=" ">
        <div className="bg-[#282560] text-white py-5 lg:py-10">
          <div className="containers mx-auto flex flex-col md:flex-row items-center my-5 md:my-16">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
              <div className="containers">
                <div className="box">
                  <div className="title">
                    <span className="block"></span>
                    <h1 id="titleContent">
                      Business Profile<span></span>
                    </h1>
                  </div>

                  <div className="role">
                    <div className="block"></div>
                    <p id="roleContent">Hall Room of Businessman</p>
                  </div>
                </div>
              </div>
              <p className="text-md md:text-lg text-gray-50 mb-4">
                {" "}
                Business Profile is a project of IITAB (International IT
                Association of Bangladesh) that is working to bring all the
                legal businesses out there into the spotlight.
              </p>
              <div className="wrapper">
                <a className="cta" href="bProfile.apk" download="bProfile.apk">
                  <button>Download App</button>
                  <span></span>
                </a>
              </div>
            </div>
            <dialog id="my_modal_3" className="modal text-black">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle  absolute right-2 top-2">
                    ✕
                  </button>
                </form>

                <div
                  id="downloadBtn"
                  className=" flex items-center gap-3 my-10"
                >
                  <div className="w-10">
                    <img src="" alt="" />
                    <img src={logo} alt="" />
                  </div>
                  <div className="text-left">
                    <h1>
                      <span className="text-xl font-bold">
                        Download bProfile
                      </span>
                      <span className="font-normal">for Android</span>
                    </h1>
                    <h1>
                      <span className="text-green-700">Free</span>
                      <span className="font-normal">In Engilsh & Bangla</span>
                    </h1>
                  </div>
                </div>
              </div>
            </dialog>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
              <div className="h-48 flex flex-wrap content-center">
                {/* <img
                  className="inline-block mt-28 hidden xl:block image-transition"
                  src={image1}
                  id="mainImage1"
                />
                <img
                  className="inline-block mt-4 md:mt-0 p-12 md:p-0 image-transition"
                  src={image2}
                  id="mainImage2"
                />
                <img
                  className="inline-block mt-28 hidden lg:block image-transition"
                  src={image3}
                  id="mainImage3"
                /> */}
              </div>
            </div>
          </div>
          <div className="vert-move text-white block lg:hidden">
            <a href="#portfolio"></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
