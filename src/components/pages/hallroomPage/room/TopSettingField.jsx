import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdSettingsInputComposite } from "react-icons/md";

const TopSettingField = () => {
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <div className="tooltip px-2 md:px-5 py-[14px] transition-all hover:bg-white w-full flex items-center justify-center group ">
          <div className="w-full group-hover:text-blue-900 flex items-center justify-center text-white">
            <MdSettingsInputComposite className=" md:text-2xl" />
          </div>
          <span className="tooltiptext">Settings</span>
        </div>
      </SheetTrigger>
      <SheetContent className="px-10" side="top">
        <div className="flex items-center gap-1 max-w-2xl mx-auto">hi</div>
      </SheetContent>
    </Sheet>
  );
};

export default TopSettingField;
