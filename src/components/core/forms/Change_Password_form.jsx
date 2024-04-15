import { Button } from "@/components/ui/button";
import TextInput from "../inputs/TextInput";

const Change_Password_form = () => {
  // handle form here  and send props
  return (
    <div className="flex pb-10  justify-center">
      <div className="space-y-5  w-full md:w-[50%]">
        <p className="font-bold text-xl  text-center">Change Password</p>
        <form className="space-y-3 w-full ">
          <div>
            <TextInput
              className="w-full"
              id={"currentPass"}
              name="currentPass"
              label={"Current Password"}
            />
          </div>
          <div>
            <TextInput
              className="w-full"
              id={"newPass"}
              name="newPass"
              label={"New Password"}
            />
          </div>
          <div>
            <TextInput
              className="w-full"
              id={"confirmNewPass"}
              name="confirmNewPass"
              label={"COnfirm New Password"}
            />
          </div>
          <div>
            <Button className="w-full">Save PasswordFf</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Change_Password_form;
