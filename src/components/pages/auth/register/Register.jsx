import { useState } from "react";
import ClientRegister from "./ClientRegister";
import UserRegister from "./UserRegister";

const Register = () => {
  const [tab, setTab] = useState("client");
  return (
    <div className="py-[60px] bg-blue-50 md:py-20 xl:py-28  flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col md:flex-row b_profile_container items-center justify-center gap-16 md:w-[70%]">
        <div className="space-y-3 w-full md:text-left text-center mt-10 md:mt-0">
          <h3 className="text-2xl font-bold">Make Business Friend </h3>
          <p>
            Friend Finder is a social network template that can be used to
            connect people. The template offers Landing pages, News Feed,
            Image/Video Feed, Chat Box, Timeline and lot more.
          </p>
        </div>
        {/*space-x-5 lg:space-x-0 */}
        <div className="w-full lg:flex items-center justify-center ">
          <div className="flex items-center justify-center  relative">
            <div className=" bg-white/50 lg:shadow-md flex gap-5 lg:-rotate-90 px-3 lg:py-5 text-center md:my-auto absolute lg:-left-28 lg:-top-[60px] top-6">
              <button
                className={`p-4 lg:p-0  md:text-2xl  ${
                  tab === "user" && "text-red-500 "
                }`}
                onClick={() => setTab("user")}
              >
                User
              </button>
              <button
                className={`p-4 lg:p-0 md:text-2xl ${
                  tab === "client" && "text-red-500 "
                }`}
                onClick={() => setTab("client")}
              >
                Client
              </button>
            </div>
          </div>
          {/* form */}
          <div className="w-full lg:w-[350px] mt-20 lg:mt-10 relative">
            <div className=" ">{tab === "user" && <UserRegister />}</div>
            <div className="">{tab === "client" && <ClientRegister />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
