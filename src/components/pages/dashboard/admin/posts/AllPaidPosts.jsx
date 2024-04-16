import DeleteAction from "@/components/core/DeleteAction";
import CustomSpinner from "@/components/core/spinner/Spinner";
import DashboardTable from "@/components/core/table/DashboardTable";
import useGetData from "@/components/hooks/hallRoom/hallRoom";
import { formatDateString } from "@/utils/getCurrentDate";
import { useState } from "react";

// image
const PaidImageSection = () => {
  const [posts, loading, error] = useGetData(
    `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/paid_image`
  );

  if (loading) {
    return (
      <div>
        <CustomSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // const currentDate = new Date();

  const ImagePostColumn = [
    {
      title: " Serial",
      dataKey: "serial",
      row: (posts) => <span>{posts?.id}</span>,
    },
    {
      title: "Image",
      dataKey: "image",
      row: (posts) => (
        <div>
          <img
            className="rounded-full w-[100px] h-[100px] object-cover"
            src={posts?.image}
            alt="title"
          />
        </div>
      ),
    },
    {
      title: "Title",
      dataKey: "title",
      row: (posts) => (
        <div>
          <p>
           {posts?.title}
          </p>
        </div>
      ),
    },
    {
      title: "date",
      dataKey: "date",
      row: (posts) => (
        <div>
          <p>{formatDateString(posts?.createdAt)}</p>
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
          data={posts}
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
const AllPaidPosts = () => {
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

export default AllPaidPosts;
