import { useState, useCallback } from "react";
import { toast } from "@/components/ui/use-toast";
import { AiFillWarning } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { Button } from "../ui/button";
import { AlertDialog, AlertDialogContent } from "../ui/alert-dialog";

const DeleteAction = ({ handleDeleteSubmit, isLoading }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = useCallback(async () => {
    try {
      await handleDeleteSubmit();
      toast({
        description: `Deleted Successfully!`,
      });
      setOpen(!open);
    } catch (err) {
      for (let key of err.errors) {
        toast({
          description: `${key?.attr}- ${key?.detail}`,
        });
      }
    }
  }, [handleDeleteSubmit, open]);

  return (
    <div>
      <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
        <div onClick={() => setOpen(!open)} className="cursor-pointer">
          <TiDelete className="text-red-500 text-4xl" />
        </div>
        <AlertDialogContent className="py-10">
          <div>
            <div className="flex justify-center pb-3">
              <p className="">
                <AiFillWarning className="text-red-500 text-7xl" />
              </p>
            </div>
            <h3 className="text-2xl font-semibold  text-center">
              Confirm Delete
            </h3>
            <p className=" text-center py-2">
              Are you sure you want to <br /> delete this file?
            </p>
          </div>
          <div className="flex justify-center gap-8 ">
            <Button variant="outline" onClick={() => setOpen(!open)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isLoading}
            >
              Delete
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteAction;
