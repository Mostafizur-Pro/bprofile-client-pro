import PostCards from "@/components/core/cards/PostCards";
import PostModal from "./PostModal";

import useTitle from "@/components/hooks/title/title";
import { useAuth } from "@/components/context/AuthContext";
import { formatDateString } from "@/utils/getCurrentDate";
import CustomSpinner from "@/components/core/spinner/Spinner";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostModal1 from "./PostModal1";

const Room = () => {
  useTitle("Hall Room");
  const { clientData, userData, adminData } = useAuth();

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // Start from page 1
  const postPerPage = 10;

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_LOCAL_API_URL
        }/api/v1/hall_room_post?page=${page}&limit=${postPerPage}`
      );
      const data = await response.json();
      setLoading(false);

      if (data.data.length === 0) {
        setHasMore(false);
        return;
      }

      setPosts((prevPosts) => [...prevPosts, ...data.data]);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setUserData("user");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]); // Fetch posts whenever the page changes

  // console.log("post", posts);

  // const [clients] = useGetClientData(
  //   `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/client/all`
  // );

  if (loading && page === 1) {
    return <CustomSpinner />;
  }
  // console.log("client", clients);

  return (
    <div className="space-y-5 pb-10">
      <div>
        <h3 className="text-xl font-bold text-blue-950 lg:text-center">
          Welcome to Business Profile Hall room
        </h3>
      </div>
      {/* Post */}
      {adminData && (
        <div className=" p-3 rounded-[6px] flex gap-4">
          <div className="hidden md:block">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={
                adminData?.image ===
                "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png"
                  ? adminData?.image
                  : `${
                      import.meta.env.VITE_LOCAL_API_URL
                    }/api/v1/images/uploads/${adminData?.image}`
              }
              alt=""
            />
          </div>
          <div className="w-full ">
            {adminData && <PostModal1 admin={adminData}></PostModal1>}
          </div>
        </div>
      )}
      {clientData && (
        <div className=" p-3 rounded-[6px] flex gap-4">
          <div className="hidden md:block">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={
                clientData?.image ===
                  "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                clientData?.image ===
                  "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                  ? clientData?.image
                  : `${
                      import.meta.env.VITE_LOCAL_API_URL
                    }/api/v1/images/uploads/${clientData?.image}`
              }
              alt=""
            />
          </div>
          <div className="w-full ">
            {clientData && <PostModal client={clientData}></PostModal>}
          </div>
        </div>
      )}
      {userData && (
        <div className=" p-3 rounded-[6px] flex gap-4">
          <div className="hidden md:block">
            <img
              className="w-16 h-16 object-cover rounded-full"
              src={
                userData?.image ===
                  "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                userData?.image ===
                  "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                  ? userData?.image
                  : `${
                      import.meta.env.VITE_LOCAL_API_URL
                    }/api/v1/images/uploads/${userData?.image}`
              }
              alt=""
            />
          </div>
          <div className="w-full ">
            {userData && <PostModal1 user={userData}></PostModal1>}
          </div>
        </div>
      )}

      <InfiniteScroll
        className="overflow-hidden-scroll"
        dataLength={posts.length}
        next={() => setPage(page + 1)} // Increase the page number
        hasMore={hasMore}
        loader={<CustomSpinner />}
        scrollThreshold={0.9}
      >
        <div className="space-y-5 overflow-y-hidden">
          {posts.map((post) => (
            <div key={post.id}>
              <PostCards
                user_url={`/profile/${post.client?.id}`}
                posted_time={formatDateString(post.createdAt)}
                user_name={post?.client?.name}
                user_image={post?.client?.image}
                address={`${post.road}, ${post.area}, ${post.ward}, ${post.thana}, ${post.district}`}
                title={post.title}
                post_description={post.post}
                post_thumbnail={post?.image}
                post_image={post?.image}
                postData = {post}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Room;
