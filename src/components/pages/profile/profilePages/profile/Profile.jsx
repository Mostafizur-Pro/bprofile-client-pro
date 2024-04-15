import { FaLocationDot, FaInstagram } from "react-icons/fa6";
import { PiLinkedinLogo } from "react-icons/pi";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfileAllPosts from "./ProfileAllPosts";
import { Button } from "@/components/ui/button";
import PersonalDetailsSection from "./PersonalDetailsSection";
import ChangePasswordSection from "./ChangePasswordSection";

// top Information
const ProfileTopCard = () => {
  const clientData = useLoaderData();
  const [client, setClientData] = useState("");
  // console.log("pro", client.name);

  useEffect(() => {
    if (clientData) {
      setClientData(clientData.data[0]);
    }
  }, [clientData]);

  console.log("client", client);
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start  gap-5">
      <div className="flex  items-center justify-center md:justify-start">
        <img
          className="object-cover rounded-full w-[100px] h-[100px]  md:w-[200px] md:h-[200px] md:rounded-xl "
          src={client.image}
          alt=""
        />
      </div>
      <div className="space-y-2 w-full">
        <h3 className="text-3xl font-bold  text-center md:text-left">
          {client.name}
        </h3>

        <div className="flex gap-5 items-center justify-center md:justify-start">
          <p className="flex items-center gap-1">
            <span className="font-bold text-blue-900">2223</span>
            <span>Followers</span>
          </p>
          <p className="flex items-center gap-1">
            <span className="font-bold text-blue-900">2223</span>
            <span>Followings</span>
          </p>
        </div>
        <p className="flex items-center justify-center md:justify-start gap-2">
          <span>
            <FaLocationDot />
          </span>
          <span>
            {client.road ? `${client.road},` : ""}
            {client.area ? `${client.area},` : ""}
            {client.ward ? `${client.ward},` : ""}
            {client.thana ? `${client.thana},` : ""}
            {client.district ? `${client.district},` : ""}
            {client.division ? `${client.division}.` : ""}
          </span>
        </p>
        {/* social urls */}
        <div className="flex gap-1 justify-center md:justify-start">
          <Link target="_blank" to={"##"} className="group">
            <AiOutlineFacebook className="text-4xl group-hover:text-blue-800 transition-all " />
          </Link>
          <Link className="group" to={"##"}>
            <FaInstagram className="text-4xl group-hover:text-blue-800 transition-all " />
          </Link>
          <Link className="group" to={"##"}>
            <PiLinkedinLogo className="text-4xl group-hover:text-blue-800 transition-all " />
          </Link>
        </div>
        <div className="flex justify-center md:justify-start">
          <Button>Follow</Button>
        </div>
      </div>
    </div>
  );
};

// profile Tab
const ProfileTab = ({ activeTab, setActiveTab }) => {
  return (
    <div className=" overflow-auto tab_scroll  border-b border-b-black">
      <div className="flex  justify-between w-[280px] md:">
        <div
          className={`cursor-pointer whitespace-nowrap text-center px-2 py-2 md:py-3   ${
            activeTab === "all_post" &&
            "border-b-4 border-b-blue-800 text-blue-800 font-bold"
          }`}
          onClick={() => setActiveTab("all_post")}
        >
          <p>All Posts</p>
        </div>
        <div
          className={` whitespace-nowrap cursor-pointer text-center py-2 md:py-3 px-2   ${
            activeTab === "personal_details" &&
            "border-b-4 border-b-blue-800 text-blue-800 font-bold"
          }`}
          onClick={() => setActiveTab("personal_details")}
        >
          <p>Personal Details</p>
        </div>

        <div
          className={` whitespace-nowrap cursor-pointer text-center py-2 md:py-3 px-2   ${
            activeTab === "change_password" &&
            "border-b-4 border-b-blue-800 text-blue-800 font-bold"
          }`}
          onClick={() => setActiveTab("change_password")}
        >
          <p>Change Password</p>
        </div>
      </div>
    </div>
  );
};

// default component
const Profile = () => {
  const [activeTab, setActiveTab] = useState("all_post");
  // console.log(activeTab);

  return (
    <div className="space-y-5 md:space-y-10  py-5 px-2">
      <ProfileTopCard />
      <ProfileTab activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* tab wise section */}
      {activeTab === "all_post" && <ProfileAllPosts />}
      {activeTab === "personal_details" && <PersonalDetailsSection />}
      {activeTab === "change_password" && <ChangePasswordSection />}
    </div>
  );
};

export default Profile;
