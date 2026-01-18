"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChartWrapper, CustomTooltip } from "@/components/ChartWrapper";
import { mobilityData } from "@/lib/data";
import dynamic from "next/dynamic";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    Legend,
} from "recharts";
import { Car, Zap, User } from "lucide-react";
import { useMemo } from "react";

// Dynamic import for Map to avoid SSR issues
const MapWidget = dynamic(() => import("@/components/MapWidget"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-mint-white animate-pulse rounded-2xl flex items-center justify-center text-soft-grey">Loading Map...</div>
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

export default function MobilityPage() {
    const { trafficDensity, transitStatus, parking, commuterFlow, evChargers } = mobilityData;

    const parkingTotal = useMemo(() => parking.reduce((a, b) => a + b.value, 0), [parking]);

    return (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-deep-teal tracking-tight">Urban Mobility</h1>
                <p className="text-soft-grey text-lg">Traffic flow, public transit, and infrastructure</p>
            </header>

            {/* Top Row: Traffic Chart & Transit Status */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div variants={itemVariants} className="lg:col-span-2">
                    <Card className="h-full min-h-[350px]">
                        <h3 className="text-lg font-semibold text-deep-teal mb-4">Traffic Density (24h)</h3>
                        <ChartWrapper height={280}>
                            <AreaChart data={trafficDensity}>
                                <defs>
                                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1F4E3D" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#1F4E3D" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="time" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="value" stroke="#1F4E3D" strokeWidth={3} fill="url(#colorTraffic)" />
                            </AreaChart>
                        </ChartWrapper>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6">
                    {/* Transit Status */}
                    <Card className="flex-1">
                        <h3 className="text-lg font-semibold text-deep-teal mb-6">Transit Status</h3>
                        <div className="space-y-6">
                            {transitStatus.map((item) => (
                                <div key={item.mode}>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-deep-teal">{item.mode} Network</span>
                                        <span className="text-soft-grey">{item.status}% Operational</span>
                                    </div>
                                    <div className="w-full bg-mint-white rounded-full h-2.5">
                                        <div
                                            className="h-2.5 rounded-full transition-all duration-1000"
                                            style={{ width: `${item.status}%`, backgroundColor: item.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* EV Network */}
                    <Card className="flex items-center justify-between p-6">
                        <div>
                            <p className="text-sm text-soft-grey">EV Chargers Avail.</p>
                            <p className="text-3xl font-bold text-deep-teal mt-1">{evChargers.available} <span className="text-lg text-soft-grey font-normal">/ {evChargers.total}</span></p>
                        </div>
                        <div className="bg-leaf-green/10 p-3 rounded-full text-leaf-green">
                            <Zap size={28} />
                        </div>
                    </Card>
                </motion.div>
            </div>

            {/* Middle Row: Map & Parking */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div variants={itemVariants} className="lg:col-span-2 h-[400px]">
                    <Card className="h-full p-0 overflow-hidden relative" noPadding>
                        <MapWidget />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-[1000]">
                            <h4 className="text-sm font-semibold text-deep-teal mb-2">Live Traffic</h4>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="w-3 h-3 bg-leaf-green rounded-full"></span> Fast
                                <span className="w-3 h-3 bg-deep-teal rounded-full ml-2"></span> Heavy
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Card className="h-full flex flex-col">
                        <h3 className="text-lg font-semibold text-deep-teal mb-4">Parking Capacity</h3>
                        <div className="flex-1 relative min-h-[250px]">
                            <ChartWrapper height={250}>
                                <PieChart>
                                    <Pie
                                        data={parking}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {parking.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ChartWrapper>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                <span className="text-3xl font-bold text-deep-teal">{Math.round((parking[0].value / parkingTotal) * 100)}%</span>
                                <span className="text-xs text-soft-grey block">OCCUPIED</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>

            {/* Bottom: Commuter Flow */}
            <motion.div variants={itemVariants}>
                <Card>
                    <h3 className="text-lg font-semibold text-deep-teal mb-4">Commuter Flow Analysis</h3>
                    <ChartWrapper height={300}>
                        <LineChart data={commuterFlow}>
                            <CartesianGrid vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="hour" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend />
                            <Line type="monotone" dataKey="public" name="Public Transit" stroke="#4BAF47" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="private" name="Private Vehicle" stroke="#6B7280" strokeWidth={3} dot={false} strokeDasharray="5 5" />
                        </LineChart>
                    </ChartWrapper>
                </Card>
            </motion.div>
        </motion.div>
    );
}
