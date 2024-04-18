// import { useQuery } from "react-query";

// const useEmployeeGetData = (url) => {
//   const {
//     data = [],
//     isLoading: loading,
//     error,
//     refetch,
//   } = useQuery("hall-room-post-data", async () => {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await response.json();
//     return data;
//   });

//   return [data?.data || [], loading, error, data?.grandTotal || 0, refetch];
// };

// export default useEmployeeGetData;

import { useQuery } from "react-query";

const useEmployeeGetData = (url, currentPage) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["employees", currentPage],
    async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return response.json();
    },
    {
      enabled: !!url, // Only fetch data when the URL is provided
    }
  );

  return [data?.data || [], isLoading, error, data?.grandTotal || 0, refetch];
};

export default useEmployeeGetData;
