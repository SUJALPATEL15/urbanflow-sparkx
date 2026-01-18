"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChartWrapper, CustomTooltip } from "@/components/ChartWrapper";
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
} from "recharts";
import {
    ArrowUpRight,
    ArrowRight,
    AlertTriangle,
    Leaf,
    Activity,
    DollarSign,
    Zap,
    Star,
} from "lucide-react";
import { overviewData } from "@/lib/data";
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

export default function OverviewPage() {
    const { healthScore, keyMetrics, statusGrid, alerts, economicGrowth, satisfaction } = overviewData;

    // Gauge Data
    const gaugeData = [
        { name: "Score", value: healthScore },
        { name: "Remaining", value: 100 - healthScore },
    ];

    return (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.header variants={itemVariants} className="mb-8">
                <h1 className="text-3xl font-bold text-deep-teal tracking-tight">
                    City Executive Summary
                </h1>
                <p className="text-soft-grey text-lg">Real-time urban performance indicators</p>
            </motion.header>

            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Health Gauge */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                    <Card className="h-full flex flex-col md:flex-row items-center justify-between p-8 relative overflow-hidden">
                        <div className="z-10 relative space-y-4 max-w-md">
                            <h2 className="text-2xl font-semibold text-deep-teal">Overall City Health</h2>
                            <p className="text-soft-grey">Aggregate score based on mobility, safety, and environmental factors.</p>
                            <div className="flex items-center gap-2 text-leaf-green font-medium">
                                <ArrowUpRight size={20} />
                                <span>+4.2% from last month</span>
                            </div>
                        </div>

                        <div className="relative w-64 h-40 flex items-center justify-center mt-6 md:mt-0">
                            <ChartWrapper height={200} className="absolute -top-10">
                                <PieChart>
                                    <Pie
                                        data={gaugeData}
                                        cx="50%"
                                        cy="50%"
                                        startAngle={180}
                                        endAngle={0}
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={0}
                                        dataKey="value"
                                    >
                                        <Cell key="score" fill="#4BAF47" stroke="none" />
                                        <Cell key="remaining" fill="#E5E7EB" stroke="none" />
                                    </Pie>
                                </PieChart>
                            </ChartWrapper>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center mt-4">
                                <span className="text-4xl font-bold text-deep-teal block">{healthScore}</span>
                                <span className="text-sm text-soft-grey uppercase tracking-wider">Health</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                {/* Key Metrics Columns */}
                <motion.div variants={itemVariants} className="grid grid-rows-3 gap-4">
                    {keyMetrics.map((metric, idx) => (
                        <Card key={idx} className="flex items-center justify-between p-5" noPadding>
                            <div>
                                <p className="text-sm text-soft-grey font-medium">{metric.label}</p>
                                <p className="text-2xl font-bold text-deep-teal">{metric.value}</p>
                            </div>
                            <div className={cn("flex items-center text-sm font-medium", metric.trend === 'up' ? 'text-leaf-green' : 'text-soft-grey')}>
                                {metric.trend === 'up' && <ArrowUpRight size={16} className="mr-1" />}
                                {metric.change}
                            </div>
                        </Card>
                    ))}
                </motion.div>
            </div>

            {/* Status Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statusGrid.map((item, idx) => {
                    const getIcon = () => {
                        if (item.label.includes("Mobility")) return <ArrowRight />;
                        if (item.label.includes("Grid")) return <Zap />;
                        if (item.label.includes("Revenue")) return <DollarSign />;
                        return <Leaf />;
                    }
                    return (
                        <Card key={idx} className="flex flex-col justify-between h-32 hover:scale-[1.02] transition-transform">
                            <div className="flex justify-between items-start">
                                <span className="text-soft-grey font-medium text-sm">{item.label}</span>
                                <div className="p-2 bg-mint-white rounded-full text-leaf-green">
                                    {getIcon()}
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-deep-teal">{item.value}</div>
                                <div className="text-xs font-medium text-leaf-green mt-1">{item.status}</div>
                            </div>
                        </Card>
                    )
                })}
            </motion.div>

            {/* Alert Section */}
            <motion.div variants={itemVariants}>
                <Card className="border-l-4 border-l-harvest-orange bg-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-harvest-orange/10 rounded-full text-harvest-orange">
                            <AlertTriangle size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-deep-teal">Priority Alerts</h3>
                            <div className="flex gap-4">
                                {alerts.map(alert => (
                                    <span key={alert.id} className="text-sm text-soft-grey">
                                        <span className="font-medium text-deep-forest">{alert.message}</span> • {alert.time}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="text-sm font-medium text-harvest-orange hover:text-harvest-orange/80">
                        View All
                    </button>
                </Card>
            </motion.div>

            {/* Bottom Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Economic Growth */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                    <Card className="h-full min-h-[300px]">
                        <h3 className="text-lg font-semibold text-deep-teal mb-4">Aggregate Economic Growth</h3>
                        <ChartWrapper height={250}>
                            <AreaChart data={economicGrowth}>
                                <defs>
                                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4BAF47" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#4BAF47" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F3F4F6" />
                                <Area type="monotone" dataKey="value" stroke="#4BAF47" strokeWidth={3} fillOpacity={1} fill="url(#colorGrowth)" />
                            </AreaChart>
                        </ChartWrapper>
                    </Card>
                </motion.div>

                {/* Satisfaction */}
                <motion.div variants={itemVariants}>
                    <Card className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8">
                        <h3 className="text-lg font-semibold text-deep-teal mb-2">Citizen Satisfaction Index</h3>
                        <div className="text-5xl font-bold text-deep-teal mb-2">{satisfaction}</div>
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={24} className={cn("fill-harvest-orange text-harvest-orange", s > 4 && "fill-harvest-orange/30 text-harvest-orange/30")} />
                            ))}
                        </div>
                        <p className="text-soft-grey text-sm">Based on 12k monthly surveys</p>
                        <div className="mt-6 w-full bg-mint-white rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-leaf-green w-[96%]" />
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
}
