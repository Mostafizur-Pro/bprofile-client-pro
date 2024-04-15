import TextInput from "@/components/core/inputs/TextInput";
import SelectInput from "@/components/core/inputs/TextSelect";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

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
      email,
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
        navigate("/admin");
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
    <div className="bg-white p-5 max-w-md mx-auto rounded shadow-2xl border w-full">
      <h2 className="text-3xl px-4 ">Admin Sign up</h2>
      <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
        <div>
          <TextInput
            id={"name"}
            label="Enter Full Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <SelectInput
          id="role"
          options={[
            { value: "SUPPER_ADMIN", label: "Super Admin" },
            { value: "SUB_ADMIN", label: "Sub Admin" },
            { value: "ADMIN", label: "Admin" },
            { value: "EDITOR", label: "Editor" },
            { value: "ACCOUNT", label: "Account" },
          ]}
          label="Select Role"
          placeholder="Select Role"
          onChange={(e) => setRole(e.target.value)}
        />

        <div>
          <TextInput
            id={"number"}
            label={"Phone (whatsapp)"}
            type="text"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <TextInput
            id={"email"}
            label={"Enter Email"}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between border border-slate-500 rounded h-[44px]  focus:outline-none gap-2">
          <div className="w-full">
            <TextInput
              id={"password"}
              className="w-full border-none"
              label="Password"
              type={`${showPass ? "text" : "password"}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className={`${showPass && "text-green-500"}`}
            onClick={toggleShowPass}
          >
            <FaEyeSlash className="mr-3" />
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <Button className="w-full" type="submit">
            Register
          </Button>
        </div>
      </form>
      {/* <p className="mt-5 text-sm text-center">
        Already have an account?
        <span className="text-blue-500">
          <Link to={"/admin"}>Login Here!</Link>
        </span>
      </p> */}
    </div>
  );
};

const AdminRegister = () => {
  return (
    <div className="py-[60px] bg-blue-50 md:py-20 xl:py-28  flex items-center justify-center w-full ">
      <div className="flex flex-col md:flex-row b_profile_container items-center justify-center gap-16 md:w-[70%]">
        {/*space-x-5 lg:space-x-0 */}
        <div className="w-full lg:flex items-center justify-center ">
          {/* form */}
          <div className="w-full lg:w-[350px] mt-20 lg:mt-10 relative">
            <Admin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
