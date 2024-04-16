import TextInput from "@/components/core/inputs/TextInput";
import TextareaInput from "@/components/core/inputs/TextareaInput";
import { Button } from "@/components/ui/button";

const CreateMessage = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="w-[50%]">
        <p className="text-2xl font-bold py-5">Create Message</p>
        <form className="space-y-5">
          <div>
            <TextInput id={"subject"} label={"Subject"} error={""} />
          </div>
          <div>
            <TextInput id={"recipent"} label={"Recipent"} error={""} />
          </div>
          <div>
            <TextareaInput
              className={"w-full"}
              id={"message"}
              label={"Message"}
              error={""}
            />
          </div>
          <div>
            <Button className="w-full" type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMessage;
