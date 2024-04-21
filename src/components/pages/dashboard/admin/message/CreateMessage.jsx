import { useAuth } from "@/components/context/AuthContext";
import TextInput from "@/components/core/inputs/TextInput";
import SelectInput from "@/components/core/inputs/TextSelect";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const CreateMessage = () => {
  const { adminData } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [showMessageId, setShowMessageId] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      subject,
      message,
      showMessage,
      showMessageId: showMessageId || null,
      admin_name: adminData.name || null,
      admin_email: adminData.admin_email || null,
    };

    // console.log("form", formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          // body: formData,
        }
      );

      // console.log("response", response);

      if (response.ok) {
        const responseData = await response.json();
        queryClient.invalidateQueries("admins");
        toast({
          description: "Message sent successfully!",
        });
        navigate("/dashboard/all-message");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Message sending failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An unexpected error occurred.");
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
            onChange={(e) => setShowMessage(e.target.value)}
          />
          {showMessage === "admin_id" ||
          showMessage === "employee_id" ||
          showMessage === "client_id" ? (
            <div>
              <TextInput
                id="showMessage_id"
                label="Provide Id"
                type="text"
                onChange={(e) => setShowMessageId(e.target.value)}
              />
            </div>
          ) : null}

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
