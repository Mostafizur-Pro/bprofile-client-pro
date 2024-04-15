import { useState } from "react";
import { Button } from "../ui/button";
import { AlertDialog, AlertDialogContent } from "../ui/alert-dialog";
import { RiEditCircleFill } from "react-icons/ri";

const EditAction = ({ admins }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: admins?.name || "",
    number: admins?.number || "",
    admin_email: admins?.admin_email || "",
    role: admins?.role || "",
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
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/admin/${
          admins?.profile_id
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
    } catch (error) {
      console.error("Error updating admin data:", error.message);
      // Handle error
    }
  };

  return (
    <div>
      <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer border-x px-2 mx-2 mt-1"
        >
          <RiEditCircleFill className="text-green-500 text-3xl" />
        </button>
        <AlertDialogContent className="py-10">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-5 gap-6">
              <div className="col-span-2">
                <img
                  className="w-full h-auto rounded-lg object-cover mt-1.5"
                  src={
                    admins?.image ===
                    "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png"
                      ? admins?.image
                      : `${
                          import.meta.env.VITE_LOCAL_API_URL
                        }/api/v1/images/uploads/${admins?.image}`
                  }
                  alt={admins?.image}
                />
              </div>
              <div className="col-span-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mb-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="mb-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                  placeholder="Number"
                />
                <input
                  type="text"
                  name="admin_email"
                  value={formData.admin_email}
                  onChange={handleInputChange}
                  className="mb-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="mb-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                  placeholder="Role"
                />
              </div>
            </div>
            <div className="flex justify-center gap-8 ">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(!open)}
              >
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EditAction;
