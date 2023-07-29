/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loader from "./Loader";

const FeaturedCategories = ({ categories }) => {
  if (!categories) {
    return <Loader />;
  }

  return (
    <section className="text-gray-600 body-font mt-16">
      <h1 className="text-2xl font-bold text-center text-black">
        Featured Categories
      </h1>
      <div className="container px-5 pt-12 pb-24 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:-m-4 -mx-4 -mb-10 -mt-4">
          {categories?.map((item) => (
            <Link href={`/categories/${item?.category}`} key={item?.id}>
              <div className="p-2 w-full sm:mb-0 mb-6 hover:bg-gray-100 hover:scale-105 duration-300 border rounded-lg shadow-md cursor-pointer">
                <div className="rounded-lg h-28 overflow-hidden">
                  <Image
                    src={item?.image}
                    alt="product category image"
                    className="object-cover object-center h-full w-full"
                    width={300}
                    height={300}
                    responsive="true"
                  />
                </div>
                <h2 className="text-md font-medium title-font text-center text-gray-900 mt-2">
                  {item?.category}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
