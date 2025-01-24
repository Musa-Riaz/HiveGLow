import { motion } from "framer-motion"

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
        <section className="py-20 text-text dark:text-background bg-secondary overflow-hidden h-[100vh]">
            <div className="container px-4 mx-auto">
                <motion.h2
                    className="text-4xl text-text font-bold text-center mb-12 bg-clip-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About HiveGlow
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                    <div className="relative h-screen">
                        <motion.div
                            className="hexagon bg-primary flex flex-col justify-evenly items-center text-center p-6 absolute left-0 top-0"
                            variants={hexagonVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >

                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To illuminate the digital landscape with innovative solutions, fostering growth and efficiency for
                                businesses worldwide.
                            </p>
                        </motion.div>

                        <motion.div
                            className="hexagon bg-primary flex flex-col justify-center items-center text-center p-6 absolute left-[229px] top-[127px]"
                            variants={hexagonVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >

                            <h3 className="text-2xl font-semibold pb-4">Our Vision</h3>
                            <p className="text-muted-foreground">
                                To be the beacon of technological advancement, guiding businesses towards a brighter, more connected
                                future.
                            </p>
                        </motion.div>
                    </div>


                    <motion.div
                        className="bg-card p-8 rounded-lg bg-primary relative overflow-hidden h-2/5 mt-10"
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
            </div>
        </section>
    )
}

export default About;