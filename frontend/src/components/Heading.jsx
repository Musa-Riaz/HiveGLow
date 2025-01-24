import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
import { Phone } from "lucide-react";
const Heading = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-background flex flex-col mb-20 justify-center gap-2 items-center dark:text-text space-y-4 mx-auto  "
        >
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold  min-w-max p-2 ">
                Welcome To HiveGlow
            </h1>
            <h3 className="text-lg text-center sm:text-xl md:text-3xl font-light">
                We are a team of developers who are passionate about creating
                high-quality software.
            </h3>
            <Link to="contact" smooth={true} duration={1000}>
            <Button className="bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-white">
                <Phone size={20} className="mr-2" />
                Book Consultation
            </Button>
            </Link>
        </motion.div>
    );
};

export default Heading;
