import React from "react";
import useScrollTop from "../../hooks/useScrollTop";
import { cn } from "../lib/utils";
import { ModeToggle } from "./mode-toggle";
import {  BellElectric } from "lucide-react";
const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-index bg-background dark:bg-[#282323] fixed top-0 flex items-center w-full p-6 border-b   ",
        scrolled && " border-b shadow-sm"
      )}
    >
<BellElectric size={24} className="dark:text-white" />
<div 
className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2"
>
<ModeToggle />
</div>
    </div>
  );
};

export default Navbar;
