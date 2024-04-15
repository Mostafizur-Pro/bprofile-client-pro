import { Outlet } from "react-router-dom";
import Navbar from "../core/navbar/Navbar";
import Footer from "../core/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
