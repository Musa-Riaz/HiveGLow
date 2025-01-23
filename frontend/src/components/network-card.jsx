import { motion } from "framer-motion"
import { useState } from "react"

export function NetworkCard({ title, description, icon }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="relative hexagon bg-card backdrop-blur-sm p-8 group overflow-hidden border rounded-lg border-[#514747] "
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Honeycomb pattern overlay */}
            <motion.div
                className={`absolute inset-0`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 1.1,
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <motion.div
                    className="text-primary p-3 rounded-full bg-primary/10"
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-yellow-600">{title}</h3>
                <p className="text-muted-foreground text-yellow-600">{description}</p>
            </div>

            {/* Border glow effect */}
            <motion.div
                className="absolute inset-0 border border-primary/20 hexagon"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    )
}