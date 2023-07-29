import Footer from "@/components/Shared/Footer";
import Link from "next/link";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";
import { useSelector } from "react-redux";
import Loader from "@/components/UI/Loader";
import { toast } from "react-hot-toast";

const PCBuilder = ({ categories }) => {
  const { pc } = useSelector((state) => state?.pcBuilder);

  Object.keys(pc)?.map((key) => console.log("key", key, "value", pc[key]));

  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-10 text-black">
        <div className="w-11/12 sm:w-3/4 mx-auto flex flex-col gap-4">
          {!categories ? (
            <Loader />
          ) : (
            categories?.map((category) => (
              <div key={category?.id}>
                <Link
                  href={`/components/${category?.category}`}
                  key={category?.id}
                >
                  <div className="w-full">
                    <div className="flex items-center gap-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 duration-100 p-4 sm:flex-row flex-col">
                      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 flex-shrink-0">
                        <Image
                          src={category?.image}
                          alt="product category image"
                          className="h-full w-full rounded-full"
                          width={300}
                          height={300}
                          responsive="true"
                        />
                      </div>
                      <div className="flex-grow items-center flex">
                        <h2 className="text-gray-900 text-lg title-font font-medium  ">
                          {category?.category}
                        </h2>
                      </div>
                      <div className="flex items-center">
                        <button className="btn btn-primary bg-indigo-100 text-indigo-600 hover:text-white btn-sm">
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>

                {Object.keys(pc)?.map(
                  (key, i) =>
                    key === category?.category && (
                      <div key={i} className="px-6 pb-4 pt-0 w-full">
                        <div className="flex items-center border-2 rounded-lg hover:bg-base-200 border-gray-200 border-opacity-50 p-2 sm:flex-row flex-col">
                          <div className="w-28 h-20 sm:mr-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <Image
                              src={pc[key]?.image}
                              className="w-full h-full rounded-lg"
                              width={300}
                              height={300}
                              alt=""
                            />
                          </div>
                          <div className="flex-grow ">
                            <h2 className="text-gray-900 text-lg title-font font-medium">
                              {pc[key]?.productName}
                            </h2>
                            <h2 className="text-gray-500 text-xs title-font font-medium mb-1">
                              #{pc[key]?.category}
                            </h2>
                            <div className="flex mb-1">
                              <span className="flex items-center">
                                <span className="text-gray-600 mr-3">
                                  {pc[key]?.rating}
                                </span>
                                {new Array(Math.floor(pc[key]?.rating))
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
                                {new Array(5 - Math.floor(pc[key]?.rating))
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
                          </div>
                          <div className="flex items-center">
                            <h1 className="  text-2xl">${pc[key]?.price}</h1>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            ))
          )}
          <div className="flex justify-center my-5">
            <button
              className="btn btn-primary text-white "
              disabled={Object.keys(pc)?.length < 6}
              onClick={() =>
                toast.success(
                  "Congratulations! Your PC has been built successfully!"
                )
              }
            >
              Complete Build
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PCBuilder;

export const getServerSideProps = async function () {
  const categoriesRes = await fetch(
    "https://pc-builder-server-alpha.vercel.app/api/v1/categories"
  );
  const categories = await categoriesRes.json();

  return {
    props: {
      categories: categories?.data,
    },
  };
};
