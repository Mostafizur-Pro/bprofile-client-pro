import Change_Password_form from "@/components/core/forms/Change_Password_form";
import { useEffect, useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import TextInput from "@/components/core/inputs/TextInput";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/context/AuthContext";
import { Modal } from "flowbite-react";
import SelectInput from "@/components/core/inputs/TextSelect";

// tab
const AdminProfileTab = ({ activeTab, setActiveTab }) => {
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

const Admin_Profile = () => {
  const { admin, changePassword } = useAuth();
  const [adminData, setAdminData] = useState(null);
  const [activeTab, setActiveTab] = useState("profile_details");
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  

  useEffect(() => {
    if (admin) {
      setAdminData(admin[0]);
      setFormData({
        name: admin[0]?.name || "",
        email: admin[0]?.admin_email || "",
        phone: admin[0]?.number || "",
        role: admin[0]?.role || "",
      });
    }
  }, [admin]);

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
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/admin/${
          adminData?.profile_id
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
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <TextInput
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <TextInput
                    label="Phone No"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <SelectInput
                    id="role"
                    options={[
                      { value: "SUPER_ADMIN", label: "Super Admin" },
                      { value: "SUB_ADMIN", label: "Sub Admin" },
                      { value: "ADMIN", label: "Admin" },
                      { value: "EDITOR", label: "Editor" },
                      { value: "ACCOUNT", label: "Account" },
                    ]}
                    label="Select Role"
                    placeholder="Select Role"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
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
      <div className="col-span-3 flex flex-col gap-5 items-center justify-center">
        <img
          className="w-[100px] h-[100px] md:w-[300px] md:h-[300px] object-cover"
          src={`${import.meta.env.VITE_LOCAL_API_URL}/api/v1/images/uploads/${
            adminData?.image
          }`}
          alt=""
        />
        <div className="space-y-2">
          <h3 className="text-center text-3xl font-semibold">
            {adminData?.name}
          </h3>
          <p className="flex gap-1 items-center text-xl justify-center capitalize">
            <RiAdminFill />
            <span>{adminData?.role}</span>
          </p>
        </div>
      </div>

      {/* changing Components */}
      {/* Info */}
      <div className="w-full col-span-6">
        <div>
          <AdminProfileTab setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
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
                  <span className="font-bold mx-2">{adminData?.name}</span>
                </div>
                <div>
                  Email :
                  <span className="font-bold mx-2">
                    {adminData?.admin_email}
                  </span>
                </div>
                <div>
                  Phone No :
                  <span className="font-bold mx-2">{adminData?.number}</span>
                </div>
                <div>
                  Role :
                  <span className="font-bold mx-2">{adminData?.role}</span>
                </div>
                <div>
                  ID :
                  <span className="font-bold mx-2">
                    {adminData?.profile_id}
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

export default Admin_Profile;
