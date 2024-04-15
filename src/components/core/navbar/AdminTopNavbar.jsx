import { PiHandWavingFill } from "react-icons/pi";
import ProfileDropdown from "../dropdown/ProfileDropdown";
import { getFormattedDate } from "@/utils/getCurrentDate";
const AdminTopNavbar = () => {
  return (
    <div className="xl:p-5 p-3  bg-white">
      {/* <div className="block: md:hidden">Routes for dasshboard</div> */}
      <div className="grid xl:grid-cols-5 grid-cols-4 items-center justify-between">
        <div className="hidden md:block col-span-1">
          <p className="flex items-center gap-2">
            <span className="">
              <PiHandWavingFill className="text-amber-400 text-4xl wave" />
            </span>
            <span>
              Welcome, <br />
              Have a good day!{" "}
            </span>
          </p>
        </div>

        <div className="hidden md:block marquee xl:col-span-3 col-span-2">
          <p className="">{getFormattedDate()}</p>
        </div>
        <div className="col-span-1">
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default AdminTopNavbar;
