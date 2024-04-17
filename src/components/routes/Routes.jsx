import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/publicPage/home/Home";
import HallRoomLayout from "../layouts/HallRoomLayout";
import Room from "../pages/hallroomPage/room/Room";
import Bookmark from "../pages/hallroomPage/bookmark/Bookmark";
import ProfileLayout from "../layouts/ProfileLayout";
import Profile from "../pages/profile/profilePages/profile/Profile";
import Inbox from "../pages/profile/inboxPages/Inbox";
import About from "../pages/publicPage/about/About";
import Contact from "../pages/publicPage/contact/Contact";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/dashboard/admin/dashboard/Dashboard";
import Admin_Profile from "../pages/dashboard/admin/admin_profile/Admin_Profile";
import AllClientsList from "../pages/dashboard/admin/profileLists/AllClientList";
import AdminsInformation from "../pages/dashboard/admin/profileLists/AdminsInformation";
import PaidClientsList from "../pages/dashboard/admin/profileLists/PaidClientsList";
import EmployeeList from "../pages/dashboard/admin/profileLists/EmployeeList";
import Userlist from "../pages/dashboard/admin/profileLists/Userlist";
import DeletedClients from "../pages/dashboard/admin/inbox/DeletedClients";
import EditClientInfo from "../pages/dashboard/admin/inbox/EditClientInfo";
import EditEmployeInfo from "../pages/dashboard/admin/inbox/EditEmployeInfo";
import HallRoomPostsList from "../pages/dashboard/admin/inbox/HallRoomPostsList";
import PaidPosts from "../pages/dashboard/admin/inbox/PaidPosts";
import HaveAQuestion from "../pages/dashboard/admin/inbox/HaveAQuestion";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import AllMessage from "../pages/dashboard/admin/message/AllMessage";
import CreateMessage from "../pages/dashboard/admin/message/CreateMessage";
import AllPaidPosts from "../pages/dashboard/admin/posts/AllPaidPosts";
import CreatePost from "../pages/dashboard/admin/posts/CreatePosts";
import AllHallroomPosts from "../pages/dashboard/admin/posts/AllHallroomPosts";
import AdminLogin from "../pages/auth/admin/AdminLogin";
import AdminRegister from "../pages/auth/admin/AdminRegister";
import AdminRoute from "./AdminRoute/AdminRoute";
import OurClient from "../pages/members/ourClient/OurClient";
import EmployeeRegister from "../pages/auth/employee/EmployeeRegister";
import Packages from "../pages/publicPage/package/Packages";
import Service from "../pages/publicPage/service/Service";
import App from "../pages/publicPage/app/App";
import OurEmployee from "../pages/members/ourEmployee/OurEmployee";
import AllProviderRoute from "./AdminRoute/AllProviderRoute";
import Employee_Profile from "../pages/dashboard/employee/employee_profile/Employee_Profile";
import AdminEmployeePrivateRoute from "./AdminEmployeeRoute/AdminEmployeePrivateRoute";
import AllEmpClientsList from "../pages/dashboard/employee/profileLists/AllEmpClientList";
import DashboardRegister from "../pages/auth/register/DashboardRegister";

const router = createBrowserRouter([
  // Home
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/download",
        element: <App />,
      },

      {
        path: "/our-client",
        element: <OurClient />,
      },
      {
        path: "/our-employee",
        element: <OurEmployee />,
      },
      {
        path: "/package",
        element: <Packages />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <AdminLogin />,
      },
      // {
      //   path: "/adminRegister",
      //   element: <AdminRegister />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/employee-register",
      //   element: <EmployeeRegister />,
      // },
    ],
  },
  // Room
  {
    path: "/room",
    element: (
      <AllProviderRoute>
        <HallRoomLayout />
      </AllProviderRoute>
    ),
    children: [
      {
        path: "/room",
        element: <Room />,
      },
      {
        path: "/room/bookmark",
        element: <Bookmark />,
      },
    ],
  },

  // Room Profile
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "/profile/:id", // This will match /profile/:id
        element: <Profile />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/client?searchId=${
              params.id
            }`
          ),
      },
      {
        path: "profile/inbox", // This will match /profile/:id/inbox
        element: <Inbox />,
      },
    ],
  },
  // dashboard
  {
    path: "/dashboard",
    element: (
      <AdminEmployeePrivateRoute>
        <AdminLayout />
      </AdminEmployeePrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      // profile
      {
        path: "/dashboard/profile",
        element: (
          <AdminRoute>
            <Admin_Profile />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/employee_profile",
        element: <Employee_Profile />,
      },
      {
        path: "/dashboard/emp/client-list",
        element: <AllEmpClientsList />,
      },
      // all profile lists
      {
        path: "/dashboard/admin-info",
        element: <AdminsInformation />,
      },
      {
        path: "/dashboard/paid-clients",
        element: <PaidClientsList />,
      },
      {
        path: "/dashboard/employee-list",
        element: <EmployeeList />,
      },
      {
        path: "/dashboard/user-list",
        element: <Userlist />,
      },
      {
        path: "/dashboard/client-list",
        element: <AllClientsList />,
      },
      // inbox
      {
        path: "/dashboard/deleted-clients",
        element: <DeletedClients />,
      },
      {
        path: "/dashboard/edit-clients",
        element: <EditClientInfo />,
      },
      {
        path: "/dashboard/edit-employe-info",
        element: <EditEmployeInfo />,
      },
      {
        path: "/dashboard/hallroom-posts",
        element: <HallRoomPostsList />,
      },
      {
        path: "/dashboard/paid-posts",
        element: <PaidPosts />,
      },
      {
        path: "/dashboard/have-a-quesion",
        element: <HaveAQuestion />,
      },
      // message
      {
        path: "/dashboard/all-message",
        element: <AllMessage />,
      },
      {
        path: "/dashboard/create-message",
        element: <CreateMessage />,
      },
      // Auth
      {
        path: "/dashboard/admin-register",
        element: <AdminRegister />,
      },

      {
        path: "/dashboard/employee-register",
        element: <EmployeeRegister />,
      },
      {
        path: "/dashboard/client-register",
        element: <DashboardRegister />,
      },

      // posts
      {
        path: "/dashboard/hallroom-posts",
        element: <AllHallroomPosts />,
      },
      {
        path: "/dashboard/paid-post",
        element: <AllPaidPosts />,
      },
      {
        path: "/dashboard/create-post",
        element: <CreatePost />,
      },
    ],
  },
]);

export default router;
