"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChartWrapper, CustomTooltip } from "@/components/ChartWrapper";
import { environmentData } from "@/lib/data";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell
} from "recharts";
import { Leaf, Droplets, Zap, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function EnvironmentPage() {
    const { citizenStatus, activity, powerDistribution, waterQuality, events } = environmentData;

    const WaterGauge = ({ value, label }: { value: number, label: string }) => (
        <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 flex items-center justify-center border-4 border-mint-white rounded-full">
                <svg className="w-full h-full absolute inset-0 transform -rotate-90">
                    <circle
                        cx="48"
                        cy="48"
                        r="42"
                        stroke="#E5E7EB"
                        strokeWidth="6"
                        fill="transparent"
                    />
                    <circle
                        cx="48"
                        cy="48"
                        r="42"
                        stroke="#1F4E3D"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={264}
                        strokeDashoffset={264 - (264 * value) / 100}
                        strokeLinecap="round"
                    />
                </svg>
                <span className="text-xl font-bold text-deep-teal">{value}%</span>
            </div>
            <span className="mt-2 text-sm font-medium text-soft-grey">{label}</span>
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
                <h1 className="text-3xl font-bold text-deep-teal tracking-tight">Sustainability & Culture</h1>
                <p className="text-soft-grey text-lg">Environmental impact, water quality, and community events</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Stats & Activity */}
                <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
                    <Card>
                        <h3 className="text-lg font-semibold text-deep-teal mb-6">Citizen Participation</h3>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2 text-sm font-medium">
                                    <span>Stationary Stay</span>
                                    <span className="text-leaf-green">{citizenStatus.stationary}%</span>
                                </div>
                                <div className="w-full bg-mint-white rounded-full h-3">
                                    <div className="bg-leaf-green h-3 rounded-full" style={{ width: `${citizenStatus.stationary}%` }} />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2 text-sm font-medium">
                                    <span>Infrastructure Shortage</span>
                                    <span className="text-harvest-orange">{citizenStatus.infrastructure}%</span>
                                </div>
                                <div className="w-full bg-mint-white rounded-full h-3">
                                    <div className="bg-harvest-orange h-3 rounded-full" style={{ width: `${citizenStatus.infrastructure}%` }} />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-lg font-semibold text-deep-teal mb-4">Activity Monitor</h3>
                        <ChartWrapper height={250}>
                            <BarChart data={activity}>
                                <CartesianGrid vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="day" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="value" fill="#86EFAC" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ChartWrapper>
                    </Card>
                </motion.div>

                {/* Right Column: Power & Water */}
                <motion.div variants={itemVariants} className="space-y-6">
                    <Card>
                        <h3 className="text-lg font-semibold text-deep-teal mb-4">Power Distribution</h3>
                        <div className="h-[200px]">
                            <ChartWrapper height={200}>
                                <PieChart>
                                    <Pie
                                        data={powerDistribution}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={70}
                                        dataKey="value"
                                    >
                                        {powerDistribution.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ChartWrapper>
                        </div>
                        <div className="flex justify-center gap-4">
                            {powerDistribution.map(p => (
                                <div key={p.name} className="flex items-center gap-2 text-sm">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.fill }}></span>
                                    {p.name}
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card>
                        <div className="flex items-center gap-2 mb-6">
                            <Droplets className="text-deep-teal" />
                            <h3 className="text-lg font-semibold text-deep-teal">Water Quality</h3>
                        </div>
                        <div className="flex justify-between">
                            <WaterGauge value={waterQuality.purity} label="Purity" />
                            <WaterGauge value={waterQuality.spring} label="Spring" />
                        </div>
                    </Card>
                </motion.div>
            </div>

            {/* Events */}
            <motion.div variants={itemVariants}>
                <Card>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-deep-teal flex items-center gap-2">
                            <Calendar className="text-harvest-orange" /> Upcoming Cultural Events
                        </h3>
                        <button className="text-sm text-leaf-green font-medium hover:underline">View Calendar</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-black/5 text-soft-grey text-sm">
                                    <th className="py-3 font-medium">Event Name</th>
                                    <th className="py-3 font-medium">Date</th>
                                    <th className="py-3 font-medium">Price</th>
                                    <th className="py-3 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event) => (
                                    <tr key={event.id} className="border-b border-black/5 last:border-0 hover:bg-mint-white/50 transition-colors">
                                        <td className="py-4 font-medium text-deep-forest">{event.name}</td>
                                        <td className="py-4 text-soft-grey">{event.date}</td>
                                        <td className="py-4 text-deep-teal font-medium">{event.price}</td>
                                        <td className="py-4 text-right">
                                            <button className="px-4 py-2 bg-leaf-green text-white text-sm font-medium rounded-lg hover:bg-leaf-green/90 transition-colors shadow-lg shadow-leaf-green/20">
                                                Book Now
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    );
}
