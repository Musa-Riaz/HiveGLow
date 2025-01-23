import React from "react";

const Layout = ({ children }) => {
  return (
    <div className='h-full dark:bg-[#282323]'>
      <main className='min-h-screen flex flex-col pt-20 '>
        {children}
      </main>
    </div>
  );
};

export default Layout;
