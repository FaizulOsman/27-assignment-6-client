/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  const featuredCategories = [
    {
      id: "1",
      category: "CPU-Processor",
      image:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/01/intel-13th-gen-desktop-800x450.jpg",
    },
    {
      id: "2",
      category: "Motherboard",
      image: "https://wallpaperaccess.com/full/1580037.jpg",
    },
    {
      id: "3",
      category: "RAM",
      image:
        "https://assets-prd.ignimgs.com/2022/06/24/corsair-dominator-platinum-rgb-1656107201735.jpg",
    },
    {
      id: "4",
      category: "Power Supply Unit",
      image:
        "https://webapi3.adata.com/storage/product/xpg_cybercore_kv_1920x1080.jpg",
    },
    {
      id: "5",
      category: "Storage Device",
      image:
        "https://images.saymedia-content.com/.image/t_share/MTc1MDE0NzA2MTc0NTAyNjMy/examples-of-data-storage-devices.jpg",
    },
    {
      id: "6",
      category: "Monitor",
      image:
        "https://dicendpads.com/wp-content/uploads/2021/09/ASUS-Announces-August-Availability-of-TUF-Gaming-VG28UQL1A-HDMI-2.1-Gaming-monitor_1820_1213.jpg",
    },
  ];
  return (
    <section className="text-gray-600 body-font mt-16">
      <h1 className="text-2xl font-bold text-center text-black">
        Featured Categories
      </h1>
      <div className="container px-5 pt-12 pb-24 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:-m-4 -mx-4 -mb-10 -mt-4">
          {featuredCategories?.map((item) => (
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
