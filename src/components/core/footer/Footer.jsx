import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo/logo2.png";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  // const [buttonLoading, setButtonLoading] = useState(false);
  // const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  // } = useForm();
  // const currentDate = new Date();
  // const currentYear = currentDate.getFullYear();
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  // const onSubmit = (data) => {
  // setButtonLoading(true);
  // const feedbackData = {
  //   name: data?.name,
  //   email: data?.email,
  // };

  // console.log(feedbackData);
  // try {
  //     publicAxios
  //         .post("/api/users-feedback", feedbackData)
  //         .then((res) => {
  //             toast.success("Add Successfully", {
  //                 duration: 2000,
  //                 className: "mt-32",
  //             });
  //             setButtonLoading(false);
  //         })
  //         .catch((err) => {
  //             setButtonLoading(false);
  //             console.log("error to add new article ", err);
  //         });
  // } catch (error) {
  //     console.log(error);
  //     setButtonLoading(false);
  // } finally {
  //     reset();
  //     setButtonLoading(false);
  // }
  // };

  return (
    <footer className="border-t bg-secondary_main text-white">
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
                <Link href={"/"}>Home</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>About Us</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>Insurance</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>Privacy Policy</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>Trams and conditions</Link>
              </p>
            </div>
            <div className=" space-y-3 mx-auto md:mx-0">
              <h4 className="text-xl font-semibold">Our Service</h4>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>Download App</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>Car Insurance</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>Health Insurance</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>House Insurance</Link>
              </p>
            </div>
            <div className=" space-y-3 mx-auto md:mx-0 ">
              <h4 className="text-xl font-semibold">Customer Support</h4>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>FAQs</Link>
              </p>
              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>Contact Us</Link>
              </p>

              <p className="text-sm opacity-70 hover:opacity-100">
                <Link href={"/"}>Online Customer Service</Link>
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
                  // {...register("name", {
                  //     required: true,
                  // })}
                  placeholder="Your name"
                  className=" border-b border-0 w-full p-4 placeholder:text-xs bg-transparent placeholder:text-white/70"
                />
                {/* {errors.email && (
                            <span className="text-red-500 text-xs ms-2">
                                This field is required
                            </span>
                        )} */}

                <div className="flex items-center justify-between">
                  <input
                    type="email"
                    name="email"
                    // {...register("email", {
                    //     required: true,
                    // })}
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
