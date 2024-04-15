// import { useEffect } from "react";
// import { useState } from "react";

// const useGetClientData = (url) => {
//   const [clients, setClients] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [grandTotal, setGrandTotal] = useState(0);
//   const [error, setError] = useState(null);

//   //   console.log("data", posts);
//   useEffect(() => {
//     if (url) {
//       const fetchPosts = async () => {
//         try {
//           const response = await fetch(url);
//           if (!response.ok) {
//             throw new Error("Failed to fetch data");
//           }
//           const data = await response.json();
//           setClients(data.data); // Assuming the response data is an array of posts
//           setLoading(false);
//           setGrandTotal(data?.grandTotal);
//         } catch (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       };

//       fetchPosts();
//     }
//   }, [url]);

//   return [clients, loading, error, grandTotal];
// };
// export default useGetClientData;
import { useQuery } from "react-query";

const useGetClientData = (url, currentPage) => {
  const { data, isLoading, error, refetch } = useQuery(
    ["clients", currentPage],
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

export default useGetClientData;
