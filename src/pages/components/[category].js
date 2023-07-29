import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Loader from "@/components/UI/Loader";
import { addComponent } from "@/redux/pcBuilderSlice/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const ComponentsPage = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(products);
  const handleAddToBuilder = (product) => {
    toast.success(
      `You selected ${product?.productName} in Category ${product?.category}!`
    );
    dispatch(addComponent(product));
    router.push("/pc-builder");
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen text-black mt-16 w-11/12 max-w-[1200px] mx-auto">
        <div className="w-full sm:w-3/4 mx-auto">
          {!products ? (
            <Loader />
          ) : (
            products?.map((product) => (
              <div key={product?.id} className="p-4   w-full">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-4 sm:flex-row flex-col">
                  <div className="w-full h-40 sm:w-36 sm:h-24 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <Image
                      src={product?.image}
                      className="w-full h-full rounded-lg"
                      width={300}
                      height={300}
                      alt=""
                    />
                  </div>
                  <div className="flex-grow ">
                    <div className="flex justify-between sm:justify-normal flex-row sm:flex-col items-center sm:items-start">
                      <h2 className="text-gray-900 text-lg title-font font-medium  ">
                        {product?.productName}
                      </h2>
                      <p className="text-gray-500 text-xs title-font font-medium mb-1">
                        #{product?.category}
                      </p>
                    </div>
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
                    <p className="text-sm">Status: {product?.status}</p>
                  </div>
                  <div className="flex items-center justify-between flex-row sm:flex-col">
                    <p className="text-xl font-bold text-[#22c55e]">
                      ${product?.price}
                    </p>
                    <button
                      onClick={() => handleAddToBuilder(product)}
                      className="mt-3 sm:mt-0 btn btn-accent btn-sm md:btn-md text-white"
                    >
                      Add To Builder
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComponentsPage;

export const getServerSideProps = async function (context) {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-server-alpha.vercel.app/api/v1/pc-builder/categories/${params?.category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
};
