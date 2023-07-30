import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import Loader from "@/components/UI/Loader";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const HomePage = ({ products, categories }) => {
  // Show Only 1 product by every category
  let filteredProducts = [];
  products?.data?.map((product) => {
    if (filteredProducts?.length > 0) {
      const isCategoryExist = filteredProducts?.find(
        (item) => item?.category === product?.category
      );

      if (!isCategoryExist) {
        filteredProducts.push(product);
      }
    } else {
      filteredProducts.push(product);
    }
  });

  return (
    <>
      <Navbar />
      <div className="mt-16 w-11/12 max-w-[1200px] mx-auto">
        <div className="container mx-auto flex px-5 pt-8 pb-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 border-4 border-gray-200 rounded-xl">
            <Image
              className="object-cover object-center w-full rounded-xl"
              alt="hero"
              src="https://i.ibb.co/xmnfTLJ/custom-pc-build-in-nepal-aliteq-001-1.jpg"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Find the product you are looking
              <br className="hidden lg:inline-block" />
              for build your pc.
            </h1>
            <p className="mb-8 leading-relaxed">
              Are you searching for the best websites to build your PC?
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  See All Products
                </button>
              </Link>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-black">
          Featured Products
        </h1>
        <div className="container mx-auto bg-white pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {!filteredProducts ? (
            <Loader />
          ) : (
            filteredProducts?.map((product) => (
              <Link key={product?.id} href={`/product/${product?.id}`}>
                <div className="card w-full glass hover:bg-gray-100">
                  <figure className="h-40">
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
            ))
          )}
        </div>
        <FeaturedCategories categories={categories} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

export const getStaticProps = async function () {
  const res = await fetch(
    "https://pc-builder-server-alpha.vercel.app/api/v1/pc-builder/products"
  );
  const data = await res.json();

  const categoriesRes = await fetch(
    "https://pc-builder-server-alpha.vercel.app/api/v1/categories"
  );
  const categories = await categoriesRes.json();

  return {
    props: {
      products: data,
      categories: categories?.data,
    },
    revalidate: 30,
  };
};
