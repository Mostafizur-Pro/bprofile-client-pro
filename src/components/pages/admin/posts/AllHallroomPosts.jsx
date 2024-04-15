import DeleteAction from "@/components/core/DeleteAction";
import DashboardTable from "@/components/core/table/DashboardTable";
import { formatedDate } from "@/utils/getCurrentDate";

const AllHallroomPosts = () => {
  const currentDate = new Date();
  const AllHallroomPostColumn = [
    {
      title: " Serial",
      dataKey: "serial",
      row: () => <span>serial</span>,
    },
    {
      title: "Sender",
      dataKey: "sender",
      row: () => (
        <div>
          <p>Admin</p>
        </div>
      ),
    },
    {
      title: "Subject",
      dataKey: "subject",
      row: () => (
        <div>
          <p>Welcome</p>
        </div>
      ),
    },
    {
      title: "Message",
      dataKey: "message",
      row: () => (
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            rerum fugit! Iste harum vel repudiandae iure accusantium
            exercitationem debitis repellendus.
          </p>
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
    <div >
      <div className="pb-10">
        <p className="font-semibold text-2xl">All  Hallroom Post</p>
      </div>
      <div>
        <DashboardTable
          data={[...new Array(5)]}
          columns={AllHallroomPostColumn}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default AllHallroomPosts;
