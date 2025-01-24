import { motion } from "framer-motion"
import { useState } from "react"

export function NetworkCard({ title, description, icon }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="hover:cursor-pointer relative p-6 group overflow-hidden rounded-lg bg-secondary h-52 flex flex-col justify-center"
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center text-text space-y-2">
                <motion.div
                    className="p-3 rounded-full"
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {icon}
                </motion.div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-tight">{description}</p>
            </div>

            {/* Border glow effect */}
            <motion.div
                className="absolute inset-0 border border-text blur-sm rounded-lg"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    )
}
