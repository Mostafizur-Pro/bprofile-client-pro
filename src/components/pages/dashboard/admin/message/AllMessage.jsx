import DeleteAction from "@/components/core/DeleteAction";
import CustomSpinner from "@/components/core/spinner/Spinner";
import DashboardTable from "@/components/core/table/DashboardTable";
import useGetMessageData from "@/components/hooks/admin/useMessage";

const AllMessage = () => {
  const [messages, loading, error] = useGetMessageData(
    `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/message`
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

  // console.log("message", messages);

  const AllMessageColumn = [
    {
      title: " Serial",
      dataKey: "serial",
      row: (messages) => <span>{messages?.id}</span>,
    },
    {
      title: "Sender",
      dataKey: "sender",
      row: (messages) => (
        <div>
          <p>{messages?.admin_name}</p>
          <p>{messages?.admin_email}</p>
        </div>
      ),
    },
    {
      title: "Subject",
      dataKey: "subject",
      row: (messages) => (
        <div>
          <p>{messages?.subject}</p>
        </div>
      ),
    },
    {
      title: "Message",
      dataKey: "message",
      row: (messages) => (
        <div>
          <p>{messages?.message}</p>
        </div>
      ),
    },
    // {
    //   title: "Contact",
    //   dataKey: "contact",
    //   row: (messages) => (
    //     <div>
    //       <p>phone no</p>
    //       <p>Email@email.com</p>
    //     </div>
    //   ),
    // },
    // {
    //   title: "date",
    //   dataKey: "date",
    //   row: (messages) => (
    //     <div>
    //       <p>{messages.id}</p>
    //     </div>
    //   ),
    // },
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
    <div>
      <div className="pb-10">
        <p className="font-semibold text-2xl">All Messages</p>
      </div>
      <div>
        <DashboardTable
          data={messages}
          columns={AllMessageColumn}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default AllMessage;
