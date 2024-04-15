import supportImage from "@/assets/android/support.png";

const Supports = () => {
  return (
    <div className="bg-primary_main pt-20 mt-10">
      <div className=" b_profile_container">
        <div className="grid md:grid-cols-8 grid-cols-1 items-center gap-6">
          <div className="md:col-span-3 order-1">
            <h2
              className={`lg:text-5xl md:text-4xl  text-white text-2xl font-semibold 
       
     `}
            >
              Empowering Users Around the Clock
            </h2>
          </div>
          <div className="md:col-span-2 md:order-2 order-3">
            <img src={supportImage} alt="" />
          </div>
          <div className="md:col-span-3 md:order-3 order-2">
            <p className="text-xs lg:text-base text-white ">
              Our team is here to provide you with personalized and outstanding
              service. We also offer a range of self-learning tools in our
              support center:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supports;
