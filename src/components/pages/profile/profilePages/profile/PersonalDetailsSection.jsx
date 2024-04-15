import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PersonalDetailsForm from "./PersonalDetailsForm";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const PersonalDetailsSection = () => {
  const [open, setOPen] = useState(false);
  const clientData = useLoaderData();
  const [client, setClientData] = useState("");
  // console.log("pro", client.name);

  useEffect(() => {
    if (clientData) {
      setClientData(clientData.data[0]);
    }
  }, [clientData]);
  // console.log("pro", clientData.data);

  return (
    <div className="space-y-5 pb-10  flex flex-col items-center justify-center max-w-4xl ">
      <div className="pb-2 w-full flex justify-between">
        <p className="font-bold text-xl  ">Personal Information</p>
        <div>
          <Dialog open={open} onOpenChange={() => setOPen(!open)}>
            <DialogTrigger className="flex items-center gap-1">
              <FaRegEdit /> Edit
            </DialogTrigger>
            <DialogContent className="max-w-[300px]  max-h-[450px] md:max-h-[500px] xl:max-h-[650px] md:max-w-[650px] overflow-auto">
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  Update Personal Information
                </p>
              </div>
              <PersonalDetailsForm
                initial={[]}
                setOpen={setOPen}
                clientData={client}
                open={open}
                handleFormSubmit={() => undefined}
                isLoading={false}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className=" space-y-2 ">
        <div className="grid grid-cols-5 border-b">
          <p className="col-span-2 font-semibold ">Name</p>
          <span className="col-span-1">:</span>
          <p className="col-span-2">{client.name}</p>
        </div>
        <div className="grid grid-cols-5 border-b">
          <p className="col-span-2 font-semibold ">Organization Name</p>
          <span className="col-span-1">:</span>
          <p className="col-span-2">{client.organization_name}</p>
        </div>
        <div className="grid grid-cols-5 border-b">
          <p className="col-span-2 font-semibold ">Business Type</p>
          <span className="col-span-1">:</span>
          <p className="col-span-2">
            {client.subcategories}, {client.category}
          </p>
        </div>
        <div className="grid grid-cols-5 border-b">
          <p className="col-span-2 font-semibold">Address</p>
          <span className="col-span-1">:</span>
          <p className="col-span-2">
            {client.road ? `${client.road},` : ""}
            {client.area ? `${client.area},` : ""}
            {client.ward ? `${client.ward},` : ""}
            {client.thana ? `${client.thana},` : ""}
            {client.district ? `${client.district},` : ""}
            {client.division ? `${client.division}.` : ""}
          </p>
        </div>

        <div className="grid grid-cols-5 border-b">
          <p className="col-span-2 font-semibold">Phone No</p>
          <span className="col-span-1">:</span>
          <p className="col-span-2">{client.number}</p>
        </div>
        <div className="grid grid-cols-5 border-b">
          <p className="col-span-2 font-semibold">Gender</p>
          <span className="col-span-1">:</span>
          <p className="col-span-2 capitalize">{client.gender}</p>
        </div>
        <div className="grid grid-cols-5 border-b">
          <p className="col-span-2 font-semibold">Email</p>
          <span className="col-span-1">:</span>
          <p className="col-span-2">
            {" "}
            {client.email ? `${client.email}.` : "Null"}
          </p>
        </div>
        <div className="grid grid-cols-5">
          <p className="col-span-2 font-semibold">Date of Birth</p>
          <span className="col-span-1">:</span>
          <p className="col-span-2">
            {client.birthday ? `${client.birthday}.` : "Null"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsSection;
