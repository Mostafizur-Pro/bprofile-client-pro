import ClientRegister from "./ClientRegister";

const DashboardRegister = () => {  
  return (
    <div className="py-[60px] bg-blue-50 md:py-20 xl:py-28  flex items-center justify-center w-full min-h-screen">
      <div className=" b_profile_container items-center justify-center gap-16 md:w-[70%]">
        {/*space-x-5 lg:space-x-0 */}
        <div className="w-full lg:flex items-center justify-center ">
          {/* form */}
          <div className="w-full lg:w-[350px] mt-20 lg:mt-10 relative">
            <div className=""><ClientRegister /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRegister;
