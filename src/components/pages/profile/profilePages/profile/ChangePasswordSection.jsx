import TextInput from "@/components/core/inputs/TextInput";
import { Button } from "@/components/ui/button";

const ChangePasswordSection = () => {
  return (
    <div className="flex pb-10 justify-center">
      <div className="space-y-5  w-full md:w-[50%]">
        <p className="font-bold text-xl  ">Change Password</p>
        <form className="space-y-3 w-full ">
          <div>
            <TextInput
              className="w-full"
              type="password"
              id={"currentPass"}
              name="currentPass"
              label={"Current Password"}
            />
          </div>
          <div>
            <TextInput
              className="w-full"
              type="password"
              id={"newPass"}
              name="newPass"
              label={"New Password"}
            />
          </div>
          <div>
            <TextInput
              className="w-full"
              type="password"
              id={"confirmNewPass"}
              name="confirmNewPass"
              label={"Confirm New Password"}
            />
          </div>
          <div>
            <Button className="w-full">Save Password</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordSection;
