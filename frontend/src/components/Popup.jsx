import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from 'react-scroll'

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true)
        }, 5000) // Show after 5 seconds

        return () => clearTimeout(timer) // Cleanup on unmount
    }, [])

    const handleClose = () => {
        setShowPopup(false)
    }

    return (
        <AnimatePresence>
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-5 right-5 z-50 w-80 bg-secondary shadow-lg rounded-lg"
                >
                    <div className="relative p-6 text-text">
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-muted-foreground hover:text-text transition-colors"
                            aria-label="Close popup"
                        >
                            <X size={20} />
                        </button>
                        <h3 className="text-lg font-semibold mb-2">Ready to boost your business?</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Schedule a free consultation call with our experts and learn how we can help you grow.
                        </p>
                        <div className="space-y-2">
                            <Link to="contact" smooth={true} duration={1000}>
                                <Button className="w-full bg-primary hover:bg-[#D49A14] dark:text-background text-text" variant="solid">
                                    Book Free Consultation
                                </Button>
                            </Link>
                            <Button variant="outline" className="w-full" onClick={handleClose}>
                                Maybe Later
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Popup;