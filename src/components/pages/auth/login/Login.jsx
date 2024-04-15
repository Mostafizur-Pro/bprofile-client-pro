import { UserContext } from "@/components/auth/UserProvider";
import { useAuth } from "@/components/context/AuthContext";
import TextInput from "@/components/core/inputs/TextInput";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login } = useAuth();
  const { signInWithGoogle, setLoading } = useContext(UserContext);
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  const [googleButtonLoading, setGoogleButtonLoading] = useState(false);
  // const from = location.state?.from?.pathname || "/";

  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithGoogleError, setSignInWithGoogleError] = useState("");

  // console.log("email", password, email);

  const signInWithGoogleAccount = () => {
    setGoogleButtonLoading(true);
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        setGoogleButtonLoading(false);
        setLoading(false);
        const userInfo = { email: result.user.email };
        console.log(userInfo);
      })
      .catch((err) => {
        setSignInWithGoogleError(
          err.message?.split("(")[1]?.split("-").join(" ")
        );
        setGoogleButtonLoading(false);
        setLoading(false);
        // console.log(signInWithGoogleError);

        // console.log(" Sign In fail");
      });
  };
  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/login`,
        { email, password }
      );

      const {
        accessToken: token,
        users: userData,
        clients: clientData,
        employees: employeeData,
      } = response.data;

      console.log("response", response.data);

      if (userData) {
        // Regular user login
        login(token, userData);
        navigate("/room"); // Redirect to the appropriate page for the user
      } else if (clientData) {
        // Client login
        login(token, null, clientData);
        navigate("/room"); // Redirect to the appropriate page for the client
      } else if (employeeData) {
        // Employee login
        login(token, null, null, null, employeeData);
        console.log("emp", employeeData);
        navigate("/room"); // Redirect to the appropriate page for the employee
      } else {
        // Handle unexpected response
        setError("Invalid login response");
      }
    } catch (error) {
      console.error(error.response.data);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="py-[60px] bg-blue-50 md:py-20 xl:py-28  flex items-center justify-center w-full md:min-h-screen">
      <div className="flex flex-col md:flex-row b_profile_container items-center justify-center gap-10 md:w-[70%]">
        <div className="space-y-3 w-full md:text-left text-center">
          <h3 className="text-2xl font-bold">Make Business Friend </h3>
          <p>
            Friend Finder is a social network template that can be used to
            connect people. The template offers Landing pages, News Feed,
            Image/Video Feed, Chat Box, Timeline and lot more.
          </p>
        </div>
        {/* form */}
        <div className="bg-white p-5 max-w-md mx-auto rounded shadow-2xl border w-full">
          <h2 className="text-4xl px-4 ">Log In</h2>
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
              <Link to={"/register"}>Register Here! </Link>
            </span>
          </p>

          <div className="mt-10">
            <button
              onClick={signInWithGoogleAccount}
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 border border-primaryColor  rounded-[8px] text-dark"
            >
              {googleButtonLoading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-green-400"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  <FcGoogle className="text-2xl"></FcGoogle>
                  <span>Sign in with Google</span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
