"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NetworkCard } from "@/components/network-card"
import { Button } from "@/components/ui/button"
import {
    Code,
    Globe,
    Smartphone,
    Palette,
    TestTube,
    Cloud,
    Wrench,
    Briefcase,
    BarChart,
    Shield,
    Brain,
    Cog,
    GraduationCap,
    Megaphone,
    ChevronDown,
    ChevronUp,
} from "lucide-react"

const Services = () => {
    const [showAll, setShowAll] = useState(false)

    const services = [
        {
            title: "Development",
            description: "Tailored software solutions as per client needs",
            icon: <Code className="w-8 h-8" />,
        },
        {
            title: "Web Development",
            description: "Building responsive and high-performance websites",
            icon: <Globe className="w-8 h-8" />,
        },
        {
            title: "Mobile App Development",
            description: "Developing mobile apps for Android and iOS",
            icon: <Smartphone className="w-8 h-8" />,
        },
        {
            title: "UI/UX Design",
            description: "Designing user-friendly and engaging interfaces",
            icon: <Palette className="w-8 h-8" />,
        },
        {
            title: "Quality Assurance and Testing",
            description: "Ensuring software quality through rigorous testing",
            icon: <TestTube className="w-8 h-8" />,
        },
        {
            title: "Cloud Services",
            description: "Cloud infrastructure setup, migration, and management",
            icon: <Cloud className="w-8 h-8" />,
        },
        {
            title: "Maintenance and Support",
            description: "Ongoing support and maintenance to ensure smooth operation",
            icon: <Wrench className="w-8 h-8" />,
        },
        {
            title: "IT Consulting",
            description: "Expert advice on IT strategies, digital transformation, and technology adoption",
            icon: <Briefcase className="w-8 h-8" />,
        },
        {
            title: "Data Analytics and Business Intelligence",
            description: "Data analysis, reporting, and visualization",
            icon: <BarChart className="w-8 h-8" />,
        },
        {
            title: "Cybersecurity Services",
            description: "Protecting client data and systems from cyber threats",
            icon: <Shield className="w-8 h-8" />,
        },
        {
            title: "AI Services",
            description: "Artificial Intelligence solutions for your business",
            icon: <Brain className="w-8 h-8" />,
        },
        {
            title: "Automation",
            description: "Streamline processes with intelligent automation",
            icon: <Cog className="w-8 h-8" />,
        },
        {
            title: "Training and Workshops",
            description: "Conducting training sessions for client teams",
            icon: <GraduationCap className="w-8 h-8" />,
        },
        {
            title: "Digital Marketing",
            description: "SEO, content marketing, social media strategies",
            icon: <Megaphone className="w-8 h-8" />,
        },
    ]

    const visibleServices = showAll ? services : services.slice(0, 8)

    return (
        <section className="py-20 bg-background dark:bg-background text-text flex justify-center relative overflow-hidden">
            <div className="absolute left-0 top-5 opacity-30">
                <motion.img
                    src="/bee.png"
                    className="w-36 h-36"
                    alt="Bee"
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                    }}
                />
            </div>
            <div className="container px-4 relative z-10">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Our Services
                </motion.h2>
                <motion.div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${showAll ? "xl:grid-cols-5" : ""} gap-8`}
                    layout
                >
                    <AnimatePresence>
                        {visibleServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <NetworkCard title={service.title} description={service.description} icon={service.icon} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                <motion.div
                    className="flex justify-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Button onClick={() => setShowAll(!showAll)} variant="outline" className="flex items-center gap-2">
                        {showAll ? (
                            <>
                                Show Less <ChevronUp className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                Show More <ChevronDown className="w-4 h-4" />
                            </>
                        )}
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

export default Services;