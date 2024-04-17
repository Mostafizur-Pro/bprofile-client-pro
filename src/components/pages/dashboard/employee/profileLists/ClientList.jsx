import { useAuth } from "@/components/context/AuthContext";
import EditAction from "@/components/core/EditAction";
import ViewAction from "@/components/core/ViewAction";
import CustomSpinner from "@/components/core/spinner/Spinner";
import DashboardTable from "@/components/core/table/DashboardTable";
import useGetClientData from "@/components/hooks/client/client";

import { formatDateString } from "@/utils/getCurrentDate";
import { useState } from "react";

const ClientList = () => {
  const { employeeData } = useAuth();
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  
  const queryParams = new URLSearchParams({
    page: currentPage,
    limit: itemsPerPage,
   
  });
  const apiUrl = import.meta.env.VITE_LOCAL_API_URL;
  const url = `${apiUrl}/api/v1/client?${queryParams}&searchTerm=${employeeData?.profile_id}`;

  const [clients, loading, error, grandTotal] = useGetClientData(
    url,
    currentPage
  );


  // const [clients, loading, error, grandTotal] = useGetClientData(
  //   `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/client?searchTerm=${
  //     employeeData?.profile_id
  //   }`
  // );

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

  // console.log("admin", grandTotal);

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
              // src={clients.image}
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
    // {
    //   title: "date",
    //   dataKey: "date",
    //   row: (clients) => (
    //     <div>
    //       <p>{formatDateString(clients.createdAt)}</p>
    //     </div>
    //   ),
    // },
    {
      title: "Action",
      dataKey: "action",
      row: (clients) => (
        <div className="flex items-center">
          <ViewAction admins={clients} />
          {clients?.image === 'https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png' && <><EditAction admins={clients} /></>}
          
        </div>
      ),
    },
  ];

  const totalPages = Math.ceil(grandTotal / itemsPerPage);
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePerviousData = () => {
    if (currentPage <= 1) {
      setCurrentPage(1);
    } else if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextData = () => {
    if (currentPage >= totalPages) {
      setCurrentPage(1);
    } else if (currentPage <= totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  // fetch data and pass from here while replacing the [...new array(5)]

  return (
    <div>
      {/* <div>Total Clients: {grandTotal}</div> */}
      <div className="space-y-5">
        <DashboardTable
          data={clients}
          columns={DashboardColumns}
          isLoading={false}
        />
      </div>
      {/* Pagination */}
      <div className="flex  items-center justify-center mt-10">
        <nav aria-label="Page navigation example">
          <ul className="flex flex-wrap items-center -space-x-px h-12 text-sm">
            <li>
              <button
                disabled={currentPage === 1}
                onClick={() => handlePerviousData()}
                className="disabled:opacity-40 flex items-center justify-center px-5 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} onClick={() => handlePageClick(index + 1)}>
                <button
                  className={`flex items-center justify-center px-5 h-12 leading-tight text-gray-500 ${
                    currentPage == index + 1
                      ? " bg-primary_blue text-white border-y border-primary_blue hover:bg-primary_blue"
                      : "bg-white  hover:bg-gray-100 hover:text-gray-700"
                  } border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handleNextData()}
                className="disabled:opacity-40 flex items-center justify-center px-5 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default ClientList;
