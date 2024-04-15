import { Outlet } from "react-router-dom";
import RoomTopNav from "../core/navbar/RoomTopNav";
import PopularPostAside from "../core/asides/PopularPostAside";
import ProfileLeftAsidebar from "../core/asides/ProfileLeftAsidebar";

const ProfileLayout = () => {
  // const location = useLocation();
  return (
    <div className="">
      <RoomTopNav />
      <div className="flex justify-between ">
        <div className="hidden lg:block">
          <div className="border-r border-r-blue-300 min-h-screen overflow-y-auto   pb-5 fixed lg:w-[280px] xl:w-[350px] ">
            <ProfileLeftAsidebar />
          </div>
        </div>
        <div className="flex-1  lg:mx-[280px] xl:mx-[350px]  max-w-[1530px] mx-auto ">
          <Outlet></Outlet>
        </div>
        <div className="hidden lg:block">
          <div className="border-l lg:w-[280px] xl:w-[350px] max-h-screen overflow-y-auto  px-2 pb-5 fixed right-0">
            <PopularPostAside />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
