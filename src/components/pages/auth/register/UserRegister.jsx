import TextInput from "@/components/core/inputs/TextInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
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
      number,
      email,
      password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/user`,
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
        // const responseData = await response.json();
        navigate("/login");
        // console.log("Registration successful:", responseData);
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
      <h2 className="text-3xl px-4 ">User Signup</h2>
      <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
        <div>
          <TextInput
            id={"name"}
            label="Full Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextInput
            id={"number"}
            label="Enter Phone No "
            type="text"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <TextInput
            id={"email"}
            label="Email adress "
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
        <p className="text-gray-400 text-right text-sm underline">
          Forgot your password? (not functional)
        </p>
        <div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
      </form>
      <p className="mt-5 text-sm text-center">
        Already have an account?
        <span className="text-blue-500">
          <Link to={"/login"}>Login Here!</Link>
        </span>
      </p>
    </div>
  );
};

export default UserRegister;
