import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-full dark:bg-darkmode">
      <main className="min-h-screen   ">{children}</main>
    </div>
  );
};

export default Layout;
