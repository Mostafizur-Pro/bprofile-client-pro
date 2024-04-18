import DeleteAction from "@/components/core/DeleteAction";
import EditAction from "@/components/core/EditAction";
import CustomSpinner from "@/components/core/spinner/Spinner";
import DashboardTable from "@/components/core/table/DashboardTable";
import useGetAdminData from "@/components/hooks/admin/admin";

const AdminsInformation = () => {
  const [admins, loading, error] = useGetAdminData(
    `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/admin`
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

  const DashboardColumns = [
    {
      title: "Serial",
      dataKey: "serial",
      row: (admins) => <span>{admins?.profile_id}</span>,
    },
    {
      title: "Name",
      dataKey: "name",
      row: (admins) => (
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] object-cover"
              src={
                admins?.image ===
                "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png"
                  ? admins?.image
                  : admins?.image ===
                    "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                  ? admins?.image
                  : `${
                      import.meta.env.VITE_LOCAL_API_URL
                    }/api/v1/images/uploads/${admins?.image}`
              }
              alt={admins?.name}
            />
          </div>
          <div>
            <p className="font-semibold capitalize">{admins?.name} </p>
            <p>{admins?.role}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Contact",
      dataKey: "contact",
      row: (admins) => (
        <div>
          <p>{admins?.number}</p>
          <p>{admins?.email}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataKey: "Email",
      row: (admins) => (
        <div>
          <p>{admins?.admin_email}</p>
        </div>
      ),
    },
    {
      title: "Action",
      dataKey: "action",
      row: (admins) => (
        <div className="flex">
          <DeleteAction
            handleDeleteSubmit={admins?.profile_id}
            isLoading={false}
          />
          <EditAction admins={admins} />
          {/* <ViewAction admins={admins} /> */}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-5">
      <p className="text-3xl font-semibold  text-center">
        All Admins Information
      </p>
      <DashboardTable
        data={admins}
        columns={DashboardColumns}
        isLoading={false}
      />
    </div>
  );
};

export default AdminsInformation;
