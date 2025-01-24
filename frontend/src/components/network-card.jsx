import { motion } from "framer-motion"
import { useState } from "react"

export function NetworkCard({ title, description, icon }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="relative hexagon p-8 group overflow-hidden rounded-lg bg-secondary"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center text-text space-y-4">
                <motion.div
                    className="p-3 rounded-full"
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {icon}
                </motion.div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>

            {/* Border glow effect */}
            <motion.div
                className="absolute inset-0 border border-text blur-sm rounded-lg hexagon"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    )
}