import ProjectSlider from "./ProjectSlider";
import { motion } from "framer-motion";

const ProjectSection = () => {
    return (
        <>
        <div className='absolute right-0 transform -translate-y-1/6 z-0 opacity-30'>
        <motion.img
              src="/beer.png"
              className=""
              alt="Bee"
              animate={{
                y: [0, -10, 0], // Moves up and down
                rotate: [0, 10, -10, 0], // Slight rotation
              }}
              transition={{
                duration: 4, // Duration of the animation
                repeat: Infinity, // Loops the animation
                repeatType: "loop", // Smooth looping
              }}
            />
        </div>
        <div className="w-full flex flex-col justify-center items-center py-20 bg-secondary min-h-screen">
            <ProjectSlider />
        </div>
        <div className='absolute left-0 transform -translate-y-56 z-0 opacity-30'>
        <motion.img
              src="/bee.png"
              className=""
              alt="Bee"
              animate={{
                y: [0, -10, 0], // Moves up and down
                rotate: [0, 10, -10, 0], // Slight rotation
              }}
              transition={{
                duration: 4, // Duration of the animation
                repeat: Infinity, // Loops the animation
                repeatType: "loop", // Smooth looping
              }}
            />
        </div>
        
        </>
    );
};

export default ProjectSection;