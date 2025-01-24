import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-full  dark:bg">
      <main className="min-h-screen pt-20  ">{children}</main>
    </div>
  );
};

export default Layout;
