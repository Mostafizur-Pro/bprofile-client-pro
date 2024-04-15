import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const PostModal1 = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-gray-200 w-full p-3 md:p-5 hover:text-blue-800 rounded-full flex items-center text-xl">
          Whats on your mind?
        </DialogTrigger>
        <DialogContent className="text-xl max-w-[320px] max-h-[550px] md:max-w-[530px] md:max-h-[520px] overflow-y-auto md:max-w-auto">
          As a non-paid client, certain features may be restricted. Please
          consider upgrading your plan for full access.
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostModal1;
