import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Button } from "../ui/button";
import { AlertDialog, AlertDialogContent } from "../ui/alert-dialog";

const ViewAction = ({ admins }) => {
  const [open, setOpen] = useState(false);
  // console.log('cli', admins);

  return (
    <div>
      <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
        <div onClick={() => setOpen(!open)} className="cursor-pointer ">
          <FaEye className="text-blue-500 text-3xl" />
        </div>
        <AlertDialogContent className="py-10">
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
              <h2 className=" mb-5 font-semibold  text-center">
                <span className="text-2xl">{admins?.name}</span> <br />
                <span className="text-sm">
                  Profile Id: {admins?.profile_id}
                </span>{" "}
                <br />
              </h2>
              <h2 className="text-sm">
                Number: <span className="font-semibold">{admins?.number}</span>
              </h2>
              <h2 className="text-sm">
                Email:{" "}
                <span className="font-semibold">{admins?.admin_email}</span>
              </h2>
              <h2 className="text-sm">
                Role:{" "}
                <span className="font-semibold capitalize">{admins?.role}</span>
              </h2>
            </div>
          </div>
          <div className="flex justify-center gap-8 ">
            <Button variant="outline" onClick={() => setOpen(!open)}>
              Cancel
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ViewAction;
