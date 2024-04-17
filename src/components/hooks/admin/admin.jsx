import {  useQuery } from "react-query";


const useGetAdminData = (url) => {
  const {
    data = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery("admins", async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  });

  return [data?.data || [], loading, error, refetch];
};



export default useGetAdminData;
