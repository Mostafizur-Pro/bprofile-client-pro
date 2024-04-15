import { useEffect, useState } from "react";
import Heading from "../shared/Heading";

const Packages = () => {
  // const url = "http://localhost:5173/";
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackagesData = async () => {
      try {
        const response = await fetch("packages.json");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Log fetched data
        setPackages(data);
      } catch (error) {
        console.log("Error fetching packages data", error);
      }
    };

    fetchPackagesData();
  }, []);

  console.log(packages);
  return (
    <div className="b_profile_container py-28">
      <p className="text-center pb-3">Pricing</p>
      <Heading text="Packages" align="center" />
      <div className=" grid grid-cols-3 gap-6 justify-center mt-16">
        {packages &&
          packages.length > 0 &&
          packages?.map((packageOffer) => (
            <div className="w-full  px-4" key={packageOffer.id}>
              <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-10 bg-gray-50 hover:bg-gradient-to-r from-white to-purple-400 transition duration-700 ease-in-out hover:scale-105 h-full">
                <div className="flex flex-col  h-full">
                  <div className="">
                    <span className="mb-3 block text-4xl font-bold text-purple-600">
                      {packageOffer.name}
                    </span>
                    <h2 className="mb-5 text-[42px] font-bold text-dark">
                      ৳{packageOffer.price}
                      <span className="text-base font-medium text-body-color">
                        {" "}
                        / month
                      </span>
                    </h2>
                  </div>

                  <div className="p-6 grow ">
                    <ol className="list-inside">
                      {packageOffer?.features.map((feature, index) => (
                        <li className="mb-4 flex" key={index}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="mr-3 h-5 w-5 text-purple-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="">
                    {packageOffer?.price == "600" ? (
                      <a
                        // href={url("package/package_order", packageOffer.id)}
                        className="block w-full rounded-[8px] border border-purple-600 bg-purple-600 p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                      >
                        Choose
                      </a>
                    ) : (
                      <a
                        // href={url("package/package_order", packageOffer.id)}
                        className="block w-full  rounded-[8px] border border-stroke bg-transparent p-3 text-center text-base font-medium text-purple-600 transition hover:border-purple-600 hover:bg-purple-600 hover:text-white"
                      >
                        Choose
                      </a>
                    )}
                  </div>
                </div>
                <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                    <svg
                      width="77"
                      height="172"
                      viewBox="0 0 77 172"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="86"
                        cy="86"
                        r="86"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="86"
                          y1="0"
                          x2="86"
                          y2="172"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3056D3" stopOpacity="0.09" />
                          <stop
                            offset="1"
                            stopColor="#C4C4C4"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-4 top-4 z-[-1]">
                    <svg
                      width="41"
                      height="89"
                      viewBox="0 0 41 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Your SVG paths */}
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Packages;
