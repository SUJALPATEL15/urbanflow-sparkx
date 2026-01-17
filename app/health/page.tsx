"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChartWrapper } from "@/components/ChartWrapper";
import { healthData } from "@/lib/data";
import dynamic from "next/dynamic";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";
import { Heart, Ambulance, Flame, Flower, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

// Dynamic AQI Map
const AQIMapWidget = dynamic(() => import("@/components/AQIMapWidget"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-mint-white animate-pulse rounded-2xl">Loading Map...</div>
});

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HealthPage() {
    const { hospitals, responseTimes, alerts, budget } = healthData;

    const CircularTimer = ({ time, unit, icon: Icon, color, label }: any) => (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="60" stroke="#E5E7EB" strokeWidth="8" fill="transparent" />
                    <circle
                        cx="64"
                        cy="64"
                        r="60"
                        stroke={color}
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={377}
                        strokeDashoffset={377 - (377 * 75) / 100} // Mock 75% fill
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Icon size={24} className="text-deep-teal mb-1" />
                    <div className="text-2xl font-bold text-deep-teal">{time}</div>
                    <div className="text-xs text-soft-grey lowercase">{unit}</div>
                </div>
            </div>
            <span className="mt-2 font-medium text-deep-teal">{label}</span>
        </div>
    );

    return (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-deep-teal tracking-tight">Public Health & Safety</h1>
                <p className="text-soft-grey text-lg">Hospital capacity, response unit readiness, and air quality</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Hospital Capacity */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                    <Card className="h-full">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-deep-teal">Hospital Capacity</h3>
                            <Heart className="text-harvest-orange" />
                        </div>
                        <div className="space-y-6">
                            {hospitals.map((hospital, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-deep-forest">{hospital.name}</span>
                                            <span className={cn("text-xs font-bold px-2 py-1 rounded bg-mint-white",
                                                hospital.status === "Critical" ? "text-harvest-orange bg-harvest-orange/10" : "text-leaf-green"
                                            )}>{hospital.status}</span>
                                        </div>
                                        <div className="w-full bg-mint-white rounded-full h-3">
                                            <div
                                                className={cn("h-3 rounded-full transition-all duration-1000",
                                                    hospital.capacity > 90 ? "bg-harvest-orange" : "bg-leaf-green"
                                                )}
                                                style={{ width: `${hospital.capacity}%` }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-deep-teal w-12 text-right">{hospital.capacity}%</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                {/* Response Times */}
                <motion.div variants={itemVariants}>
                    <Card className="h-full flex flex-col justify-center gap-8 py-8">
                        <h3 className="text-lg font-semibold text-deep-teal text-center mb-2">Avg. Response Time</h3>
                        <div className="flex justify-around">
                            <CircularTimer time={responseTimes.ambulance.time} unit={responseTimes.ambulance.unit} icon={Ambulance} color="#F4A261" label="Ambulance" />
                            <CircularTimer time={responseTimes.fire.time} unit={responseTimes.fire.unit} icon={Flame} color="#F4A261" label="Fire Dept" />
                        </div>
                    </Card>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* AQI Map */}
                <motion.div variants={itemVariants} className="lg:col-span-2 h-[350px]">
                    <Card className="h-full p-0 relative" noPadding>
                        <div className="absolute top-4 left-4 z-[1000] bg-white/90 p-3 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-deep-teal flex items-center gap-2">
                                <Flower size={18} className="text-leaf-green" /> Air Quality Map
                            </h3>
                        </div>
                        <AQIMapWidget />
                    </Card>
                </motion.div>

                {/* Alerts & Budget */}
                <motion.div variants={itemVariants} className="space-y-6">
                    {/* Alerts Feed */}
                    <Card>
                        <h3 className="text-lg font-semibold text-deep-teal mb-4">Health Alerts</h3>
                        <div className="space-y-4">
                            {alerts.map(alert => (
                                <div key={alert.id} className="flex items-center gap-3 p-3 bg-mint-white rounded-lg border border-black/5">
                                    <AlertTriangle size={20} className={cn("shrink-0", alert.severity === "High" ? "text-harvest-orange" : "text-soft-grey")} />
                                    <div>
                                        <p className="text-sm font-medium text-deep-forest">{alert.title}</p>
                                        <p className="text-xs text-soft-grey">Severity: {alert.severity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Budget */}
                    <Card>
                        <h3 className="text-lg font-semibold text-deep-teal mb-2">Budget Allocation</h3>
                        <div className="h-40 flex items-center justify-center">
                            <ChartWrapper height={160}>
                                <PieChart>
                                    <Pie
                                        data={budget}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={40}
                                        outerRadius={60}
                                        dataKey="value"
                                    >
                                        {budget.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ChartWrapper>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
}
