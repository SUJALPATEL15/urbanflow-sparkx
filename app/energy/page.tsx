"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChartWrapper, CustomTooltip } from "@/components/ChartWrapper";
import { energyData } from "@/lib/data";
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
    RadialBarChart,
    RadialBar,
} from "recharts";
import { Zap, Battery, Sun, Wind, Droplets, Thermometer, Leaf } from "lucide-react";

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

export default function EnergyPage() {
    const { consumptionProduction, renewableMix, gridLoad, batteryCapacity, heatingStatus } = energyData;

    const renderGauge = (value: number, color: string, label: string) => {
        const data = [{ name: 'val', value: value, fill: color }];
        return (
            <div className="relative h-40 w-full flex flex-col items-center justify-center">
                <ChartWrapper height={160}>
                    <PieChart>
                        <Pie
                            data={[{ value: value }, { value: 100 - value, fill: '#E5E7EB' }]}
                            cx="50%"
                            cy="50%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={70}
                            stroke="none"
                            dataKey="value"
                        >
                            <Cell fill={color} />
                            <Cell fill="#E5E7EB" />
                        </Pie>
                    </PieChart>
                </ChartWrapper>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 pt-2 text-center">
                    <span className="text-2xl font-bold text-deep-teal">{value}%</span>
                    <span className="text-xs text-soft-grey block uppercase">{label}</span>
                </div>
            </div>
        )
    }

    return (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-deep-teal tracking-tight">Energy Grid Management</h1>
                <p className="text-soft-grey text-lg">Production, consumption, and renewable monitoring</p>
            </header>

            {/* Main Consumption vs Production */}
            <motion.div variants={itemVariants}>
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-deep-teal">Consumption vs Production</h3>
                        <div className="flex gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-harvest-orange"></span> Consumption
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-leaf-green"></span> Production (Renewable)
                            </div>
                        </div>
                    </div>
                    <ChartWrapper height={350}>
                        <AreaChart data={consumptionProduction}>
                            <defs>
                                <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4BAF47" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#4BAF47" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorCons" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#F4A261" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#F4A261" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="time" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Area type="monotone" dataKey="production" stroke="#4BAF47" strokeWidth={3} fill="url(#colorProd)" />
                            <Area type="monotone" dataKey="consumption" stroke="#F4A261" strokeWidth={3} fill="url(#colorCons)" />
                        </AreaChart>
                    </ChartWrapper>
                </Card>
            </motion.div>

            {/* Second Row: Mix, Load, Storage */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Renewable Mix */}
                <motion.div variants={itemVariants}>
                    <Card className="h-full">
                        <h3 className="text-lg font-semibold text-deep-teal mb-4">Renewable Mix</h3>
                        <div className="h-[250px] relative">
                            <ChartWrapper height={250}>
                                <PieChart>
                                    <Pie
                                        data={renewableMix}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {renewableMix.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ChartWrapper>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <Leaf className="text-leaf-green mb-1" size={24} />
                                <span className="font-bold text-deep-teal">Mix</span>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 mt-2">
                            {renewableMix.map(item => (
                                <div key={item.name} className="flex flex-col items-center">
                                    <span className="w-2 h-2 rounded-full mb-1" style={{ backgroundColor: item.fill }}></span>
                                    <span className="text-xs text-soft-grey">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                {/* Grid Load */}
                <motion.div variants={itemVariants}>
                    <Card className="h-full">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-deep-teal">Real-time Load</h3>
                            <div className="animate-pulse w-3 h-3 bg-fresh-lime rounded-full shadow-[0_0_8px_#86EFAC]"></div>
                        </div>
                        <ChartWrapper height={250}>
                            <AreaChart data={gridLoad}>
                                <defs>
                                    <linearGradient id="colorGrid" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1B3B36" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#1B3B36" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Area type="natural" dataKey="value" stroke="#1B3B36" strokeWidth={2} fill="url(#colorGrid)" animationDuration={1000} />
                            </AreaChart>
                        </ChartWrapper>
                        <div className="text-center mt-2">
                            <span className="text-3xl font-bold text-deep-forest">420 MW</span>
                            <span className="text-sm text-soft-grey block">Current Demand</span>
                        </div>
                    </Card>
                </motion.div>

                {/* Storage & Heating */}
                <motion.div variants={itemVariants} className="space-y-6">
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-deep-teal">Battery Storage</h3>
                            <Battery className="text-leaf-green" />
                        </div>
                        <div className="w-full bg-mint-white rounded-xl h-12 relative overflow-hidden border border-black/5 mt-4">
                            <div
                                className="h-full bg-leaf-green flex items-center justify-end pr-4 text-white font-bold transition-all duration-1000"
                                style={{ width: `${batteryCapacity}%` }}
                            >
                                {batteryCapacity}%
                            </div>
                            {/* Battery lines */}
                            <div className="absolute inset-0 flex justify-evenly opacity-20">
                                {[1, 2, 3, 4].map(i => <div key={i} className="w-[1px] h-full bg-white"></div>)}
                            </div>
                        </div>
                        <p className="text-xs text-soft-grey mt-2 text-center">Capacity: 750MWh / 960MWh</p>
                    </Card>

                    <Card className="grid grid-cols-2 gap-2">
                        <div className="text-center">
                            {renderGauge(heatingStatus.residential, "#F4A261", "Heating")}
                        </div>
                        <div className="text-center">
                            {renderGauge(heatingStatus.industrial, "#1F4E3D", "Industry")}
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
}
