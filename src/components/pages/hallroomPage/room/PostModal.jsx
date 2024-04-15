import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PostForm from "./PostForm";

const PostModal = ({ client }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-gray-200 w-full p-3 md:p-5 hover:text-blue-800 rounded-full flex items-center text-xl">
          Whats on your mind, {client.name}?
        </DialogTrigger>
        <DialogContent className="max-w-[320px] max-h-[550px] md:max-w-[530px] md:max-h-[520px] overflow-y-auto md:max-w-auto">
          <PostForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostModal;
