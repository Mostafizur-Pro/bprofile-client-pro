import DeleteAction from "@/components/core/DeleteAction";
import DashboardTable from "@/components/core/table/DashboardTable";
import { formatedDate } from "@/utils/getCurrentDate";
import { useState } from "react";

// image
const PaidImageSection = () => {
  const currentDate = new Date();
  const ImagePostColumn = [
    {
      title: " Serial",
      dataKey: "serial",
      row: () => <span>serial</span>,
    },
    {
      title: "Image",
      dataKey: "image",
      row: () => (
        <div>
          <img
            className="rounded-full w-[100px] h-[100px] object-cover"
            src="https://images.pexels.com/photos/18827668/pexels-photo-18827668/free-photo-of-brown-cow-on-a-pasture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="title"
          />
        </div>
      ),
    },
    {
      title: "Title",
      dataKey: "title",
      row: () => (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
            modi
          </p>
        </div>
      ),
    },
    {
      title: "date",
      dataKey: "date",
      row: () => (
        <div>
          <p>{formatedDate(currentDate)}</p>
        </div>
      ),
    },
    {
      title: "Action",
      dataKey: "action",
      row: () => (
        <div>
          <p>
            <DeleteAction
              handleDeleteSubmit={() => undefined}
              isLoading={false}
            />
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div>
        <DashboardTable
          data={[...new Array(5)]}
          columns={ImagePostColumn}
          isLoading={false}
        />
      </div>
    </div>
  );
};

// vide
const PaidVideoSection = () => {
  return <div>Paid Videos</div>;
};

//default component
const PaidPosts = () => {
  const [activeTab, setActiveTab] = useState("paid_image");
  const TabData = [
    {
      tabName: "Paid Image",
      tabUrl: "paid_image",
    },
    {
      tabName: "Paid Videos",
      tabUrl: "paid_videos",
    },
  ];
  return (
    <div className="space-y-5">
      <p className="text-2xl font-semibold ">
        Paid Post -
        {(activeTab === "paid_image" && "Paid Image") ||
          (activeTab === "paid_videos" && "Paid Videos")}
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

      <div>{activeTab === "paid_image" && <PaidImageSection />}</div>
      <div>{activeTab === "paid_video" && <PaidVideoSection />}</div>
    </div>
  );
};

export default PaidPosts;
