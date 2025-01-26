import React from "react";
import AIChatbot from "./AIChatbot";

const Layout = ({ children }) => {
  return (
    <div className="h-full dark:bg-darkmode">
      <main className="min-h-screen w-screen">
        {children}
        <AIChatbot />
      </main>
    </div>
  );
};

export default Layout;
