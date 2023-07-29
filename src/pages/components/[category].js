import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { addComponent } from "@/redux/pcBuilderSlice/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const ComponentsPage = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(products);
  const handleAddToBuilder = (product) => {
    dispatch(addComponent(product));
    router.push("/pc-builder");
  };

  const featuredProducts = products;

  return (
    <div>
      <Navbar />
      <div className="min-h-screen text-black mt-16 w-11/12 max-w-[1200px] mx-auto">
        <div className="w-full sm:w-3/4 mx-auto">
          {featuredProducts?.map((product) => (
            <div key={product?.id} className="p-4   w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col">
                <div className="w-full h-40 sm:w-36 sm:h-36 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <Image
                    src={product?.image}
                    className="w-full h-full rounded-lg"
                    width={300}
                    height={300}
                    alt=""
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-gray-900 text-lg title-font font-medium  ">
                    {product?.productName}
                  </h2>
                  <h2 className="text-gray-900 text-base title-font font-medium  mb-4">
                    {product?.category}
                  </h2>
                  <div className="flex mb-1">
                    <span className="flex items-center">
                      <span className="text-gray-600 mr-3">
                        {product?.rating}
                      </span>
                      {new Array(Math.floor(product?.rating))
                        .fill(null)
                        .map((star, i) => (
                          <svg
                            key={i}
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 text-green-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      {product?.rating &&
                        new Array(5 - Math.floor(product?.rating))
                          .fill(null)
                          .map((star, i) => (
                            <svg
                              key={i}
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-green-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                          ))}
                    </span>
                  </div>
                  <p className="text-base">Price: ${product?.price}</p>
                  <p className="text-base">Status: {product?.status}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleAddToBuilder(product)}
                    className="mt-3 sm:mt-0 w-full btn btn-accent text-white"
                  >
                    Add To Builder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComponentsPage;

export const getStaticPaths = async function () {
  const res = await fetch("http://localhost:5000/api/v1/pc-builder/products");
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { category: product.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async function (context) {
  const { params } = context;

  const res = await fetch(
    `http://localhost:5000/api/v1/pc-builder/categories/${params?.category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
    revalidate: 30,
  };
};
