// import { useEffect } from "react";
// import { useState } from "react";

// const useGetPaidImageData = (url) => {
//   const [paidImagePosts, setPaidImagePosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (url) {
//       const fetchPosts = async () => {
//         try {
//           const response = await fetch(url);
//           if (!response.ok) {
//             throw new Error("Failed to fetch data");
//           }
//           const data = await response.json();
//           setPaidImagePosts(data.data); // Assuming the response data is an array of posts
//           setLoading(false);
//         } catch (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       };

//       fetchPosts();
//     }
//   }, [url]);

//   return [paidImagePosts, loading, error];
// };
// export default useGetPaidImageData;

import { useQuery } from "react-query";

const useGetPaidImageData = (url) => {
  const {
    data = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery("paidImageData", async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  });

  return [data?.data || [], loading, error, refetch];
};

export default useGetPaidImageData;
