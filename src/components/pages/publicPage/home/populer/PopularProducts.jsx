import tv from "@/assets/home/popularProducts/tv.jpg";
import tShirt from "@/assets/home/popularProducts/4.webp";
import shoe from "@/assets/home/popularProducts/140.webp";
import blender from "@/assets/home/popularProducts/blender.jpg";
import camera from "@/assets/home/popularProducts/camera.jpg";
import cooker from "@/assets/home/popularProducts/cooker.jpg";
import table from "@/assets/home/popularProducts/table.jpg";
import yoga from "@/assets/home/popularProducts/yoga.jpg";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine } from "react-icons/ri";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularProducts = () => {
  const [page, setPage] = useState(1); // Start from page 1
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const postPerPage = 12;

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_LOCAL_API_URL
        }/api/v1/paid_image?page=${page}&limit=${postPerPage}`
      );
      const data = await response.json();
      setLoading(false);

      setPosts(data.data);

      // console.log('paid image', data)

      if (data.data.length === 0) {
        setHasMore(false);
        return;
      }

      // setPosts((prevPosts) => [...prevPosts, ...data.data]);
    } catch (error) {
      console.error("Error fetching posts:", error);
      // setUserData("user");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const popularProducts = [
    {
      name: "Smart TV",
      image: tv,
      category: "Electronics",
      location: "Living Room",
    },
    {
      name: "Running Shoes",
      image: shoe,
      category: "Sports",
      location: "Bedroom",
    },
    {
      name: "Coffee Table",
      image: table,
      category: "Home Decor",
      location: "Living Room",
    },
    {
      name: "Digital Camera",
      image: camera,
      category: "Electronics",
      location: "Home Office",
    },
    {
      name: "Cookware Set",
      image: cooker,
      category: "Kitchen & Dining",
      location: "Kitchen",
    },

    {
      name: "Graphic T-Shirt",
      image: tShirt,
      category: "Fashion",
      location: "Closet",
    },
    {
      name: "Yoga Mat",
      image: yoga,
      category: "Sports",
      location: "Home Gym",
    },

    {
      name: "Portable Blender",
      image: blender,
      category: "Kitchen Appliances",
      location: "Kitchen",
    },
  ];

  const sliderRef = useRef(null);
  const prevArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const nextArrow = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    prevArrow: <prevArrow />,
    nextArrow: <nextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="b_profile_container">
      <div className="border mt-16">
        <div className="md:py-8 py-4">
          <div className="relative">
            <Slider
              ref={sliderRef}
              {...settings}
              className="grid grid-cols-4 gap-6 items-end bottom-0 md:px-6 px-2"
            >
              {posts.map((post, i) => (
                <div className="md:px-5 px-1" key={i}>
                  <div className=" md:py-6 text-black  skill-style">
                    <div className="">
                      <img
                        src={
                          post?.image ===
                            "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png" ||
                          post?.image ===
                            "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
                            ? post?.image
                            : `${
                                import.meta.env.VITE_LOCAL_API_URL
                              }/api/v1/images/uploads/${post?.image}`
                        }
                        className=" mx-auto md:h-80 h-48 md:w-80 w-48  rounded-[8px] border object-cover"
                        alt={post.title}
                      />
                    </div>
                    <div className="md:pt-3 pt-1.5">
                      <h3 className=" md:text-xl text-md font-semibold">
                        {post.title}
                      </h3>
                      <p className="md:text-sm text-xs">{post.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="md:text-4xl text-xl font-semibold bg-white px-6 text-center">
                Most Popular
              </h2>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <button
                onClick={prevArrow}
                className="  bg-white text-black  hover:bg-primary_blue hover:text-white md:text-lg text-xs md:py-3 py-1.5 md:px-2 px-1  flex justify-center items-center"
              >
                <RiArrowLeftDoubleFill className="inline text-2xl font-semibold m-0.5" />
              </button>
            </div>
            <div className="absolute top-1/2 md:-right-6 -right-0 transform -translate-y-1/2">
              <button
                onClick={nextArrow}
                className=" bg-white text-black  md:text-lg text-xs   md:py-3 py-1.5 md:px-2 px-1 hover:bg-primary_blue hover:text-white flex justify-center items-center"
              >
                <RiArrowRightDoubleLine className="inline text-2xl font-semibold m-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
