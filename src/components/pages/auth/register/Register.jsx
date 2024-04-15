import TextInput from "@/components/core/inputs/TextInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SelectInput from "@/components/core/inputs/TextSelect";
import MyLocation from "@/components/hooks/location/location";
import MyCategory from "@/components/hooks/category/category";

// client signup
const ClientRegister = () => {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedThana, setSelectedThana] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);
  const [selectedArea, setSelectedArea] = useState("");
  const [roadNumber, setRoadNumber] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

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
      organization_name: organization,
      gender,
      birthday,

      division: selectedDivision,
      district: selectedDistrict,
      thana: selectedThana,
      ward: selectedWard,
      localArea: selectedArea,
      road: roadNumber,

      category: selectedCategory,
      subcategories: selectedSubcategory,

      number,
      email,
      password,
    };
    console.log("clientReg", formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/client`,
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
        const responseData = await response.json();
        console.log(responseData);

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
      <h2 className="text-3xl px-4 ">Client Signup</h2>
      <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
        <div>
          <TextInput
            id={"name"}
            label="Enter Full Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextInput
            id={"organization_name"}
            label="Organization Name"
            type="text"
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>

        <div>
          <SelectInput
            id="gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            label="Select Gender"
            placeholder="Select Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div>
          <TextInput
            id={"birth_day"}
            label={"Date Of Birth"}
            type="Date"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>

        {/* Location */}
        <MyLocation
          selectedDivision={selectedDivision}
          selectedDistrict={selectedDistrict}
          selectedThana={selectedThana}
          selectedWard={selectedWard}
          selectedArea={selectedArea}
          roadNumber={roadNumber}
          setSelectedDivision={setSelectedDivision}
          setSelectedDistrict={setSelectedDistrict}
          setSelectedThana={setSelectedThana}
          setSelectedWard={setSelectedWard}
          setSelectedArea={setSelectedArea}
          setRoadNumber={setRoadNumber}
        />

        <MyCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSubcategory={selectedSubcategory}
          setSelectedSubcategory={setSelectedSubcategory}
        />
        {/* <div>
          <select
            className="border w-full py-2.5 border-slate-500 rounded-[6px]  focus:outline-0 bg-white"
            name="category"
            id="category"
          >
            <option selected disabled value="category">
              Category
            </option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div> */}
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
        <Dialog>
          <DialogTrigger className="border w-full py-2.5 px-2 border-slate-500 rounded-[6px] ">
            Add Social Accounts
          </DialogTrigger>
          <DialogContent className="max-w-[320px] max-h-[550px] md:max-w-[530px] md:max-h-[520px] overflow-y-auto md:max-w-auto">
            <div className="space-y-5">
              <p className="text-xl font-bold">
                Add Your Social Media Accounts
              </p>
              <div>
                <TextInput id={"fb_url"} label="Facebook URL" type="url" />
              </div>
              <div>
                <TextInput
                  id={"linkedin_url"}
                  label="Linkedin URL"
                  type="url"
                />
              </div>
              <div>
                <TextInput
                  id={"instagram_url"}
                  label="Instagram URL"
                  type="url"
                />
              </div>
              <div>
                <TextInput id={"emo"} label="Enter Emo Number" type="text" />
              </div>
              <div>
                <TextInput id={"twitter_url"} label="Twitter URL" type="url" />
              </div>
            </div>
          </DialogContent>
        </Dialog>
        {/* <div >
        </div> */}

        <p className="text-gray-400 text-right text-sm underline">
          Forgot your password?
        </p>
        <div>
          <Button className="w-full" type="submit">
            Register
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

// user signup
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
        const responseData = await response.json();
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

const Register = () => {
  const [tab, setTab] = useState("client");
  return (
    <div className="py-[60px] bg-blue-50 md:py-20 xl:py-28  flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col md:flex-row b_profile_container items-center justify-center gap-16 md:w-[70%]">
        <div className="space-y-3 w-full md:text-left text-center mt-10 md:mt-0">
          <h3 className="text-2xl font-bold">Make Business Friend </h3>
          <p>
            Friend Finder is a social network template that can be used to
            connect people. The template offers Landing pages, News Feed,
            Image/Video Feed, Chat Box, Timeline and lot more.
          </p>
        </div>
        {/*space-x-5 lg:space-x-0 */}
        <div className="w-full lg:flex items-center justify-center ">
          <div className="flex items-center justify-center  relative">
            <div className=" bg-white/50 lg:shadow-md flex gap-5 lg:-rotate-90 px-3 lg:py-5 text-center md:my-auto absolute lg:-left-28 lg:-top-[60px] top-6">
              <button
                className={`p-4 lg:p-0  md:text-2xl  ${
                  tab === "user" && "text-red-500 "
                }`}
                onClick={() => setTab("user")}
              >
                User
              </button>
              <button
                className={`p-4 lg:p-0 md:text-2xl ${
                  tab === "client" && "text-red-500 "
                }`}
                onClick={() => setTab("client")}
              >
                Client
              </button>
            </div>
          </div>
          {/* form */}
          <div className="w-full lg:w-[350px] mt-20 lg:mt-10 relative">
            <div className=" ">{tab === "user" && <UserRegister />}</div>
            <div className="">{tab === "client" && <ClientRegister />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
