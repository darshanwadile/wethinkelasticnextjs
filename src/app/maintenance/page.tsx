import { motion } from "framer-motion";
import { Hammer, Wrench, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Maintenance = () => {
    const [email, setEmail] = useState("");
    const [isNotified, setIsNotified] = useState(false);

    const handleNotify = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsNotified(true);
            setTimeout(() => setIsNotified(false), 3000);
            setEmail("");
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl w-full text-center space-y-8"
            >
                <div className="relative inline-block">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="text-primary"
                    >
                        <Wrench size={64} />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="absolute -bottom-2 -right-2 bg-background p-1.5 rounded-full border border-border shadow-lg"
                    >
                        <Hammer size={24} className="text-secondary-foreground" />
                    </motion.div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        <span className="text-gradient">Under Maintenance</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
                        We're currently making some improvements to our website.
                        We'll be back shortly with a better experience.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full border border-border/50">
                        <Clock size={16} />
                        <span>Estimated return: 24 Hours</span>
                    </div>
                </div>
            </motion.div>

            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-6 text-sm text-muted-foreground"
            >
                &copy; {new Date().getFullYear()} AMS. All rights reserved.
            </motion.footer>
        </div>
    );
};

export default Maintenance;
