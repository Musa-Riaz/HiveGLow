import React from "react";
import { Button } from "./ui/button";
const Footer = () => {
  return (
    <div className="flex justify-center border-t dark:text-white w-full p-6 bg-background bg-white z-50 dark:bg-darkmode">
      Logo
      <div className="md:ml-auto w-full flex items-center gap-x-2 text-muted-foreground justify-end">
        <Button variant="ghost">Privacy Policy</Button>
        <Button variant="ghost">Terms and Conditions</Button>
      </div>
    </div>
  );
};

export default Footer;
