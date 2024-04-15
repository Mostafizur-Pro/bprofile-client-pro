import DeleteAction from "@/components/core/DeleteAction";
import EditAction from "@/components/core/EditAction";
import ViewAction from "@/components/core/ViewAction";
import DashboardTable from "@/components/core/table/DashboardTable";

const OldClients = () => {
  const DashboardColumns = [
    {
      title: "Client ID",
      dataKey: "client_id",
      row: () => <span>ID</span>,
    },
    {
      title: "Name",
      dataKey: "name",
      row: () => (
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] object-cover"
              src="https://placehold.co/20x20/000000/FFF"
              alt=""
            />
          </div>
          <div>
            <p className="font-semibold">Mizanur Rahman abid </p>
            <p>Dhaka, Bangladeh</p>
          </div>
        </div>
      ),
    },
    {
      title: "Employee ID",
      dataKey: "employee_id",
      row: () => (
        <div>
          <p className="font-bold">6253623535</p>
        </div>
      ),
    },
    {
      title: "Contact",
      dataKey: "contact",
      row: () => (
        <div>
          <p>phone no</p>
          <p>Email@email.com</p>
        </div>
      ),
    },
    {
      title: "date",
      dataKey: "date",
      row: () => (
        <div>
          <p>Joining Date</p>
        </div>
      ),
    },
    {
      title: "Action",
      dataKey: "action",
      row: () => (
        <div className="flex items-center">
          <DeleteAction
            handleDeleteSubmit={() => undefined}
            isLoading={false}
          />
          <EditAction admins={"old-clients"} />
          <ViewAction admins={"old-clients"} />
        </div>
      ),
    },
  ];

  // fetch data and pass from here while replacing the [...new array(5)]

  return (
    <div>
      <DashboardTable
        data={[...new Array(5)]}
        columns={DashboardColumns}
        isLoading={false}
      />
    </div>
  );
};

export default OldClients;
