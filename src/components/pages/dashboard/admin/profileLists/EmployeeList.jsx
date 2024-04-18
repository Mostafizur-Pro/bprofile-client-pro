import CustomSpinner from "@/components/core/spinner/Spinner";
import DashboardTable from "@/components/core/table/DashboardTable";
import useEmployeeGetData from "@/components/hooks/employee/employee";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employee, loading, error] = useEmployeeGetData(
    `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/employee`
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
      title: "Client ID",
      dataKey: "client_id",
      row: (employee) => <span>{employee.profile_id}</span>,
    },
    {
      title: "Name",
      dataKey: "name",
      row: (employee) => (
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] object-cover"
              // src={employee.image}
              src={
                employee?.image ===
                  "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                employee?.image ===
                  "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                  ? employee?.image
                  : `${
                      import.meta.env.VITE_LOCAL_API_URL
                    }/api/v1/images/uploads/${employee?.image}`
              }
              alt=""
            />
          </div>
          <div>
            <p className="font-semibold">{employee.name} </p>
            <p>{employee.division}</p>
          </div>
        </div>
      ),
    },
    // {
    //   title: "Client",
    //   dataKey: "client",
    //   row: (employee) => {
    //     const [clients, loadingClients, errorClients] = useGetClientData(
    //       `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/client?searchTerm=${
    //         employee?.profile_id
    //       }`
    //     );

    //     if (loadingClients) {
    //       return <CustomSpinner />;
    //     }

    //     if (errorClients) {
    //       return <div>Error: {errorClients.message}</div>;
    //     }

    //     return <p>Total Clients: {clients.length}</p>;
    //   },
    // },
    {
      title: "Contact",
      dataKey: "contact",
      row: (employee) => (
        <div>
          <p>{employee.emp_number}</p>
          <p>{employee.emp_email}</p>
        </div>
      ),
    },
    {
      title: "Action",
      dataKey: "action",
      row: (employee) => (
        <div className="flex items-center">
          {/* <DeleteAction
            handleDeleteSubmit={() => undefined}
            isLoading={false}
          />
          <EditAction admins={employee} /> */}
          {/* <ViewAction admins={employee} /> */}
          {/* <EmployeeClientList employee={employee} /> */}
          <Link
            rel="stylesheet"
            to={`/dashboard/employee-client-list/${employee?.profile_id}`}
          >
            <FaEye className="text-blue-500 text-3xl" />
          </Link>
        </div>
      ),
    },
  ];

  // fetch data and pass from here while replacing the [...new array(5)]

  return (
    <div className="space-y-5">
      <p className="text-3xl font-semibold  text-start mt-6">
        All Employee Information
      </p>
      <DashboardTable
        data={employee}
        columns={DashboardColumns}
        isLoading={false}
      />
    </div>
  );
};

export default EmployeeList;
