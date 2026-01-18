"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChartWrapper, CustomTooltip } from "@/components/ChartWrapper";
import { educationData } from "@/lib/data";
import dynamic from "next/dynamic";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell
} from "recharts";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const EducationMapWidget = dynamic(() => import("@/components/EducationMapWidget"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-mint-white animate-pulse rounded-2xl">Loading Network...</div>
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

export default function EducationPage() {
    const { stats, enrollmentTrends, resources, grants } = educationData;

    return (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-deep-teal tracking-tight">Education & Literacy</h1>
                <p className="text-soft-grey text-lg">School network, enrollment, and resource allocation</p>
            </header>

            {/* Top Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="flex items-center gap-4 p-6">
                    <div className="bg-leaf-green/10 p-3 rounded-full text-leaf-green">
                        <Users size={28} />
                    </div>
                    <div>
                        <p className="text-sm text-soft-grey">Total Students</p>
                        <p className="text-3xl font-serif font-bold text-deep-teal">{stats.students}</p>
                    </div>
                </Card>
                <Card className="flex items-center gap-4 p-6">
                    <div className="bg-deep-teal/10 p-3 rounded-full text-deep-teal">
                        <GraduationCap size={28} />
                    </div>
                    <div>
                        <p className="text-sm text-soft-grey">School Occupancy</p>
                        <p className="text-3xl font-serif font-bold text-deep-teal">{stats.occupancy}</p>
                    </div>
                </Card>
                <Card className="flex items-center gap-4 p-6">
                    <div className="bg-harvest-orange/10 p-3 rounded-full text-harvest-orange">
                        <BookOpen size={28} />
                    </div>
                    <div>
                        <p className="text-sm text-soft-grey">Digital Literacy</p>
                        <p className="text-3xl font-serif font-bold text-deep-teal">{stats.literacy}</p>
                    </div>
                </Card>
            </motion.div>

            {/* Main Content: Map & Trends */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Network Map */}
                <motion.div variants={itemVariants} className="lg:col-span-2 h-[400px]">
                    <Card className="h-full p-0 relative" noPadding>
                        <div className="absolute top-4 left-4 z-[1000] bg-white/90 p-3 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-deep-teal">Education Network</h3>
                        </div>
                        <EducationMapWidget />
                    </Card>
                </motion.div>

                {/* Enrollment Trend */}
                <motion.div variants={itemVariants}>
                    <Card className="h-full">
                        <h3 className="text-lg font-semibold text-deep-teal mb-4">Enrollment Trends</h3>
                        <ChartWrapper height={300}>
                            <LineChart data={enrollmentTrends}>
                                <CartesianGrid vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="year" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <Line type="monotone" dataKey="value" stroke="#4BAF47" strokeWidth={3} dot={{ r: 4, fill: "#4BAF47" }} />
                            </LineChart>
                        </ChartWrapper>
                    </Card>
                </motion.div>
            </div>

            {/* Bottom Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Library Stats */}
                <motion.div variants={itemVariants}>
                    <Card>
                        <h3 className="text-lg font-semibold text-deep-teal mb-4">Library Resources</h3>
                        <ChartWrapper height={250}>
                            <BarChart data={resources}>
                                <CartesianGrid vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6B7280" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="value" fill="#1F4E3D" radius={[4, 4, 0, 0]} barSize={50} />
                            </BarChart>
                        </ChartWrapper>
                    </Card>
                </motion.div>

                {/* Grants */}
                <motion.div variants={itemVariants}>
                    <Card className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-deep-teal mb-2">Grant Allocation</h3>
                        <ChartWrapper height={250} className="w-full">
                            <PieChart>
                                <Pie
                                    data={grants}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {grants.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ChartWrapper>
                        <div className="flex gap-4 mt-2">
                            {grants.map(g => (
                                <div key={g.name} className="flex items-center gap-2 text-sm">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: g.fill }}></span>
                                    {g.name}
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    );
}
