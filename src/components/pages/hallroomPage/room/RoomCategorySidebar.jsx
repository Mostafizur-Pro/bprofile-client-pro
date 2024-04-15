import { MdSettings } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaUser } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import locationData from "../../../../../public/location.json";
import { useAuth } from "@/components/context/AuthContext";

// profile
const ProfileSidebar = () => {
  const { clientData, logout, adminData, userData } = useAuth();

  const handleLogout = () => {
    logout();
  };

  // console.log('userData', userData)

  return (
    <div className="flex justify-between">
      <Link
        to={
          adminData
            ? "/dashboard/profile"
            : clientData
            ? `/profile/${clientData?.id}`
            : "/"
        }
      >
        <div className="flex items-center gap-4">
          <div>
            {adminData && (
              <div className="border-2 border-primary_blue p-1 rounded-full">
                <img
                  className="w-8 h-8 object-cover rounded-full "
                  src={
                    adminData?.image ===
                    "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png"
                      ? adminData?.image
                      : `${
                          import.meta.env.VITE_LOCAL_API_URL
                        }/api/v1/images/uploads/${adminData?.image}`
                  }
                  alt="profile"
                />
              </div>
            )}
            {clientData && (
              <img
                className="w-8 h-8 object-cover rounded-full"
                src={
                  clientData?.image ===
                    "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                  clientData?.image ===
                    "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                    ? clientData?.image
                    : `${
                        import.meta.env.VITE_LOCAL_API_URL
                      }/api/v1/images/uploads/${clientData?.image}`
                }
                alt="profile"
              />
            )}
            {userData && (
              <img
                className="w-8 h-8 object-cover rounded-full"
                src={
                  userData?.image ===
                    "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                  userData?.image ===
                    "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                    ? userData?.image
                    : `${
                        import.meta.env.VITE_LOCAL_API_URL
                      }/api/v1/images/uploads/${userData?.image}`
                }
                alt="profile"
              />
            )}
          </div>
          <div>
            <p className="font-semibold text-[16px] md:text-[18px] capitalize">
              {clientData?.name || adminData?.name || userData?.name}
            </p>
            <p>{clientData?.role || adminData?.role}</p>
          </div>
        </div>
      </Link>
      {/* <p>{adminData?.image}</p> */}

      <DropdownMenu className="relative">
        <DropdownMenuTrigger>
          <MdSettings className="text-3xl" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute">
          <DropdownMenuItem className="hover:bg-blue-200 text-xl cursor-pointer">
            {userData ? (
              <></>
            ) : (
              <Link
                className=" flex items-center gap-2 w-full"
                to={
                  adminData
                    ? "/dashboard/profile"
                    : clientData
                    ? `/profile/${clientData?.profile_id}`
                    : "/"
                }
              >
                <FaUser /> Profile
              </Link>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 items-center text-xl hover:bg-blue-200 cursor-pointer ">
            <RiShutDownLine />

            <button onClick={handleLogout}>Log out</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

// search field

// categories
const CategoryLists = () => {
  return (
    <div className="pb-10">
      <div className="pb-5">
        <p className="text-xl font-semibold text-slate-600">
          Discover Specific Content
        </p>
      </div>
      {/* category */}
      <Accordion type="single" collapsible>
        <AccordionItem value="Category">
          <AccordionTrigger className="hover:bg-slate-200 px-2">
            Category
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <Accordion type="single" collapsible>
              {[...new Array(10)].map(() => (
                <AccordionItem key={Math.random()} value={Math.random()}>
                  <AccordionTrigger className="hover:bg-slate-200 px-2">
                    {"Veichle" + Math.random()}
                  </AccordionTrigger>
                  {[...new Array(4)].map(() => (
                    <AccordionContent key={Math.random()} className="px-4">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* Location */}

      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="Location">
            <AccordionTrigger className="hover:bg-slate-200 px-2">
              Location
            </AccordionTrigger>
            <AccordionContent className="px-4">
              {locationData.map((division) => (
                <Accordion key={division.id} type="single" collapsible>
                  <AccordionItem value={division.id}>
                    <AccordionTrigger className="hover:bg-slate-200 px-2">
                      {division.division}
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <Accordion key={division.id} type="single" collapsible>
                        <AccordionItem value={division.id}>
                          {division.districtList.map((district) => (
                            <AccordionItem
                              key={district.id}
                              value={district.id}
                            >
                              <AccordionTrigger className="hover:bg-slate-200 px-2">
                                {district.district}
                              </AccordionTrigger>
                              <AccordionContent className="px-4">
                                <Accordion type="single" collapsible>
                                  {district.thanaList.map((thana) => (
                                    <AccordionItem
                                      key={thana.id}
                                      value={thana.id}
                                    >
                                      <AccordionTrigger className="hover:bg-slate-200 px-2">
                                        {thana.thana}
                                      </AccordionTrigger>
                                      <AccordionContent className="px-4">
                                        <Accordion type="single" collapsible>
                                          {thana.wardList.map((ward) => (
                                            <AccordionItem
                                              key={ward.id}
                                              value={ward.id}
                                            >
                                              <AccordionTrigger className="hover:bg-slate-200 px-2">
                                                {ward.name}
                                              </AccordionTrigger>
                                              {/* Additional content for Ward goes here if needed */}
                                            </AccordionItem>
                                          ))}
                                        </Accordion>
                                      </AccordionContent>
                                    </AccordionItem>
                                  ))}
                                </Accordion>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

// default component
const RoomCategorySidebar = () => {
  // api call
  return (
    <div className="space-y-8 p-3">
      <ProfileSidebar />
      <CategoryLists />
    </div>
  );
};

export default RoomCategorySidebar;
