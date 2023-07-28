import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { addComponent } from "@/redux/pcBuilderSlice/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const ComponentsPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(router?.query?.category);

  const handleAddToBuilder = (product) => {
    dispatch(addComponent(product));
    router.push("/pc-builder");
  };

  const featuredProducts = [
    {
      id: 1,
      image:
        "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
      productName: "Product 1",
      category: "CPU - Processor",
      price: 19.99,
      status: "In Stock",
      rating: 4.1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 2,
      image:
        "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
      productName: "Product 2",
      category: "Motherboard",
      price: 29.99,
      status: "In Stock",
      rating: 4.2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 3,
      image:
        "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
      productName: "Product 3",
      category: "RAM",
      price: 39.99,
      status: "In Stock",
      rating: 4.3,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 4,
      image:
        "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
      productName: "Product 4",
      category: "Power Supply Unit",
      price: 49.99,
      status: "In Stock",
      rating: 4.4,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 5,
      image:
        "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
      productName: "Product 5",
      category: "Storage Device",
      price: 59.99,
      status: "Out of stock",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
    {
      id: 6,
      image:
        "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
      productName: "Product 6",
      category: "Monitor",
      price: 69.99,
      status: "In Stock",
      rating: 4.6,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolore dignissimos. Reprehenderit odit rem quidem perferendis, ea consequatur consectetur modi eveniet, repudiandae commodi sint eaque molestiae quod voluptatibus eos fugiat sit maxime veniam fugit officia perspiciatis cupiditate itaque illo facere! Optio distinctio ea enim quasi eius iure, aliquam blanditiis saepe.",
      keyFeatures: {
        Brand: "Brand X",
        Model: "Model XYZ",
        Specification: "Spec ABC",
        Port: "Port Type",
        Type: "Type 123",
        Voltage: "110V",
      },
      reviews: [
        {
          id: 1,
          username: "user123",
          rating: 5,
          comment: "Great product!",
        },
      ],
    },
  ];

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
                        {product?.rating} Stars
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
                      {new Array(5 - Math.floor(product?.rating))
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
