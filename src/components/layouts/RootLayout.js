import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
