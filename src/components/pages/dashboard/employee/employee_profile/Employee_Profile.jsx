import Change_Password_form from "@/components/core/forms/Change_Password_form";
import { useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import TextInput from "@/components/core/inputs/TextInput";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/context/AuthContext";
import { Modal } from "flowbite-react";
import SelectInput from "@/components/core/inputs/TextSelect";

const EmployeeProfileTab = ({ activeTab, setActiveTab }) => {
  return (
    <div className=" overflow-auto tab_scroll   ">
      <div className="flex items-center justify-start w-[280px] md:w-[400px] mb-10">
        <div
          className={`whitespace-nowrap cursor-pointer text-center py-2 md:py-3 px-2   ${
            activeTab === "profile_details" &&
            "border-b-4 border-b-blue-800 text-blue-800 font-bold"
          }`}
          onClick={() => setActiveTab("profile_details")}
        >
          <p>Profile Info</p>
        </div>
        {/* <div
          className={` whitespace-nowrap cursor-pointer text-center py-2 md:py-3 px-2   ${
            activeTab === "update_details" &&
            "border-b-4 border-b-blue-800 text-blue-800 font-bold"
          }`}
          onClick={() => setActiveTab("update_details")}
        >
          <p>Update Details</p>
        </div> */}
        <div
          className={` whitespace-nowrap cursor-pointer text-center py-2 md:py-3 px-2   ${
            activeTab === "change_password" &&
            "border-b-4 border-b-blue-800 text-blue-800 font-bold"
          }`}
          onClick={() => setActiveTab("change_password")}
        >
          <p>Change Password</p>
        </div>
      </div>
    </div>
  );
};

const Employee_Profile = () => {
  const { employeeData } = useAuth();

  const [activeTab, setActiveTab] = useState("profile_details");
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/employee/${
          employeeData?.profile_id
        }`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if required
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        // Handle error response from the server
        throw new Error("Failed to update admin data");
      }

      // Handle success response from the server
      console.log("Admin data updated successfully");
      setOpenCategoryModal(false);
    } catch (error) {
      console.error("Error updating admin data:", error.message);
      // Handle error
    }
  };
  return (
    <div className="pt-16 grid grid-cols-9">
      {/* edit modal  */}
      <Modal
        className="rounded-[8px]"
        dismissible
        show={openCategoryModal}
        onClose={() => setOpenCategoryModal(false)}
      >
        <Modal.Body className="rounded-[8px]">
          <div className="p-10">
            <div className="max-w-sm mx-auto">
              <p className="text-xl md:text-2xl font-semibold mb-6">
                Basic Information
              </p>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <TextInput
                    label="Name"
                    name="name"
                    value={employeeData?.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <TextInput
                    label="Email"
                    name="email"
                    value={employeeData?.emp_email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <TextInput
                    label="Phone No"
                    name="phone"
                    value={employeeData.emp_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <SelectInput
                    id="role"
                    options={[
                      {
                        value: "Sales and Marketing Office",
                        label: "Sales and Marketing Office",
                      },
                      {
                        value: "Marketing Officer",
                        label: "Marketing Officer",
                      },
                      { value: "Sales Officer", label: "Sales Officer" },
                    ]}
                    label="Select Role"
                    placeholder={employeeData?.emp_role}
                    value={employeeData?.emp_role}
                    onChange={(e) =>
                      setFormData({ employeeData, role: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpenCategoryModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/*Not Changing Component  */}
      <div className="col-span-3 flex flex-col gap-5 items-center justify-center hidden lg:block">
        <img
          className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] object-cover"
          src={`${import.meta.env.VITE_LOCAL_API_URL}/api/v1/images/uploads/${
            employeeData?.image
          }`}
          alt=""
        />
        <div className="space-y-2">
          <h3 className="text-center text-3xl font-semibold">
            {employeeData?.name}
          </h3>
          <p className="flex gap-1 items-center text-xl justify-center capitalize">
            <RiAdminFill />
            <span>{employeeData?.emp_role}</span>
          </p>
        </div>
      </div>

      {/* changing Components */}
      {/* Info */}
      <div className="w-full col-span-6">
        <div>
          <EmployeeProfileTab
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>
        <img
          className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] object-cover block lg:hidden"
          src={`${import.meta.env.VITE_LOCAL_API_URL}/api/v1/images/uploads/${
            employeeData?.image
          }`}
          alt=""
        />
        {activeTab === "profile_details" && (
          <div className="flex-grow space-y-2 rounded-[10px]">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-xl md:text-2xl font-semibold mb-6">
                  Basic Information
                </p>
              </div>
              <div className="space-y-2">
                <div>
                  Name :
                  <span className="font-bold mx-2">{employeeData?.name}</span>
                </div>
                <div>
                  Email :
                  <span className="font-bold mx-2">
                    {employeeData?.emp_email}
                  </span>
                </div>
                <div>
                  Phone No :
                  <span className="font-bold mx-2">
                    {employeeData?.emp_number}
                  </span>
                </div>
                <div>
                  Role :
                  <span className="font-bold mx-2">
                    {employeeData?.emp_role}
                  </span>
                </div>
                <div>
                  ID :
                  <span className="font-bold mx-2">
                    {employeeData?.profile_id}
                  </span>
                </div>
              </div>
            </div>
            <div className="me-16">
              <button
                onClick={() => setOpenCategoryModal(true)}
                className="text-lg text-green-500"
              >
                Edit
              </button>
            </div>
          </div>
        )}
        {/* change password */}
        {activeTab === "change_password" && <Change_Password_form />}
      </div>
    </div>
  );
};

export default Employee_Profile;
