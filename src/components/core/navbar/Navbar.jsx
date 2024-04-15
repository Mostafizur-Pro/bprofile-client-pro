import { Button } from "@/components/ui/button";
import Logo02Image from "@/assets/logo/logo1.png";
import { NavLink, Link } from "react-router-dom";
import bLogoImage from "../../../assets/logo/b-room.png";
import LogoImage from "../../../assets/logo/logo.png";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProfileDropdown from "../dropdown/ProfileDropdown";
import { useAuth } from "@/components/context/AuthContext";
import { Dropdown } from "flowbite-react";

const NavbarHamburgerMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="px-3">
            <div className="w-7 h-0.5 bg-black "></div>
            <div className="w-7 h-0.5  bg-black mt-2"></div>
          </div>
        </SheetTrigger>
        <SheetContent className=" overflow-y-auto px-5 md:px-10" side="right">
          <div className="w-[156px]">
            <NavLink to={"/"}>
              <img src={LogoImage} alt="logo" loading="lazy" />
            </NavLink>
          </div>
          {/* <NavLink
              className="font-semibold -mb-[25px] animate-ping-slow"
              to={"/room"}
            >
              <img className="w-20" src={bLogoImage} alt="" />
            </NavLink> */}
          {/* <div className="pt-8">
            <input
              className="max-w-20 border border-black"
              type="text"
              placeholder="Eng"
            />
          </div> */}
          <div className="flex flex-col space-y-3 mt-10">
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500"
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className="font-semibold -mb-[25px] animate-ping-slow"
              to={"/room"}
            >
              Hall Room
            </NavLink>
            <div
              className="
                  rounded-lg bg-[white]"
            >
              <Dropdown
                className="bg-white w-[200px] rounded-lg"
                inline
                label={
                  <div className="flex items-center">
                    <div>
                      <h2 className="font-semibold">Members</h2>
                    </div>
                  </div>
                }
              >
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md"
                    to={"/our-client"}
                  >
                    Our Client
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    className="w-11/12 mx-auto my-1 rounded-md"
                    to={"/our-employee"}
                  >
                    Our Employee
                  </Link>
                </Dropdown.Item>
              </Dropdown>
            </div>
            <NavLink className="font-semibold " to={"/service"}>
              Service
            </NavLink>
            <NavLink className="font-semibold " to={"/room"}>
              Hall Room
            </NavLink>

            <NavLink className="font-semibold " to={"/package"}>
              Package
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500"
              to={"/about"}
            >
              About
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500"
              to={"/contact"}
            >
              Contact
            </NavLink>
            <NavLink
              className="font-semibold w-fit hover:border-b-4 border-b-slate-500"
              to={"/app"}
            >
              App
            </NavLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// default component
const Navbar = () => {
  const { clientData, adminData, userData, employeeData } = useAuth();

  return (
    <nav className="py-5 sticky top-0 bg-white z-50">
      <div className="b_profile_container">
        <div className="flex items-center justify-between">
          <div className="w-[100px] md:w-[145px] xl:w-[176px]">
            <Link to={"/"}>
              <img src={Logo02Image} alt="logo" loading="lazy" />
            </Link>
          </div>
          {/* links */}
          <div className="hidden lg:flex items-center  ">
            <div className="md:space-x-4 xl:space-x-6 flex items-center ">
              <NavLink className="font-semibold " to={"/"}>
                Home
              </NavLink>
              <div
                className="
                  rounded-lg bg-[white]"
              >
                <Dropdown
                  className="bg-white w-[200px] rounded-lg"
                  inline
                  label={
                    <div className="flex items-center">
                      <div>
                        <h2 className="font-semibold">Members</h2>
                      </div>
                    </div>
                  }
                >
                  <Dropdown.Item>
                    <Link
                      className="w-11/12 mx-auto my-1 rounded-md text-start"
                      to={"/our-client"}
                    >
                      Our Client
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      className="w-11/12 mx-auto my-1 rounded-md text-start"
                      to={"/our-employee"}
                    >
                      Our Employee
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </div>
              <NavLink className="font-semibold " to={"/service"}>
                Service
              </NavLink>
              <NavLink
                className="font-semibold -mb-[25px] animate-ping-slow"
                to={"/room"}
              >
                <img className="w-20" src={bLogoImage} alt="" />
              </NavLink>
              <NavLink className="font-semibold " to={"/package"}>
                Package
              </NavLink>
              <NavLink className="font-semibold " to={"/about"}>
                About
              </NavLink>
              <NavLink className="font-semibold " to={"/contact"}>
                Contacts
              </NavLink>
              <NavLink className="font-semibold " to={"/app"}>
                App
              </NavLink>
            </div>
          </div>
          <div className="block lg:hidden">
            <NavLink
              className="font-semibold -mb-[25px] animate-ping-slow"
              to={"/room"}
            >
              <img className="w-20" src={bLogoImage} alt="" />
            </NavLink>
          </div>
          <div className="flex items-center">
            <div className="">
              {clientData || adminData || userData || employeeData ? (
                <ProfileDropdown />
              ) : (
                <Link to={"/login"}>
                  <Button
                    className="rounded-full h-7 py-2.5 px-3.5 md:h-10 md:px-6 md:py-2"
                    variant="default"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
            <div className="lg:hidden block">
              <NavbarHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
