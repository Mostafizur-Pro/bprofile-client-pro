import TextInput from "@/components/core/inputs/TextInput";
import TextareaInput from "@/components/core/inputs/TextareaInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// image
const CreateImageSection = () => {
  return (
    <div>
      <form className="space-y-3">
        <div>
          <TextInput id={"title"} label={"Your Title"} />
        </div>
        <div>
          <TextInput id={"client_id"} label={"Provid Client Id"} />
        </div>
        <div>
          <TextareaInput
            className={"w-full"}
            id={"msg"}
            label={"Whats On your Mind"}
          />
        </div>
        <div>
          <TextInput type="file" id={"file"} />
        </div>
        <div>
          <select
            className="border w-full border-slate-500 py-1.5 rounded-[6px]"
            name="cars"
            id="cars"
          >
            <option disabled selected>
              Location
            </option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <select
            className="border w-full border-slate-500 py-1.5 rounded-[6px]"
            name="cars"
            id="cars"
          >
            <option disabled selected>
              Category
            </option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <Button className="w-full md:w-[30%]" type="submit">Post</Button>
        </div>
      </form>
    </div>
  );
};

// video
const CreateVideoSection = () => {
  return <div>Paid Videos</div>;
};

//default component
const CreatePost = () => {
  const [activeTab, setActiveTab] = useState("create_image");
  const TabData = [
    {
      tabName: "Paid Image",
      tabUrl: "create_image",
    },
    {
      tabName: "Paid Videos",
      tabUrl: "create_videos",
    },
  ];
  return (
    <div className="space-y-5">
      <p className="text-2xl font-semibold ">
        Create -
        {(activeTab === "create_image" && "Image Post") ||
          (activeTab === "create_videos" && "Video Post")}
      </p>
      <div className="overflow-auto py-5 px-3  rounded-[10px] tab_scroll">
        <div className="flex gap-5 md:gap-10 md:border-b   items-center w-[280px] md:w-full">
          {TabData.map((tab, index) => (
            <div
              key={index}
              className={`cursor-pointer whitespace-nowrap text-center   ${
                activeTab === tab.tabUrl &&
                "border-b-4 border-b-blue-800 text-blue-800 font-bold"
              }`}
              onClick={() => setActiveTab(tab.tabUrl)}
            >
              <p>{tab.tabName}</p>
            </div>
          ))}
        </div>
      </div>

      <div>{activeTab === "create_image" && <CreateImageSection />}</div>
      <div>{activeTab === "paid_video" && <CreateVideoSection />}</div>
    </div>
  );
};

export default CreatePost;
