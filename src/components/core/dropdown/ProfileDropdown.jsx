import { useAuth } from "@/components/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoginProfile from "@/utils/loginProfile";
import { FaUser } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const { clientData, adminData, logout, userData, employeeData } = useAuth();

  const handleLogout = () => {
    logout();
  };
  // need to send the props to work properly
  //  use isAdmin props to define the routes for admin ,so we can use it in both  adminns and normal user
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <LoginProfile
            clientData={clientData}
            adminData={adminData}
            userData={userData}
            employeeData={employeeData}
          />
        </DropdownMenuTrigger>

        {userData ? (
          <></>
        ) : (
          <DropdownMenuContent>
            <DropdownMenuItem className="hover:bg-blue-200 cursor-pointer">
              <Link
                className=" flex items-center gap-2 w-full text-xl"
                to={
                  adminData
                    ? "/dashboard/profile"
                    : employeeData
                    ? "/dashboard/employee_profile"
                    : clientData
                    ? `/profile/${clientData?.profile_id}`
                    : "/"
                }
              >
                <FaUser /> Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 items-center hover:bg-blue-200 cursor-pointer text-xl">
              <RiShutDownLine />
              <button onClick={handleLogout}>Log out</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
