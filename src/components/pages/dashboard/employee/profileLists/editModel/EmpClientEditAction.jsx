import { useState } from "react";
import { Button } from "../../../../../ui/button";
import { AlertDialog, AlertDialogContent } from "../../../../../ui/alert-dialog";
import { RiEditCircleFill } from "react-icons/ri";
import { toast } from "../../../../../ui/use-toast";
import { useQueryClient } from "react-query";

const EmpClientEditAction = ({ admins }) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    image: admins?.image || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const queryClient = useQueryClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataWithFile = new FormData();
    formDataWithFile.append("image", e.target.image.files[0]);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/client/${
          admins?.profile_id
        }`,
        {
          method: "PUT",
          body: formDataWithFile,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update admin data");
      }
      queryClient.invalidateQueries("admins");
      setOpen(!open);

      toast({
        description: "Admin data updated successfully!",
      });
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
                    formData?.image ===
                    "https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png"
                      ? admins?.image
                      : admins?.image ===
                        "https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
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
                  type="file"
                  id={"image"}
                  name="image"
                  // value={formData.image}
                  onChange={handleInputChange}
                  className="mb-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                  placeholder="image"
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

export default EmpClientEditAction;
