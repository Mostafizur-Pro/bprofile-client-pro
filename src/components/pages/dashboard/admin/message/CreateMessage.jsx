import TextInput from "@/components/core/inputs/TextInput";
import SelectInput from "@/components/core/inputs/TextSelect";
import TextareaInput from "@/components/core/inputs/TextareaInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CreateMessage = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [showMessageId, setShowMessageId] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const formData = {
      name,
      role,
      number,
      admin_email : email,
      password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/admin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Request successful
        // eslint-disable-next-line no-unused-vars
        const responseData = await response.json();
        // console.log("Registration successful:", responseData);
        navigate("/dashboard/admin-info");
        // Handle success scenario here (e.g., redirect user, show success message)
      } else {
        // Request failed
        const errorData = await response.json();
        setError(errorData.message || "Registration failed.");
        // Handle error scenario here (e.g., display error message to the user)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An unexpected error occurred.");
      // Handle unexpected errors here
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="w-[50%]">
        <p className="text-2xl font-bold py-5">Create Message</p>
        <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
          <div>
            <TextInput
              id={"subject"}
              label="Subject"
              type="text"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <TextInput
              id={"message"}
              label="Message"
              type="text"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {/* <div>
            <TextInput
              id={"showMessage"}
              label="Message"
              type="text"
              onChange={(e) => setShowMessage(e.target.value)}
            />
          </div> */}
          <SelectInput
            id="showMessage"
            options={[
              { value: "employee", label: "Employee" },
              { value: "employee_id", label: "Employee Id" },
              { value: "client", label: "Client" },
              { value: "client_id", label: "Client Id" },
              { value: "admin", label: "Admin" },
              { value: "admin_id", label: "Admin Id" },
            ]}
            label="Received"
            // placeholder="Received"
            onChange={(e) => setShowMessage(e.target.value)}
          />
          <div>
            <TextInput
              id={"showMessage_id"}
              label="Provide Id"
              type="text"
              onChange={(e) => setShowMessageId(e.target.value)}
            />
          </div>

          <div>
            <Button className="w-full" type="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMessage;
