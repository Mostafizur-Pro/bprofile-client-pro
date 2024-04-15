import carCategoriesImage from "@/assets/category/car.svg";
import sofaCategoriesImage from "@/assets/category/sofa.png";
import dressCategoriesImage from "@/assets/category/dress.png";
import volleyballCategoriesImage from "@/assets/category/volleyball.png";
import monitorCategoriesImage from "@/assets/category/monitor.png";
import graduationCategoriesImage from "@/assets/category/graduation.png";

const Categories = () => {
  const categories = [
    {
      name: "Vehicle",
      image: carCategoriesImage,
    },
    {
      name: "Electronics",
      image: monitorCategoriesImage,
    },
    {
      name: "Fashion",
      image: dressCategoriesImage,
    },
    {
      name: "Home Decor",
      image: sofaCategoriesImage,
    },
    {
      name: "Education",
      image: graduationCategoriesImage,
    },
    {
      name: "Sports",
      image: volleyballCategoriesImage,
    },
  ];
  return (
    <section className=" b_profile_container">
      <div className="md:flex items-center justify-start md:py-16 py-6">
        <h4 className="lg:text-2xl text-md inline font-semibold ">
          Search by{" "}
          <span className="lg:text-4xl text-xl font-bold md:block">
            Categories
          </span>
        </h4>
        <div className="flex flex-wrap items-center justify-evenly lg:mt-10 mt-6 grow gap-3">
          {categories.map((category, idx) => (
            <div className="" key={idx}>
              <div className=" lg:p-6 p-3.5 bg-gray-100 rounded-full flex items-center justify-center">
                <img
                  className="lg:w-16 w-10 lg:h-16 h-10 opacity-75 hover:opacity-100"
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <p className="mt-2 text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
