/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const CategoriesPage = () => {
  const router = useRouter();
  console.log(router?.query?.category);

  const featuredProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 1",
      category: "CPU / Processor",
      price: 199.99,
      status: "In Stock",
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
      id: 2,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 2",
      category: "Motherboard",
      price: 149.99,
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
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 1",
      category: "CPU / Processor",
      price: 199.99,
      status: "In Stock",
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
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 2",
      category: "Motherboard",
      price: 149.99,
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
      id: 5,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 1",
      category: "CPU / Processor",
      price: 199.99,
      status: "In Stock",
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
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 2",
      category: "Motherboard",
      price: 149.99,
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
  ];

  return (
    <>
      <div className="min-h-screen mb-16">
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
    </>
  );
};

export default CategoriesPage;

CategoriesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
