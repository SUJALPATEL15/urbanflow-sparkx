"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    MdDashboard,
    MdDirectionsCar,
    MdElectricBolt,
    MdFavorite,
    MdEco,
    MdSchool,
    MdAgriculture,
    MdMenu,
    MdClose,
} from "react-icons/md";
import { motion } from "framer-motion";

const navItems = [
    { name: "Overview", href: "/", icon: MdDashboard },
    { name: "Mobility", href: "/mobility", icon: MdDirectionsCar },
    { name: "Energy Grid", href: "/energy", icon: MdElectricBolt },
    { name: "Health System", href: "/health", icon: MdFavorite },
    { name: "Environment", href: "/environment", icon: MdEco },
    { name: "Agriculture", href: "/agriculture", icon: MdAgriculture },
    { name: "Education", href: "/education", icon: MdSchool },
];

interface SidebarProps {
    isExpanded: boolean;
    setIsExpanded: (value: boolean) => void;
}

export function Sidebar({ isExpanded, setIsExpanded }: SidebarProps) {
    const pathname = usePathname();

    return (
        <motion.div
            animate={{ width: isExpanded ? 256 : 80 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
                "sticky top-0 h-screen bg-mint-white text-deep-teal flex flex-col shadow-2xl z-50",
                isExpanded ? "overflow-hidden" : "overflow-visible"
            )}
        >
            {/* Header / Toggle */}
            <div className="p-6 flex items-center justify-between h-20 overflow-hidden">
                <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
                    <div className="w-8 h-8 rounded-full bg-leaf-green flex items-center justify-center font-bold shrink-0">U</div>
                    <motion.span
                        animate={{ opacity: isExpanded ? 1 : 0, display: isExpanded ? "block" : "none" }}
                        className="text-xl font-bold tracking-tight"
                    >
                        UrbanFlow
                    </motion.span>
                </div>
            </div>

            <div className="absolute top-6 right-4 lg:hidden">
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex justify-center p-4 hover:bg-deep-teal/5 transition-colors mb-2"
                title={isExpanded ? "Collapse" : "Expand"}
            >
                {/* Change icon based on 'Locked' state, visually helpful */}
                {isExpanded ? <MdClose size={28} className="text-deep-teal/80" /> : <MdMenu size={28} className="text-deep-teal/80" />}
            </button>

            {/* Navigation */}
            <nav className={cn(
                "flex-1 px-3 space-y-2",
                isExpanded ? "overflow-y-auto overflow-x-hidden" : "overflow-visible"
            )}>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center px-4 py-3 rounded-xl transition-all duration-200 group h-12 relative",
                                isActive
                                    ? "bg-leaf-green text-deep-teal shadow-lg shadow-leaf-green/20"
                                    : "text-deep-teal/70 hover:bg-deep-teal/5 hover:text-deep-teal"
                            )}
                        >
                            <item.icon
                                size={28}
                                className={cn(
                                    "shrink-0",
                                    isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                                )}
                            />
                            <motion.span
                                animate={{ opacity: isExpanded ? 1 : 0, width: isExpanded ? "auto" : 0 }}
                                className="font-medium text-sm ml-3 whitespace-nowrap overflow-hidden"
                            >
                                {item.name}
                            </motion.span>

                            {/* Tooltip - Only show if fully collapsed (neither hovered nor expanded) */}
                            {!isExpanded && (
                                <div className="absolute left-full ml-4 px-2 py-1 bg-mint-white text-deep-teal text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap border border-deep-teal/10 z-50">
                                    {item.name}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer System Status */}
            {/* <div className="p-4 mt-auto border-t border-white/10 overflow-hidden">
                <div className={cn("flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg transition-all", !isExpanded && "justify-center px-0 bg-transparent")}>
                    <div className="w-2.5 h-2.5 rounded-full bg-fresh-lime animate-pulse shadow-[0_0_8px_rgba(134,239,172,0.6)] shrink-0" />
                    {isExpanded && <span className="text-xs font-medium text-white/80 uppercase tracking-wider whitespace-nowrap">Online</span>}
                </div>
            </div> */}
        </motion.div>
    );
}
