
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
