import { BsThreeDots } from "react-icons/bs";
import disLikeIcon from "@/assets/like/dislike.png";
import likeIcon from "@/assets/like/like.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { useAuth } from "@/components/context/AuthContext";
import { QueryClient, useMutation, useQuery } from "react-query";

import { PiShareFat } from "react-icons/pi";
import { AiOutlineMessage } from "react-icons/ai";

const PostCardsAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="dropdown" onClick={toggleDropdown}>
        <button className="dropbtn">
          <BsThreeDots className="text-2xl rotate-90" />
        </button>
        {isOpen && (
          <div className="dropdown-content p-3 text-xs rounded-[8px]">
            <button className="d_options p-3 rounded-[5px] w-full text-start ">
              Edit Post
            </button>
            <button className="d_options p-3 rounded-[5px] w-full text-start ">
              Move to trash
            </button>
            <button className="d_options p-3 rounded-[5px] w-full text-start ">
              Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Handshake = ({ post }) => {
  const queryClient = new QueryClient();
  const { clientData } = useAuth();
  // const likes = JSON.parse(post.like);
  // const [isLiked, setIsLiked] = useState(likes.includes(clientData.profile_id));
  const likes = JSON.parse(post.like) || [];
const [isLiked, setIsLiked] = useState(likes.includes(clientData?.profile_id));


  // Fetch post data using react-query
  const {
    data: postData,
    isLoading,
    refetch,
  } = useQuery(["post", post.id], async () => {
    const response = await fetch(
      `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/hall_room_post/${post.id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }
    return response.json();
  });

  // Mutation function for updating likes
  const { mutate } = useMutation(
    ({ postId, clientId, action }) => {
      return fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/hall_room_post/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId, clientId, action }),
        }
      );
    },
    {
      onSuccess: () => {
        setIsLiked((prev) => !prev);
        refetch();
        // Toggle isLiked state on success
      },
      onError: (error) => {
        console.error("Failed to update like:", error);
      },
      onSettled: () => {
        // Refetch post data after updating likes
        queryClient.invalidateQueries(["post", post.id]);
        refetch();
      },
    }
  );

  const handleLikeClick = async () => {
    const action = isLiked ? "unlike" : "like";
    mutate({ postId: post.id, clientId: clientData.profile_id, action });
    refetch();
  };

  if (isLoading) return <p>Loading...</p>;

  console.log("data", postData);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center -space-x-4">
          <div className="pr-3">
            <button onClick={handleLikeClick}>
              {isLiked ? (
                <img src={likeIcon} className="w-8 h-8" alt="Liked" />
              ) : (
                <img src={disLikeIcon} className="w-8 h-8" alt="Not Liked" />
              )}
            </button>
          </div>
          <div className="px-2">
            {postData?.data?.like && (
              <div>
                <p>
                  {JSON.parse(postData?.data?.like).length}{" "}
                  {JSON.parse(postData?.data?.like).length === 1
                    ? "like"
                    : "likes"}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="px-2 flex">
          <span className="text-3xl mr-2">
            <AiOutlineMessage />
          </span>
          <span>Comments</span>
        </div>
        <div className="px-2 flex">
          <span className="text-3xl mr-2">
            <PiShareFat />
          </span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

//default component
const PostCards = ({
  user_url,
  user_image,
  user_name,
  postData,
  // posted_time,
  title,
  address,
  post_description,
  // post_thumbnail,
  post_image,
  isNotWhite,
}) => {
  // console.log('image', user_image)

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // console.log(user_image);
  return (
    <div
      className={`${
        isNotWhite && "bg-slate-200/30"
      } bg-white shadow-sm rounded-[8px] p-3 md:p-5 space-y-5`}
    >
      {/* user info */}
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <Link to={user_url}>
            <img
              className="w-12 h-12 rounded-full"
              // src={user_image}
              src={
                user_image ===
                  "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                user_image ===
                  "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                  ? user_image
                  : `${
                      import.meta.env.VITE_LOCAL_API_URL
                    }/api/v1/images/uploads/${user_image}`
              }
              // src={`${
              //   import.meta.env.VITE_LOCAL_API_URL
              // }/api/v1/images/uploads/${user_image}`}
              alt={user_name}
            />
          </Link>
          <div className="">
            <Link
              to={user_url}
              className="font-semibold hover:text-blue-500 transition-all"
            >
              {user_name ? user_name : "Unknown User"}
            </Link>
            {/* <p className="text-slate-500">{posted_time}</p> */}
            <div className="flex items-center gap-3">
              <p className="text-slate-500 text-xs grow">
                <span>12-04-2024</span> <span>|</span>{" "}
                {/* <p>{user_image}</p> */}
                <span className="text-slate-500 text-xs">{address}</span>
              </p>{" "}
            </div>
          </div>
        </div>
        <div>
          <PostCardsAction />
        </div>
      </div>

      {/* post Info */}
      <div className="space-y-3">
        <h4 className="text-xl font-semibold md:text-2xl">{title}</h4>
        <div>
          {showFullDescription ? (
            <>
              <p>{post_description}</p>
              <button onClick={toggleDescription} className="text-blue-500">
                Show Less
              </button>
            </>
          ) : (
            <>
              <p>{post_description.slice(0, 340)}</p>
              {post_description.length > 340 && (
                <button onClick={toggleDescription} className="text-blue-500">
                  Show More
                </button>
              )}
            </>
          )}
        </div>

        <div>
          {/* <img
            className="w-full object-contain max-h-[320px] mx-auto"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_gcukvwwF5DGoXlCOzLsw9KTiX_vRtkVuPZyOvuL8g&s"
            }
            alt={title}
          /> */}
          <img
            className="w-full object-contain max-h-[320px] mx-auto"
            src={`${
              import.meta.env.VITE_LOCAL_API_URL
            }/api/v1/images/uploads/${post_image}`}
            alt={`${
              import.meta.env.VITE_LOCAL_API_URL
            }/api/v1/images/uploads/${post_image}`}
          />
        </div>

        <div className="p-3 border-t">
          <Handshake post={postData} />
        </div>
      </div>
    </div>
  );
};

export default PostCards;
