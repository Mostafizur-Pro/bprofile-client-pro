import CustomSpinner from "@/components/core/spinner/Spinner";
import DashboardTable from "@/components/core/table/DashboardTable";
import useGetClientData from "@/components/hooks/client/client";


const UserList = () => {
  const [users, loading, error] = useGetClientData(
    `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/user`
  );

  console.log("user", users);
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
      row: (users) => <span>{users.profile_id}</span>,
    },
    {
      title: "Name",
      dataKey: "name",
      row: (users) => (
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] object-cover"
              src={users.image}
              alt=""
            />
          </div>
          <div>
            <p className="font-semibold">{users.name} </p>
            {/* <p>{clients.}</p> */}
          </div>
        </div>
      ),
    },

    {
      title: "Contact",
      dataKey: "contact",
      row: (users) => (
        <div>
          <p>{users.number}</p>
          <p>{users.email}</p>
        </div>
      ),
    },
    // {
    //   title: "date",
    //   dataKey: "date",
    //   row: (users) => (
    //     <div>
    //       <p>{formatDateString(users.createdAt)}</p>
    //     </div>
    //   ),
    // },
    // {
    //   title: "Action",
    //   dataKey: "action",
    //   row: (users) => (
    //     <div className="flex items-center">
    //       <DeleteAction
    //         handleDeleteSubmit={() => undefined}
    //         isLoading={false}
    //       />
    //       <EditAction admins={users} />
    //       <ViewAction admins={users} />
    //     </div>
    //   ),
    // },
  ];

  // fetch data and pass from here while replacing the [...new array(5)]

  return (
    <div className="space-y-5">
      <p className="text-3xl font-semibold  text-start mt-6">
        All Users Information
      </p>
      <DashboardTable
        data={users}
        columns={DashboardColumns}
        isLoading={false}
      />
    </div>
  );
};

export default UserList;
