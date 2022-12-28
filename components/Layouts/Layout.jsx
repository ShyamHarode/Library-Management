import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Aside from "./Aside";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Aside />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
