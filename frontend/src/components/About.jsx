import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const About = () => {
    const hexagonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section className="py-20 bg-gradient-to-b dark:bg-darkmode text-white from-background to-secondary overflow-hidden">
            <div className="container px-4 mx-auto">
                <motion.h2
                    className="text-4xl text-yellow-600 font-bold text-center mb-12 bg-gradient-to-r from-hive-primary to-hive-secondary bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About HiveGlow
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12  min-h-[30vh]">
                    <motion.div
                        className="hexagon rounded-lg bg-yellow-600 p-6 flex flex-col justify-evenly items-center text-center"
                        variants={hexagonVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl  font-semibold mb-4">Our Mission</h3>
                        <p className="text-muted-foreground">
                            To illuminate the digital landscape with innovative solutions, fostering growth and efficiency for
                            businesses worldwide.
                        </p>
                    </motion.div>

                    <motion.div
                        className="hexagon rounded-lg bg-yellow-600 p-6 flex flex-col justify-evenly items-center text-center"
                        variants={hexagonVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                        <p className="text-muted-foreground">
                            To be the beacon of technological advancement, guiding businesses towards a brighter, more connected
                            future.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className="bg-card p-8 rounded-lg bg-yellow-600 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 honeycomb-pattern opacity-5" />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                        <p className="text-muted-foreground mb-6">
                            HiveGlow was born from a passion for technology and a vision of a more connected world. Like a beehive, we
                            believe in the power of collaboration and hard work. Our team of dedicated professionals works tirelessly
                            to create innovative solutions that help businesses thrive in the digital age. From our humble beginnings
                            to our current position as a leader in the industry, we've always stayed true to our core values of
                            innovation, integrity, and excellence.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About;