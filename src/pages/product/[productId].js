/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { useGetSingleProductQuery } from "@/redux/pcBuilderSlice/pcBuilderApi";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ProductDetailPage = () => {
  const router = useRouter();
  const id = router?.query?.productId;

  const { data: singleProduct } = useGetSingleProductQuery(id);

  let product = singleProduct?.data;

  // const product = {
  //   id: 1,
  //   image:
  //     "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
  //   productName: "Product 1",
  //   category: "CPU / Processor",
  //   price: 199.99,
  //   status: "In Stock",
  //   individualRating: 4.7,
  //   averageRating: 4.5,
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
  //   keyFeatures: {
  //     Brand: "Brand X",
  //     Model: "Model XYZ",
  //     Specification: "Spec ABC",
  //     Port: "Port Type",
  //     Type: "Type 123",
  //     Voltage: "110V",
  //   },
  //   reviews: [
  //     {
  //       id: 1,
  //       username: "user123",
  //       comment: "Great product!",
  //     },
  //     {
  //       id: 2,
  //       username: "user123",
  //       comment: "Nice product!",
  //     },
  //     {
  //       id: 3,
  //       username: "user123",
  //       comment: "Awesome product!",
  //     },
  //   ],
  // };

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden w-11/12 max-w-[1200px] mx-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-5/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full flex items-center">
              <Image
                src={product?.image}
                alt="product category image"
                className="w-full lg:h-auto h-64 object-cover object-center rounded"
                width={300}
                height={150}
                responsive="true"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.productName}
              </h1>
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
                {product?.status}
              </h2>
              <div className="flex mb-4">
                <div>
                  <div className="flex mb-1">
                    <span className="flex items-center">
                      <span className="text-gray-600 mr-3">
                        {product?.averageRating}
                      </span>
                      {product?.averageRating &&
                        new Array(Math?.floor(product?.averageRating))
                          .fill(null)
                          .map((star, i) => (
                            <svg
                              key={i}
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-4 h-4 text-orange-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                      {product?.averageRating &&
                        new Array(5 - Math.floor(product?.averageRating))
                          .fill(null)
                          .map((star, i) => (
                            <svg
                              key={i}
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-orange-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                          ))}

                      <span className="text-gray-600 ml-3">( Average )</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="flex items-center">
                      <span className="text-gray-600 mr-3">
                        {product?.averageRating}
                      </span>
                      {product?.individualRating &&
                        new Array(Math.floor(product?.individualRating))
                          .fill(null)
                          .map((star, i) => (
                            <svg
                              key={i}
                              fill="currentColor"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              className="w-4 h-4 text-orange-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                      {product?.individualRating &&
                        new Array(5 - Math.floor(product?.individualRating))
                          .fill(null)
                          .map((star, i) => (
                            <svg
                              key={i}
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 text-orange-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                          ))}

                      <span className="text-gray-600 ml-3">( Individual )</span>
                    </span>
                  </div>
                </div>
                <span className="flex items-center ml-3 pl-3 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div className="mb-2 ml-4">
                {product?.keyFeatures &&
                  Object.keys(product?.keyFeatures)?.map((key) => (
                    <li key={key}>{`${key} : ${product?.keyFeatures[key]}`}</li>
                  ))}
              </div>
              <p className="leading-relaxed">{product?.description}</p>

              <div className="flex pt-3 mt-3 border-t-2 border-gray-100">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-auto">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Reviews area  */}
          <div className="my-5">
            <h1 className="text-3xl mb-3 font-semibold text-center">Reviews</h1>
            {product?.reviews?.map((review) => (
              <div key={review?.id} className="mb-4 shadow-md hover:shadow-lg">
                <a className="inline-flex items-center my-2">
                  <Image
                    src="https://static.vecteezy.com/system/resources/previews/009/383/461/original/man-face-clipart-design-illustration-free-png.png"
                    alt="product category image"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    width={300}
                    height={150}
                    responsive="true"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      {review?.username}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {review?.comment}
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
