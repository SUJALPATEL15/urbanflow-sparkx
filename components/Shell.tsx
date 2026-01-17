"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export function Shell({ children }: { children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-1">
                <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
                <motion.div
                    className="flex-1 flex flex-col"
                // Removed marginLeft animation as flexbox handles layout
                // animate={{ marginLeft: isExpanded ? 256 : 80 }}
                // transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <Navbar />
                    <main className="p-8 flex-1">
                        {children}
                    </main>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}
