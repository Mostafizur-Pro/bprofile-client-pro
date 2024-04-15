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
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularProducts = () => {
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
              {popularProducts.map((d, i) => (
                <div className="md:px-5 px-1" key={i}>
                  <div className=" md:py-6 text-black  skill-style">
                    <div className="">
                      <img
                        src={d.image}
                        className=" mx-auto md:h-80 h-48 md:w-80 w-48  rounded-[8px] border object-cover"
                        alt={d.name}
                      />
                    </div>
                    <div className="md:pt-3 pt-1.5">
                      <h3 className=" md:text-xl text-md font-semibold">
                        {d.name}
                      </h3>
                      <p className="md:text-sm text-xs">{d.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="md:text-4xl text-xl font-semibold bg-white px-6 text-center">
                Most Populer
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
