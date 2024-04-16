import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo/final/main2.png";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <footer className="border-t bg-[#282560] text-white">
      <div className="b_profile_container px-7">
        <div className="lg:py-32 md:py-24 py-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 md:justify-between md:items-center ">
            <div className=" md:block  md:w-full">
              <img
                className="h-12 w-auto"
                src={logo}
                alt="business profile logo"
              ></img>
            </div>
          </div>
          <div className="md:grid lg:grid-cols-4 md:grid-cols-3 space-y-4 items-start justify-between mt-16 gap-6 px-3 md:px-0">
            <div className=" space-y-3 mx-auto md:mx-0">
              <h4 className="text-xl font-semibold">Quick Links</h4>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/"}>Home</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/about"}>About Us</Link>
              </p>

              <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/"}>Privacy Policy</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/"}>Trams and conditions</Link>
              </p>
            </div>
            <div className=" space-y-3 mx-auto md:mx-0">
              <h4 className="text-xl font-semibold">Our Service</h4>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/app"}>Download App</Link>
              </p>
              {/* <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/"}>Car Insurance</Link>
              </p> */}
              {/* <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/"}>Health Insurance</Link>
              </p> */}
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/service"}>Service</Link>
              </p>
            </div>
            <div className=" space-y-3 mx-auto md:mx-0 ">
              <h4 className="text-xl font-semibold">Customer Support</h4>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/"}>FAQs</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/contact"}>Contact Us</Link>
              </p>

              <p className="text-sm opacity-70 hover:opacity-100">
                <Link to={"/service"}>Online Customer Service</Link>
              </p>
            </div>
            <div className="opacity- md:mt-5  lg:mt-0 space-y-3 col-span-3 lg:col-span-1 mx-auto md:mx-0 ">
              <h4 className="text-2xl font-semibold mb-4">
                Subscribe to our newsletter
              </h4>
              <form
              // onSubmit={handleSubmit(onSubmit)}
              >
                {/* {errors.name && (
                            <span className="text-red-500 text-xs ms-2">
                                This field is required
                            </span>
                        )} */}

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className=" border-b border-0 w-full p-4 placeholder:text-xs bg-transparent placeholder:text-white/70"
                />

                <div className="flex items-center justify-between">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className=" border-b border-0 w-full p-4 placeholder:text-xs bg-transparent placeholder:text-white/70 text-white"
                  />

                  <button
                    type="submit"
                    className="p-2 bg-gradient-to-br from-secondary_main to-tertiary rounded-full"
                  >
                    <IoIosArrowForward className="text-2xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
