import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className='h-full   dark:bg-[#282323]'>
    <Navbar />
  <main className='h-[100vh] pt-40 '>
    {children}
  </main>
</div>
  );
};

export default Layout;
