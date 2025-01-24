import { motion } from 'framer-motion';
import { NetworkCard } from "@/components/network-card"
import { Code2, Smartphone, Wrench, Laptop, Database, Cloud } from "lucide-react"


const Services = () => {
    return (
        <section className="py-20 bg-background dark:bg-background text-text flex justify-center ">
                <div className='absolute left-0 transform -translate-y-1/2 z-0 opacity-30'>
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
            <div className="container px-4 ">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Our Services
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <NetworkCard
                        title="Web Development"
                        description="Custom web solutions built with cutting-edge technologies"
                        icon={<Code2 className="w-8 h-8" />}
                    />
                    <NetworkCard
                        title="Mobile Applications"
                        description="Native and cross-platform mobile app development"
                        icon={<Smartphone className="w-8 h-8" />}
                    />
                    <NetworkCard
                        title="Software Solutions"
                        description="Tailored software to meet your business needs"
                        icon={<Laptop className="w-8 h-8" />}
                    />
                    <NetworkCard
                        title="Cloud Services"
                        description="Scalable cloud solutions for your growing business"
                        icon={<Cloud className="w-8 h-8" />}
                    />
                    <NetworkCard
                        title="Database Management"
                        description="Efficient database design and optimization"
                        icon={<Database className="w-8 h-8" />}
                    />
                    <NetworkCard
                        title="Maintenance & Support"
                        description="Ongoing technical support and maintenance"
                        icon={<Wrench className="w-8 h-8" />}
                    />
                </div>
            </div>
        </section >
    )
}

export default Services;