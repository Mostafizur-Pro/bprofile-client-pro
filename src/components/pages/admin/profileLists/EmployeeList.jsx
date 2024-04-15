import DeleteAction from "@/components/core/DeleteAction";
import EditAction from "@/components/core/EditAction";
import ViewAction from "@/components/core/ViewAction";
import CustomSpinner from "@/components/core/spinner/Spinner";
import DashboardTable from "@/components/core/table/DashboardTable";
import useGetData from "@/components/hooks/hallRoom/hallRoom";
import { formatDateString } from "@/utils/getCurrentDate";

const EmployeeList = () => {
  const [posts, loading, error] = useGetData(
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

  // console.log("admin", posts);

  const DashboardColumns = [
    {
      title: "Client ID",
      dataKey: "client_id",
      row: (posts) => <span>{posts.profile_id}</span>,
    },
    {
      title: "Name",
      dataKey: "name",
      row: (posts) => (
        <div className="flex items-center gap-2">
          <div>
            <img
              className="w-8 h-8 md:w-12 md:h-12 rounded-[10px] object-cover"
              src={posts.image}
              alt=""
            />
          </div>
          <div>
            <p className="font-semibold">{posts.name} </p>
            <p>{posts.division}</p>
          </div>
        </div>
      ),
    },
    // {
    //   title: "Employee ID",
    //   dataKey: "employee_id",
    //   row: () => (
    //     <div>
    //       <p className="font-bold">{posts.division}</p>
    //     </div>
    //   ),
    // },
    {
      title: "Contact",
      dataKey: "contact",
      row: (posts) => (
        <div>
          <p>{posts.number}</p>
          <p>{posts.email}</p>
        </div>
      ),
    },
    {
      title: "date",
      dataKey: "date",
      row: (posts) => (
        <div>
          <p>{formatDateString(posts.createdAt)}</p>
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
          <EditAction admins={posts} />
          <ViewAction admins={posts} />
        </div>
      ),
    },
  ];

  // fetch data and pass from here while replacing the [...new array(5)]

  return (
    <div className="space-y-5">
      <p className="text-3xl font-semibold  text-start mt-6">
        All Employee Informations
      </p>
      <DashboardTable
        data={posts}
        columns={DashboardColumns}
        isLoading={false}
      />
    </div>
  );
};

export default EmployeeList;
