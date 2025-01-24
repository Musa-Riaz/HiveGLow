import React from "react";
import useScrollTop from "../../hooks/useScrollTop";
import { cn } from "../lib/utils";
import { Link } from "react-scroll"
import { ModeToggle } from "./mode-toggle";
import AnimatedUnderline from "./AnimatedUnderline";

const Navbar = () => {
    const scrolled = useScrollTop();
    return (
        <div
            className={cn(
                "z-index bg-transparent fixed top-0 flex items-center  w-full p-4 px-6 ",
                scrolled && "bg-background transition-all duration-300 shadow-md"
            )}
        >
            <img src="./logo.png" className="h-10 mr-3" />
            <p className="w-full font-bold text-text dark:text-text">Hive Glow</p>
            <div
                className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2"
            >
                <ul className="text-text dark:text-text flex space-x-10">
                    <li className="relative">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer transition-colors hover:text-primary group"
                        >
                            Home
                            <AnimatedUnderline />
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer transition-colors hover:text-primary group"
                        >
                            About
                            <AnimatedUnderline />
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer transition-colors hover:text-primary group"
                        >
                            Services
                            <AnimatedUnderline />
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer transition-colors hover:text-primary group"
                        >
                            Projects
                            <AnimatedUnderline />
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            to="team"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer transition-colors hover:text-primary group"
                        >
                            Team
                            <AnimatedUnderline />
                        </Link>
                    </li>
                    <li className="relative">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer transition-colors hover:text-primary group"
                        >
                            Contact
                            <AnimatedUnderline />
                        </Link>
                    </li>
                </ul>
                <ModeToggle />
            </div>
        </div>
    );
};

export default Navbar;
