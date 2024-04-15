import TextInput from "@/components/core/inputs/TextInput";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SelectInput from "@/components/core/inputs/TextSelect";
import { useAuth } from "@/components/context/AuthContext";

const EmployeeRegister = () => {
  const navigate = useNavigate();

  const { admin } = useAuth();
  const [adminData, setAdminData] = useState("");
  useEffect(() => {
    if (admin) {
      setAdminData(admin[0]);
    }
  }, [admin]);

  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [role, setRole] = useState("");
  const [number, setNumber] = useState("");
  const [nid, setNid] = useState("");
  const [address, setAddress] = useState("");
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
      birthday,
      emp_number: number,
      emp_nid: nid,
      emp_address: address,
      emp_email: email,
      password,
      emp_role: role,
      supperAdmin_id: adminData?.profile_id,
      supperAdmin_name: adminData?.name,
    };
    // console.log("Emp_Reg", formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/employee`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        if (responseData) {
          navigate("/dashboard/employee-list");
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An unexpected error occurred.");
      // Handle unexpected errors here
    }
  };

  return (
    <div className="bg-white py-16 px-10 max-w-lg mx-auto rounded shadow-2xl border w-full my-10">
      <h2 className="text-3xl px-4 ">Employee Register</h2>
      <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
        <div>
          <TextInput
            id={"name"}
            className={"p-3.5"}
            label="Enter Full Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <TextInput
            className={"p-3.5"}
            id={"birthday"}
            label={"Date Of Birth"}
            type="Date"
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>

        <SelectInput
          id="gender"
          options={[
            {
              value: "Sales and Marketing Office",
              label: "Sales and Marketing Office",
            },
            { value: "Marketing Officer", label: "Marketing Officer" },
            { value: "Sales Officer", label: "Sales Officer" },
          ]}
          label="Designation"
          placeholder="Designation"
          onChange={(e) => setRole(e.target.value)}
        />
        <div>
          <TextInput
            className={"p-3.5"}
            id={"emp_number"}
            label={"Phone (whatsapp)"}
            type="text"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <TextInput
            className={"p-3.5"}
            id={"emp_nid"}
            label={"Employee NID"}
            type="text"
            onChange={(e) => setNid(e.target.value)}
          />
        </div>
        <div>
          <TextInput
            className={"p-3.5"}
            id={"emp_address"}
            label={"Address"}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <TextInput
            className={"p-3.5"}
            id={"emp_email"}
            label={"Enter Email"}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between border border-slate-500 rounded h-[44px]  focus:outline-none gap-2">
          <div className="w-full">
            <TextInput
              id={"password"}
              className="w-full border-none p-3.5"
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
          <Button className={"w-full py-3.5"} type="submit">
            <p className="py-3.5"> Register</p>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default EmployeeRegister;
