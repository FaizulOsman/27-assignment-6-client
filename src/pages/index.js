import RootLayout from "@/components/layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 1",
      category: "CPU / Processor",
      price: 19.99,
      status: "In Stock",
      rating: 4.1,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 2",
      category: "Motherboard",
      price: 29.99,
      status: "In Stock",
      rating: 4.2,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 3",
      category: "RAM",
      price: 39.99,
      status: "In Stock",
      rating: 4.3,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 4",
      category: "Power Supply Unit",
      price: 49.99,
      status: "In Stock",
      rating: 4.4,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 5",
      category: "Storage Device",
      price: 59.99,
      status: "In Stock",
      rating: 4.5,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvZ3dhcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      productName: "Product 6",
      category: "Monitor",
      price: 69.99,
      status: "In Stock",
      rating: 4.6,
    },
  ];

  return (
    <div className="container mx-auto bg-white py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {featuredProducts?.map((product) => (
        <Link key={product?.id} href={`/product/${product?.id}`}>
          <div className="card w-full glass">
            <figure>
              {/* <img src={product?.image} alt="car!" /> */}
              <Image
                src={product?.image}
                alt="product image"
                width={300}
                height={300}
                responsive
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">{product?.productName}</h2>

              <p>
                <span className="font-semibold">Category:</span>{" "}
                {product?.category}
              </p>

              <p>
                <span className="font-semibold">Status:</span> {product?.status}
              </p>
              <div className="flex justify-between">
                <span className="flex items-center mr-1">
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
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
