import lineSVG from "@/assets/line.svg";
import { Dropdown, Modal } from "flowbite-react";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import CustomSpinner from "@/components/core/spinner/Spinner";
import useGetClientData from "@/components/hooks/client/client";
import MyLocation from "@/components/hooks/location/location";
import MyCategory from "@/components/hooks/category/category";
import Client from "../ourClient/Client";

const OurEmployee = () => {
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

  // const [clients, setClients] = useState([]);

  const [clients, loading, error] = useGetClientData(
    `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/employee?searchTerm=${
      selectedSubcategory || selectedCategory
    }${
      roadNumber ||
      selectedArea ||
      selectedWard ||
      selectedThana ||
      selectedDistrict ||
      selectedDivision
    }`
  );

  console.log(selectedDistrict);

  if (loading) {
    return (
      <div>
        <CustomSpinner />
      </div>
    );
  }

  console.log(selectedCategory);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("client", clients);

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
            Our Employee&#39; List
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
                <p to={"/lo"}>Location</p>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setOpenCategoryModal(true)}
                className="w-11/12 mx-auto my-1 rounded-[8px]"
              >
                <p to={"/lo"}>Category</p>
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
    </section>
  );
};

export default OurEmployee;
