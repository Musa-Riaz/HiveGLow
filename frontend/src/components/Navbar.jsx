import React from "react";
import useScrollTop from "../../hooks/useScrollTop";
import { cn } from "../lib/utils";
import { ModeToggle } from "./mode-toggle";
const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-index  bg-background  bg-white dark:bg-[#282323]  fixed top-0 flex items-center w-full p-6    ",
        scrolled && " border-b shadow-sm"
      )}
    >
<p className="w-full font-bold dark:text-white">Hive Glow</p>
<div 
className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2"
>
  <ul className="dark:text-white flex space-x-10">
    <a href="#"><li>About Us</li></a>
    <a href="#"><li>Services</li></a>
    <a href="#"><li>Portfolio</li></a>
    <a href="#"><li>Testimonials</li></a>
    <a href="#"><li>Contact Us</li></a>
  </ul>
<ModeToggle />
</div>
    </div>
  );
};

export default Navbar;
