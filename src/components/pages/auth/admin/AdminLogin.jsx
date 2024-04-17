import { useAuth } from "@/components/context/AuthContext";
import TextInput from "@/components/core/inputs/TextInput";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";

  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  // console.log('email', email, password)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/admin-login`,
        { email, password }
      );

      const { accessToken: token, admin: adminData } = response.data;

      // console.log('email', adminData?.email)

      login(token, null, null, adminData); // Pass null for clientData

      navigate("/dashboard/profile");
      // navigate(from, { replace: true });
    } catch (error) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="py-[60px] bg-blue-50 md:py-20 xl:py-28  flex items-center justify-center w-full md:min-h-screen">
      <div className="flex flex-col md:flex-row b_profile_container items-center justify-center gap-10 md:w-[70%]">
        {/* form */}
        <div className="bg-white p-5 max-w-md mx-auto rounded shadow-2xl border w-full">
          <h2 className="text-4xl px-4 ">Admin Login</h2>
          <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
            <TextInput
              id={"email"}
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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

            <div></div>

            <p className="text-gray-400 text-right text-sm underline">
              Forgot your password? (not functional)
            </p>
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <Button className="w-full" type="submit">
                Login
              </Button>
            </div>
          </form>
          <p className="mt-5 text-sm text-center">
            Do not have any account?{" "}
            <span className="text-blue-500">
              <Link to={"/adminRegister"}>Register Here! </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
