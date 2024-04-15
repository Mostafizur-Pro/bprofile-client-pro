import TextInput from "@/components/core/inputs/TextInput";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaSearch } from "react-icons/fa";

const TopSearchField = () => {
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        {/* <FaSearch className="md:text-2xl" /> */}
        <div className="tooltip px-2 md:px-5 py-[14px]  transition-all hover:bg-white w-full flex items-center justify-center group ">
          <div className="w-full group-hover:text-blue-900 flex items-center justify-center text-white">
            <FaSearch className="md:text-2xl" />
          </div>
          <span className="tooltiptext">Search</span>
        </div>
      </SheetTrigger>
      <SheetContent className="px-10" side="top">
        <div className="flex items-center gap-1 max-w-2xl mx-auto border border-slate-500 rounded-[6px] ">
          <div className="w-full mt-2">
            <TextInput className="w-full border-none" placeholder="Search" />
          </div>
          <div className="pr-3">
            <FaSearch />
          </div>
        </div>
        {/* <div className="max-w-2xl mx-auto">
          <div className="flex w-full border border-slate-500 rounded-[8px] items-center ">
          
            <div className="pr-3">
              <FaSearch />
            </div>
          </div>
        </div> */}
      </SheetContent>
    </Sheet>
  );
};

export default TopSearchField;
