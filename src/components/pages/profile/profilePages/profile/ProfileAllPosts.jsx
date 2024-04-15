
import PostCards from "@/components/core/cards/PostCards";
import useGetData from "@/components/hooks/hallRoom/hallRoom";
import PostModal from "@/components/pages/hallroomPage/room/PostModal";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProfileAllPosts = () => {
  const clientData = useLoaderData();
  

  const [client, setClientData] = useState("");
  // console.log("pro", client.name);

  useEffect(() => {
    if (clientData) {
      setClientData(clientData.data[0]);
    }
  }, [clientData]);

  // console.log("clientData", clientData.data[0].id);

  const [posts, loading, error] = useGetData(
    `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/hall_room_post?searchTerm=${
      client.id
    }`
  );

  // console.log("post", posts);
  // console.log("client", clientData.data[0]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Date & Time Formate
  const formatDateString = (dateString) => {
    const date = new Date(dateString); // Convert the string to a Date object
    const options = {
      month: "short", // Short month name (e.g., Mar)
      day: "numeric", // Day of the month (e.g., 20)
      year: "numeric", // Full year (e.g., 2024)
      hour: "numeric", // Hour (e.g., 1)
      minute: "numeric", // Minute (e.g., 15)
      hour12: true, // Use 12-hour clock (e.g., AM/PM)
    };
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="space-y-5 pb-10">
      <div>
        <h3 className="text-xl font-bold text-blue-950 lg:text-center">
          Welcome to Business Profile Hallroom
        </h3>
      </div>

      <div className=" p-3 rounded-[6px] flex gap-4">
        <div className="hidden md:block">
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={client[0]?.image}
            alt=""
          />
        </div>
        {/* Create Hall Room Post */}
        <div className="w-full ">
          {client && <PostModal client={client}></PostModal>}
        </div>
        {/* <PostForm /> */}
      </div>
      <div className="space-y-5">
        {posts.map((post) => (
          <div key={Math.random()}>
            <PostCards
              isNotWhite={true}
              user_url={`/profile/${post.client_id}`}
              user_name={client?.name}
              user_image={client?.image}
              posted_time={formatDateString(post.createdAt)}
              address={`${post.road}, ${post.area}, ${post.ward}, ${post.thana}, ${post.district}`}
              title={post.title}
              post_description={post.post}
              post_thumbnail={post.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileAllPosts;
