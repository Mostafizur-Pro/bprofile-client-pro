import DeleteAction from "@/components/core/DeleteAction";
import EditAction from "@/components/core/EditAction";
import ViewAction from "@/components/core/ViewAction";
import CustomSpinner from "@/components/core/spinner/Spinner";
import DashboardTable from "@/components/core/table/DashboardTable";
import useGetClientData from "@/components/hooks/client/client";
import { formatDateString } from "@/utils/getCurrentDate";

const UserList = () => {
  const [clients, loading, error] = useGetClientData(
    `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/user`
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

  // console.log("admin", clients);

  const DashboardColumns = [
    {
      title: "Client ID",
      dataKey: "client_id",
      row: (clients) => <span>{clients.profile_id}</span>,
    },
    {
      title: "Name",
      dataKey: "name",
      row: (clients) => (
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] object-cover"
              src={clients.image}
              alt=""
            />
          </div>
          <div>
            <p className="font-semibold">{clients.name} </p>
            {/* <p>{clients.}</p> */}
          </div>
        </div>
      ),
    },

    {
      title: "Contact",
      dataKey: "contact",
      row: (clients) => (
        <div>
          <p>{clients.number}</p>
          <p>{clients.email}</p>
        </div>
      ),
    },
    {
      title: "date",
      dataKey: "date",
      row: (clients) => (
        <div>
          <p>{formatDateString(clients.createdAt)}</p>
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
          <EditAction admins={clients} />
          <ViewAction admins={clients} />
        </div>
      ),
    },
  ];

  // fetch data and pass from here while replacing the [...new array(5)]

  return (
    <div className="space-y-5">
      <p className="text-3xl font-semibold  text-start mt-6">
        All Users Information
      </p>
      <DashboardTable
        data={clients}
        columns={DashboardColumns}
        isLoading={false}
      />
    </div>
  );
};

export default UserList;
