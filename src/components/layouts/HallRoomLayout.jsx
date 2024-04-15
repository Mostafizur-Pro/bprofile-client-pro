import { Outlet, useLocation } from "react-router-dom";
import RoomTopNav from "../core/navbar/RoomTopNav";
import RoomCategorySidebar from "../pages/hallroomPage/room/RoomCategorySidebar";
import { MdArrowForwardIos } from "react-icons/md";
import PopularPostAside from "../core/asides/PopularPostAside";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const NavbarHamburgerMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="cursor-pointer bg-primary_blue text-white drop-shadow-lg h-10 w-6  rounded-br-[8px] flex items-center justify-center">
            <div className="flex items-center justify-center gap-3 rotate-90">
              <MdArrowForwardIos className="-rotate-90" />{" "}
              {/* <p className="text-xs">Categories</p> */}
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className=" overflow-y-auto px-5 md:px-10" side="left">
          Hello
        </SheetContent>
      </Sheet>
    </div>
  );
};
const HallRoomLayout = () => {
  const location = useLocation();
  return (
    <div className="">
      <RoomTopNav />
      <div className="lg:flex  justify-between ">
        <div className="hidden lg:block">
          <div className="border-r max-h-screen overflow-y-auto  px-2 pb-5 fixed  lg:w-[280px] xl:w-[350px]">
            {/* LeftSide Side */}
            {location.pathname === "/room" && <RoomCategorySidebar />}
          </div>
        </div>
        <div className="relative flex-1 lg:pt-5 pt-0.5 bg-slate-100 lg:mx-[280px] xl:mx-[350px]  max-w-[1530px] mx-auto ">
          <div className="block lg:hidden sticky top-0 left-0">
            <NavbarHamburgerMenu />
          </div>
          {/* Right Side */}
          <div className="px-2">
            <Outlet></Outlet>
          </div>
        </div>
        {/* Right Side */}
        <div className="hidden fixed  right-0 lg:block">
          <div className="border-r lg:w-[280px] xl:w-[350px] max-h-screen overflow-y-auto  px-2 pb-5 fixed right-0">
            <PopularPostAside />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallRoomLayout;
