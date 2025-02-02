import { useState } from "react";
import ClientList from "./ClientList";
import OldClients from "./OldClients";

// Profile Lists Tabs
const AllClientsListTab = ({ activeTab, setActiveTab }) => {
  const TabData = [
    {
      tabName: "Client Lists",
      tabUrl: "clients",
    },
    {
      tabName: "Old Client Lists",
      tabUrl: "old_clients",
    },
  ];

  return (
    <div className="overflow-auto py-5 pe-3  rounded-[10px] tab_scroll ">
      <div className="flex gap-5 md:gap-10  items-center w-[280px] md:w-full">
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
  );
};

const AllClientsList = () => {
  const [activeTab, setActiveTab] = useState("clients");
  return (
    <div className="mt-6 ">
      <p className="text-3xl font-semibold  text-start mb-2">
        {(activeTab === "clients" && "All Clients Information") ||
          (activeTab === "old_clients" && "List of Old Clients ")}
      </p>
      <div className="flex items-center justify-start">
        <AllClientsListTab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="py-5">
        {(activeTab === "clients" && <ClientList />) ||
          (activeTab === "old_clients" && <OldClients />)}
      </div>
    </div>
  );
};

export default AllClientsList;
