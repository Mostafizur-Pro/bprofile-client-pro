import { MdHome, MdBookmark } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import TopSearchField from "@/components/pages/hallroomPage/room/TopSearchField";
import ProfileDropdown from "../dropdown/ProfileDropdown";
import TopSettingField from "@/components/pages/hallroomPage/room/TopSettingField";

// logo converted to svg
const B_logo_svg = () => {
  return (
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 250.000000 250.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
          fill="currentColor"
          stroke="none"
        >
          <path
            d="M370 1280 l0 -1280 464 0 c256 0 467 4 470 9 3 4 41 11 85 15 104 8
            219 38 306 80 77 36 236 145 258 176 7 10 37 45 66 76 75 80 172 273 197 389
            66 309 -24 612 -254 857 -88 93 -256 195 -384 232 -119 34 -249 46 -514 46
            l-224 0 0 340 0 340 -235 0 -235 0 0 -1280z m1055 125 c33 -9 62 -20 65 -24 3
            -4 25 -17 50 -28 25 -11 71 -46 103 -79 97 -99 133 -202 125 -364 -4 -82 -10
            -108 -35 -162 -52 -110 -152 -203 -268 -248 -57 -22 -76 -24 -342 -28 l-283
            -4 0 476 0 476 263 0 c205 0 276 -3 322 -15z"
          />
        </g>
      </svg>
    </div>
  );
};

// default component
const RoomTopNav = () => {
  const location = useLocation();
  const [isHallRoomActive, setIsHallRoomActive] = useState(false);

  const handleHallRoomClick = () => {
    if (location.pathname === "/room") {
      setIsHallRoomActive(true);
      window.location.reload();
    } else {
      setIsHallRoomActive(false);
    }
  };

  return (
    <div className="bg-primary_blue sticky top-0 left-0 w-full z-50">
      <div className="flex justify-center items-center w-full">
        <div className="flex items-center justify-between w-full max-w-2xl">
          <div className="w-full">
            <Link
              to={"/"}
              className="tooltip transition-all hover:bg-white w-full flex items-center justify-center group"
            >
              <div className="px-2 w-full md:px-5 py-3 md:py-4 group-hover:text-blue-900 flex items-center justify-center text-white">
                <B_logo_svg />
              </div>
              <span className="tooltiptext">Home</span>
            </Link>
          </div>
          <Link
            onClick={handleHallRoomClick}
            to={"/room"}
            className={`tooltip px-2 md:px-5 py-[14px] transition-all hover:text-blue-900 hover:bg-white w-full flex items-center justify-center group ${
              isHallRoomActive ? "text-blue-900" : "text-white"
            }`}
          >
            <div className="w-full flex items-center justify-center">
              <MdHome className="md:text-2xl" />
            </div>
            <span className="tooltiptext">Hall Room</span>
          </Link>
          <Link
            to={"#"}
            className="tooltip px-2 md:px-5 py-[14px] transition-all hover:bg-white w-full flex items-center justify-center group"
          >
            <div className="w-full group-hover:text-blue-900 flex items-center justify-center text-white">
              <MdBookmark className="md:text-2xl" />
            </div>
            <span className="tooltiptext">Bookmark</span>
          </Link>

          <div className="w-full">
            <TopSearchField />
          </div>
          <div className="w-full">
            <TopSettingField />
          </div>

          {/* */}
          <div className="block md:hidden w-full px-1">
            <div className="w-full flex items-center justify-end">
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTopNav;
