import lineSVG from "@/assets/line.svg";
import { Dropdown, Modal } from "flowbite-react";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import Client from "./Client";
import CustomSpinner from "@/components/core/spinner/Spinner";
import useGetClientData from "@/components/hooks/client/client";
import MyLocation from "@/components/hooks/location/location";
import MyCategory from "@/components/hooks/category/category";

const OurClient = () => {
  const [openSearchBar, setOpenSearchBer] = useState(false);
  // modal
  const [openLocationModal, setOpenLocationModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  // location
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedThana, setSelectedThana] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [roadNumber, setRoadNumber] = useState("");
  // Category
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  // const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  // Effect to update data when currentPage changes
  // useEffect(() => {
  //   displayData();
  // }, [currentPage]);

  // const [clients, setClients] = useState([]);

  const apiUrl = import.meta.env.VITE_LOCAL_API_URL;

  const searchQuery = selectedSubcategory || selectedCategory;
  const queryParams = new URLSearchParams({
    page: currentPage,
    limit: itemsPerPage,
    searchTerm: searchQuery,
    ...{
      roadNumber,
      selectedArea,
      selectedWard,
      selectedThana,
      selectedDistrict,
      selectedDivision,
    },
  });

  const url = `${apiUrl}/api/v1/client?${queryParams}`;

  const [clients, loading, error, grandTotal] = useGetClientData(
    url,
    currentPage
  );

  console.log(loading);

  if (loading) {
    return (
      <div>
        <CustomSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(grandTotal / itemsPerPage);

  // Function to handle pagination click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePerviousData = () => {
    if (currentPage <= 1) {
      setCurrentPage(1);
    } else if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextData = () => {
    if (currentPage >= totalPages) {
      setCurrentPage(1);
    } else if (currentPage <= totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // console.log("client", clients);

  return (
    <section className="b_profile_container  py-40 relative">
      {/* Location modal  */}
      <Modal
        className="rounded-[8px]"
        dismissible
        show={openLocationModal}
        onClose={() => setOpenLocationModal(false)}
      >
        <Modal.Body className="rounded-[8px]">
          <div className="p-10">
            <div className="pb-6">
              <h2 className="text-4xl text-center">Search By Location</h2>
            </div>
            <div className="">
              <MyLocation
                selectedDivision={selectedDivision}
                selectedDistrict={selectedDistrict}
                selectedThana={selectedThana}
                selectedWard={selectedWard}
                selectedArea={selectedArea}
                roadNumber={roadNumber}
                setSelectedDivision={setSelectedDivision}
                setSelectedDistrict={setSelectedDistrict}
                setSelectedThana={setSelectedThana}
                setSelectedWard={setSelectedWard}
                setSelectedArea={setSelectedArea}
                setRoadNumber={setRoadNumber}
              />
            </div>
            <div className="">
              <button
                className="w-full py-6 bg-primary_blue text-white rounded-lg"
                onClick={() => setOpenLocationModal(false)}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Category modal */}
      <Modal
        className="rounded-[8px]"
        dismissible
        show={openCategoryModal}
        onClose={() => setOpenCategoryModal(false)}
      >
        <Modal.Body className="rounded-[8px]">
          <div className="p-10">
            <div className="pb-6">
              <h2 className="text-4xl text-center">Search By Category</h2>
            </div>
            <div>
              <MyCategory
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedSubcategory={selectedSubcategory}
                setSelectedSubcategory={setSelectedSubcategory}
              />
              <div className="">
                <button
                  className="w-full py-6 bg-primary_blue text-white rounded-lg"
                  onClick={() => setOpenCategoryModal(false)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* search field  */}
      {openSearchBar && (
        <div className="w-screen h-screen absolute top-0 left-0 z-40 overflow-hidden">
          <div className="bg-white h-5/12 overflow-hidden">
            <div className="py-20 flex items-end justify-center gap-3 w-7/12 mx-auto">
              <div className="grow">
                <label htmlFor="search" className=" text-sm ">
                  Search{" "}
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="py-2.5 w-full mt-2 rounded-full placeholder:text-sm"
                  placeholder="Type here..."
                />
              </div>
              <button
                onClick={() => setOpenSearchBer(!openSearchBar)}
                className=" text-xl flex items-center justify-center py-0.5 rounded-full -mb-1 "
              >
                <div className=" px-3.5 py-3.5 rounded-full bg-primary_blue/10 ">
                  <LuSearch />
                </div>
              </button>
            </div>
          </div>
          <button
            onClick={() => setOpenSearchBer(false)}
            className="bg-black/25 h-full w-full "
          ></button>
        </div>
      )}
      <div className="md:flex items-center justify-between">
        {/* title  */}
        <div className="">
          <h2 className="lg:text-6xl md:text-5xl text-4xl font-semibold ">
            Our Clients&#39; List
          </h2>
          <img className="w-96 h-10 object-cover" src={lineSVG} alt="" />
        </div>
        {/* search and sort options  */}
        <div className="flex items-center gap-4 mb-6 rounded-lg">
          <div className=" px-4 py-3 rounded-[8px] bg-primary_blue/10 ">
            <button
              onClick={() => setOpenSearchBer(!openSearchBar)}
              className=" text-xl flex items-center rounded-[8px] justify-center py-0.5"
            >
              <LuSearch />
            </button>
          </div>
          <div
            className="
               px-4 py-3 rounded-[8px] bg-primary_blue/10 "
          >
            <Dropdown
              className="bg-white w-[180px] rounded-[8px] mx-4 mt-1"
              inline
              label={
                <div className="flex items-center">
                  <div>
                    <h2 className="font-">Sort By</h2>
                  </div>
                </div>
              }
            >
              <Dropdown.Item
                onClick={() => setOpenLocationModal(true)}
                className="w-11/12 mx-auto my-1 rounded-[8px]"
              >
                <p>Location</p>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setOpenCategoryModal(true)}
                className="w-11/12 mx-auto my-1 rounded-[8px]"
              >
                <p>Category</p>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 mt-10">
        {clients.map((client, idx) => (
          <Client client={client} key={idx} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex  items-center justify-center mt-10">
        <nav aria-label="Page navigation example">
          <ul className="flex flex-wrap items-center -space-x-px h-12 text-sm">
            <li>
              <button
                disabled={currentPage === 1}
                onClick={() => handlePerviousData()}
                className="disabled:opacity-40 flex items-center justify-center px-5 h-12 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} onClick={() => handlePageClick(index + 1)}>
                <button
                  className={`flex items-center justify-center px-5 h-12 leading-tight text-gray-500 ${
                    currentPage == index + 1
                      ? " bg-primary_blue text-white border-y border-primary_blue hover:bg-primary_blue"
                      : "bg-white  hover:bg-gray-100 hover:text-gray-700"
                  } border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                disabled={currentPage === totalPages}
                onClick={() => handleNextData()}
                className="disabled:opacity-40 flex items-center justify-center px-5 h-12 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default OurClient;
