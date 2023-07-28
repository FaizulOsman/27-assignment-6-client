import Footer from "@/components/Shared/Footer";
import { BsCpu, BsMotherboard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPower } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import Link from "next/link";

const PCBuilder = () => {
  const categories = [
    {
      id: "101",
      category: "CPU - Processor",
      icon: <BsCpu className="text-2xl" />,
    },
    {
      id: "102",
      category: "Motherboard",
      icon: <BsMotherboard className="text-2xl" />,
    },
    {
      id: "103",
      category: "RAM",
      icon: <CgSmartphoneRam className="text-2xl" />,
    },
    {
      id: "104",
      category: "Power Supply Unit",
      icon: <ImPower className="text-2xl" />,
    },
    {
      id: "105",
      category: "Storage Device",
      icon: <MdStorage className="text-2xl" />,
    },
    {
      id: "106",
      category: "Monitor",
      icon: <FiMonitor className="text-2xl" />,
    },
  ];
  return (
    <div>
      <div className="min-h-screen py-10 text-black">
        <div className="w-11/12 sm:w-3/4 mx-auto flex flex-col gap-4">
          {categories?.map((category) => (
            <Link href={`/components/${category?.category}`} key={category?.id}>
              <div className="w-full">
                <div className="flex items-center gap-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 duration-100 p-4 sm:flex-row flex-col">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 flex-shrink-0">
                    {category?.icon}
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
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PCBuilder;
