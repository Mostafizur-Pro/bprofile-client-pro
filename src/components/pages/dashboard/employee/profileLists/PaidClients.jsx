import { useAuth } from "@/components/context/AuthContext";
import CustomSpinner from "@/components/core/spinner/Spinner";
import DashboardTable from "@/components/core/table/DashboardTable";
import useGetClientData from "@/components/hooks/client/client";

const PaidClientList = () => {
  const { employeeData } = useAuth();
  const [clients, loading, error] = useGetClientData(
    `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/client?searchTerm=${
      employeeData?.profile_id
    }`
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
      row: (clients) => <span>{clients?.profile_id}</span>,
    },
    {
      title: "Name",
      dataKey: "name",
      row: (clients) => (
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] object-cover"
              src={
                clients?.image ===
                  "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                clients?.image ===
                  "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                  ? clients?.image
                  : `${
                      import.meta.env.VITE_LOCAL_API_URL
                    }/api/v1/images/uploads/${clients?.image}`
              }
              alt=""
            />
          </div>
          <div>
            <p className="font-semibold">{clients?.name} </p>
            <p>
              {clients?.division},{clients?.district}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Employee ID",
      dataKey: "employee_id",
      row: (clients) => (
        <div>
          <p className="font-bold">{clients?.emp_id}</p>
        </div>
      ),
    },
    {
      title: "Contact",
      dataKey: "contact",
      row: (clients) => (
        <div>
          <p>{clients?.number}</p>
          <p>{clients?.email}</p>
        </div>
      ),
    },
  ];

  // fetch data and pass from here while replacing the [...new array(5)]

  return (
    <div className="space-y-5">
      <DashboardTable
        data={clients}
        columns={DashboardColumns}
        isLoading={false}
      />
    </div>
  );
};
export default PaidClientList;
