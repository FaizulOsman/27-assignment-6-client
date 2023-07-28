import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="w-11/12 max-w-[1200px] mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
