import React from "react";
import useScrollTop from "../../hooks/useScrollTop";
import { cn } from "../lib/utils";
import { Link } from "react-scroll"
import { ModeToggle } from "./mode-toggle";
const Navbar = () => {
    const scrolled = useScrollTop();
    return (
        <div
            className={cn(
                "z-index bg-background dark:bg-background fixed top-0 flex items-center w-full p-6 px-6 ",
                scrolled && "shadow-md"
            )}
        >
            <p className="w-full font-bold text-text dark:text-text">Hive Glow</p>
            <div
                className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2"
            >
                <ul className="text-text dark:text-text flex space-x-10">
                    <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:underline">Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline">About Us</Link></li>
                    <li><Link to="services" smooth={true} duration={500} className="cursor-pointer hover:underline">Services</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline">Projects</Link></li>
                    <li><Link to="team" smooth={true} duration={500} className="cursor-pointer hover:underline">Team</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} className="pr-3 cursor-pointer hover:underline">Contact</Link></li>
                </ul>
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
