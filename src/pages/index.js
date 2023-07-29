import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const HomePage = ({ products }) => {
  return (
    <>
      <Navbar />
      <div className="mt-16 w-11/12 max-w-[1200px] mx-auto">
        <h1 className="text-2xl font-bold text-center text-black">
          Featured Products
        </h1>
        <div className="container mx-auto bg-white pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products?.data?.map((product) => (
            <Link key={product?.id} href={`/product/${product?.id}`}>
              <div className="card w-full glass hover:bg-gray-100">
                <figure>
                  <Image
                    src={product?.image}
                    alt="product image"
                    width={300}
                    height={300}
                    responsive="true"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title">{product?.productName}</h2>
                  <p>
                    <span className="font-semibold">Category:</span>{" "}
                    {product?.category}
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span>{" "}
                    {product?.status}
                  </p>
                  <div className="flex justify-between">
                    <span className="flex items-center mr-1 font-bold">
                      {product?.rating}
                      <AiFillStar className="ml-1 text-orange-500" />
                    </span>
                    <span className="font-bold">${product?.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <FeaturedCategories />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

export const getStaticProps = async function () {
  const res = await fetch("http://localhost:5000/api/v1/pc-builder/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};
