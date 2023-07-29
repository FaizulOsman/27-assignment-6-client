/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import Loader from "@/components/UI/Loader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const CategoriesPage = ({ products }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mb-16 mt-16 w-11/12 max-w-[1200px] mx-auto">
        {products?.data?.length < 1 && (
          <h1 className="text-3xl font-bold text-center">No data found!</h1>
        )}
        {!products?.data ? (
          <Loader />
        ) : (
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
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoriesPage;

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
      products: data,
    },
    revalidate: 30,
  };
};
