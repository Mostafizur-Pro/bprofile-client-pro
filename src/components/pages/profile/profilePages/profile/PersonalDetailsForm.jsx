import TextInput from "@/components/core/inputs/TextInput";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PersonalDetailsForm = ({
  handleFormSubmit,
  isLoading,
  initial,
  setOpen,
  open,
  clientData,
}) => {
  // console.log("clientData", clientData);
  return (
    <div>
      <form className="space-y-2">
        <div>
          <TextInput
            type="file"
            label={""}
            id={"user_image"}
            name="user_image"
          />
        </div>
        <div>
          <TextInput
            type="text"
            label={"Name"}
            id={"name"}
            name="name"
            value={clientData.name}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full">
            <TextInput
              type="text"
              label={"organization_name"}
              id={"organization_name"}
              name="organization_name"
              value={clientData.organization_name}
            />
          </div>
          <div className="w-full ca">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={clientData.gender} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                {/* <SelectItem value="others">Others</SelectItem> */}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <TextInput label={"Address"} id={"address"} name="address" />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full">
            <TextInput
              label={"Phone No"}
              id={"phone"}
              name="phone"
              value={clientData.number}
            />
          </div>
          <div className="w-full">
            {clientData.mail ? (
              <TextInput
                label={"Email"}
                id={"email"}
                name="email"
                value={clientData.gmail}
              />
            ) : (
              <TextInput label={"Enter Your email"} id={"email"} name="email" />
            )}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full">
            {clientData.birthday ? (
              <TextInput
                label={"Birthday"}
                id={"email"}
                name="email"
                value={clientData.birthday}
              />
            ) : (
              <TextInput
                type="date"
                label={"Date Of Birth"}
                id={"dob"}
                name="dob"
              />
            )}
          </div>
          <div className="w-full">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={clientData.gender} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/*  */}

        <div>
          <TextInput label={"Facebook URL"} id={"fbb_url"} name="fb_url" />
        </div>
        <div>
          <TextInput
            label={"Instagram URL"}
            id={"insta_url"}
            name="insta_url"
          />
        </div>
        <div>
          <TextInput
            label={"Likedin URL"}
            id={"linkedin_url"}
            name="linkedin_url"
          />
        </div>
        <div className="flex items-start justify-end gap-5">
          <Button
            onClick={() => setOpen(!open)}
            type="button"
            variant="outline"
          >
            Cancel
          </Button>
          <Button disabled={isLoading} type="submit">
            {isLoading ? "Saving" : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
