import DeleteAction from "@/components/core/DeleteAction";
import DashboardTable from "@/components/core/table/DashboardTable";

const HaveAQuestion = () => {
  const DashboardColumns = [
    {
      title: "Serial",
      dataKey: "serial",
      row: () => <span>index</span>,
    },
    {
      title: "Name",
      dataKey: "name",
      row: () => (
        <div>
          <p className="font-semibold">Mizanur Rahman abid </p>
          <p>Dhaka, Bangladeh</p>
        </div>
      ),
    },
    {
      title: "Message",
      dataKey: "message",
      row: () => (
        <div>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            voluptatibus. Aut tenetur amet labore assumenda eligendi vel fugit
            consectetur laborum.
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
          <p>Joining Date</p>
        </div>
      ),
    },
    {
      title: "Action",
      dataKey: "action",
      row: () => (
        <div>
          <DeleteAction
            // src="https://placehold.co/20x20/000000/FFF"
            handleDeleteSubmit={() => undefined}
            isLoading={false}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div>
        <p className="font-semibold text-xl">Have A Question</p>
      </div>
      <div>
        <DashboardTable
          data={[...new Array(5)]}
          columns={DashboardColumns}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default HaveAQuestion;
