// import { useEffect } from "react";
// import { useState } from "react";

// const useGetData = (url) => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
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
//           setPosts(data.data); // Assuming the response data is an array of posts
//           setLoading(false);
//         } catch (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       };

//       fetchPosts();
//     }
//   }, [url]);

//   return [posts, loading,  error];
// };
// export default useGetData;

import { useQuery } from "react-query";

const useGetData = (url) => {
  const {
    data = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery("hall-room-post-data", async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  });

  return [data?.data || [], loading, error, refetch];
};

export default useGetData;
