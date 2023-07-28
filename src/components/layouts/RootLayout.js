import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-11/12 max-w-[1200px] mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
