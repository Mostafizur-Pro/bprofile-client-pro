import carImage from "@/assets/home/featureProducts/svu.jpg";
import phoneImage from "@/assets/home/featureProducts/phone.jpg";
import sofaImage from "@/assets/home/featureProducts/sofa.jpg";
import bookImage from "@/assets/home/featureProducts/book.jpg";
import jacketImage from "@/assets/home/featureProducts/jacket.jpg";
import tomatoesImage from "@/assets/home/featureProducts/tomatoes.png";
import lampImage from "@/assets/home/featureProducts/lamp.jpg";
import basketballImage from "@/assets/home/featureProducts/basketball.jpg";
import Product from "./Product";

const Products = () => {
  const featuredProducts = [
    {
      name: "Cabbage",
      category_name: "Food & Beverage",
      price: "BDT22.97",
      image: tomatoesImage,
    },
    {
      name: "Smartphone",
      category_name: "Electronics",
      price: 499.99,
      image: phoneImage,
    },
    {
      name: "Leather Jacket",
      category_name: "Fashion",
      price: 129.99,
      image: jacketImage,
    },
    {
      name: "Sofa Set",
      category_name: "Home Decor",
      price: 899.99,
      image: sofaImage,
    },
    {
      name: "Mathematics Textbook",
      category_name: "Education",
      price: 39.99,
      image: bookImage,
    },
    {
      name: "Basketball",
      category_name: "Sports",
      price: 24.99,
      image: basketballImage,
    },
    {
      name: "SUV",
      category_name: "Vehicle",
      price: 35.0,
      image: carImage,
    },
    {
      name: "Desk Lamp",
      category_name: "Home Decor",
      price: 49.99,
      image: lampImage,
    },
  ];
  return (
    <section className=" b_profile_container">
      <div className="py-16">
        <div className="flex items-center gap-6">
          <h4 className="lg:text-4xl md:text-2xl text-xl font-semibold w-96">
            Feature Products
          </h4>
          <div className="w-full h-[1px] bg-black/10"></div>
        </div>
        <div className="md:pt-10 pt-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3">
            {featuredProducts.map((product, idx) => (
              <Product key={idx} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
