import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
  const [page, setPage] = useState(1); // Start from page 1
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const postPerPage = 10;

  // console.log("paid image", posts);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_LOCAL_API_URL
        }/api/v1/paid_image?page=${page}&limit=${postPerPage}`
      );
      const data = await response.json();
      setLoading(false);

      setPosts(data.data);

      // console.log('paid image', data)

      if (data.data.length === 0) {
        setHasMore(false);
        return;
      }

      // setPosts((prevPosts) => [...prevPosts, ...data.data]);
    } catch (error) {
      console.error("Error fetching posts:", error);
      // setUserData("user");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

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
            {posts.map((product, idx) => (
              <Product key={idx} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
