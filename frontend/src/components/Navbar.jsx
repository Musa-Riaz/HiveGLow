import React, { useState } from "react"
import useScrollTop from "../../hooks/useScrollTop"
import { cn } from "../lib/utils"
import { Link } from "react-scroll"
import { ModeToggle } from "./mode-toggle"
import AnimatedUnderline from "./AnimatedUnderline"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const scrolled = useScrollTop()
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navItems = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Services", to: "services" },
        { name: "Projects", to: "projects" },
        { name: "Team", to: "team" },
        { name: "Contact", to: "contact" },
    ]

    return (
        <nav
            className={cn(
                "z-50 bg-transparent fixed top-0 left-0 right-0 transition-all duration-300",
                scrolled && "bg-background shadow-md",
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src="./logo.png" alt="Hive Glow Logo" className="h-8 w-auto mr-3" />
                        <p className="font-bold text-text dark:text-text">Hive Glow</p>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex space-x-8">
                            {navItems.map((item) => (
                                <li key={item.name} className="relative">
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        className="text-text dark:text-text hover:text-primary cursor-pointer transition-colors group"
                                    >
                                        {item.name}
                                        <AnimatedUnderline />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <ModeToggle />
                        <div className="md:hidden ml-2">
                            <button onClick={toggleMenu} className="text-text dark:text-text hover:text-primary focus:outline-none">
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-background dark:bg-background`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="text-text dark:text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                            onClick={toggleMenu}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;