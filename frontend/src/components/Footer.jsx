import React from "react";
import { Button } from "./ui/button";
const Footer = () => {
  return (
    <div className="flex justify-center font-bold text-text w-full p-6 bg-background z-50">
      Logo
      <div className="md:ml-auto w-full flex items-center gap-x-2 justify-end">
        <Button className="bg-primary dark:bg-primary dark:hover:bg-[#D49A14] hover:bg-[#D49A14] text-black dark:text-black">Privacy Policy</Button>
        <Button className="bg-primary dark:bg-primary dark:hover:bg-[#D49A14] hover:bg-[#D49A14] text-black dark:text-black" >Terms and Conditions</Button>
      </div>
    </div>
  );
};

export default Footer;
