import Logo from "@/components/core/logo/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, useLocation } from "react-router-dom";
// shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.30)]
const ProfileLeftAsidebar = () => {
  const location = useLocation();
  return (
    <aside className="p-5 space-y-5 z-10  max-h-screen">
      <Logo />

      <div className="space-y-1.5">
        <div
          className={`py-3  px-2 rounded-[8px] ${
            location.pathname === "/profile" ? "bg-blue-50 font-bold" : ""
          }`}
        >
          <Link to="/profile">Profile</Link>
        </div>
        <div
          className={`py-3 px-2 rounded-[8px] ${
            location.pathname === "/profile/inbox" ? "bg-blue-50 font-bold" : ""
          }`}
        >
          <Link to="/profile/inbox">Inbox</Link>
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-normal py-3 px-2 rounded-[8px]">
              Paid Posts
            </AccordionTrigger>
            <AccordionContent className="px-2">content </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
};

export default ProfileLeftAsidebar;
