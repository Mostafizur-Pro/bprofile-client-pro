import CustomSpinner from "../spinner/Spinner";

const DashboardTable = ({ columns, data, isLoading }) => {
  const generateRandomBlueShade = () => {
    const blueValue = Math.floor(Math.random() * 106) + 150;
    return `rgba(0, 0, ${blueValue}, 0.8)`;
  };
  return (
    <div>
      <div className=" rounded-[20px]  ">
        <div className="w-full  lg:min-h-[200px]">
          <table className="w-full text-left">
            <thead className=" z-10 top-0 w-full h-fit">
              <tr className="w-96">
                {columns.map((column, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="py-3 px-2 text-white"
                    style={{ backgroundColor: generateRandomBlueShade() }}
                  >
                    {column.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="h-1/2 w-full ">
              {!isLoading &&
                data &&
                data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b-[0.5px]  border ">
                    {columns.map((column, colIndex) => (
                      <td key={colIndex} className="py-3 px-2 max-w-[200px]">
                        {column.row(row)}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
          {isLoading && (
            <div className="flex py-5 w-full justify-center items-center">
              <CustomSpinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;

// how to use

// the data , array of object
// const DummyData = [
//     {
//       name: "sabbir",
//       email: "sabbir@skdjjk.com",
//     },
//   ];

// need to define the columns
// const DashboardColumns = [
//   {
//     title: "Name",
//     dataKey: "name",
//     row: (data) => (
//       <div className="flex items-center gap-2 max-w-[200px]">
//         <span>{data?.name}</span>
//       </div>
//     ),
//   },
//   {
//     title: "Contact Info",
//     dataKey: "email",
//     row: () => <div className="max-w-[250px]">hEllo</div>,
//   },
// ];

// component calling

// <DashboardTable
// data={DummyData}
// columns={DashboardColumns}
// isLoading={false}
// />
