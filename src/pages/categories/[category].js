/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const CategoryPage = () => {
  const router = useRouter();
  console.log(router?.query?.category);

  const featuredProducts = [
    {
      id: 1,
      image:
        "https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/6f2cce37d2c.jpg",
      productName: "Product 1",
      category: "CPU_Processor",
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
      category: "Power_Supply_Unit",
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
      category: "Storage_Device",
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
    <div className="min-h-screen">
      <div className="container mx-auto bg-white pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {featuredProducts?.map((product) => (
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
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
