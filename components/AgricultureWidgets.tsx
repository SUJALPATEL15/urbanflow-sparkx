"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    PieChart,
    Pie,
} from "recharts";
import { MdTrendingUp, MdTrendingDown, MdWaterDrop, MdDeviceThermostat, MdRouter, MdFlight } from "react-icons/md";
import { cn } from "@/lib/utils";

// --- Data ---
const cropData = [
    { month: "Jan", projected: 4000, actual: 2400 },
    { month: "Feb", projected: 3000, actual: 1398 },
    { month: "Mar", projected: 2000, actual: 9800 },
    { month: "Apr", projected: 2780, actual: 3908 },
    { month: "May", projected: 1890, actual: 4800 },
    { month: "Jun", projected: 2390, actual: 3800 },
    { month: "Jul", projected: 3490, actual: 4300 },
];

const waterData = [
    { name: "Rainwater", value: 4000 },
    { name: "Municipal", value: 2400 },
];

const marketData = [
    { name: "Wheat", price: "245.50", change: "+2.4%", up: true },
    { name: "Corn", price: "180.20", change: "-0.8%", up: false },
    { name: "Soy", price: "320.75", change: "+1.2%", up: true },
];

// --- Components ---

export function CropForecastChart() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-semibold text-deep-teal mb-4">Crop Yield Forecast</h3>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={cropData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1F4E3D" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#1F4E3D" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4BAF47" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#4BAF47" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #E5E7EB", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                            itemStyle={{ color: "#1F4E3D" }}
                        />
                        <Area type="monotone" dataKey="projected" stroke="#1F4E3D" fillOpacity={1} fill="url(#colorProjected)" strokeWidth={2} name="Projected Yield" />
                        <Area type="monotone" dataKey="actual" stroke="#4BAF47" strokeDasharray="5 5" fillOpacity={1} fill="url(#colorActual)" strokeWidth={2} name="Actual Yield" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export function SoilHealthGauge({ label, value, color }: { label: string; value: number; color: string }) {
    const data = [
        { name: "Value", value: value },
        { name: "Remaining", value: 100 - value },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="h-24 w-24 relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={35}
                            outerRadius={45}
                            startAngle={90}
                            endAngle={-270}
                            dataKey="value"
                        >
                            <Cell key={`cell-0`} fill={color} />
                            <Cell key={`cell-1`} fill="#F3F4F6" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-deep-teal">{value}%</span>
                </div>
            </div>
            <span className="text-sm font-medium text-slate-500 mt-2">{label}</span>
        </div>
    );
}

export function SoilHealthGrid() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-semibold text-deep-teal mb-4">Soil Health (NPK)</h3>
            <div className="grid grid-cols-3 gap-2">
                <SoilHealthGauge label="Nitrogen" value={78} color="#4BAF47" />
                <SoilHealthGauge label="Phosphorus" value={65} color="#F4A261" />
                <SoilHealthGauge label="Potassium" value={82} color="#1F4E3D" />
            </div>
        </div>
    );
}

export function MarketPriceTicker() {
    return (
        <div className="bg-deep-forest text-white p-4 rounded-xl shadow-lg flex items-center gap-6 overflow-x-auto whitespace-nowrap mb-6">
            <span className="text-leaf-green font-bold text-sm tracking-uppercase">MARKET</span>
            <div className="h-4 w-px bg-white/20" />
            {marketData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-white/80">${item.price}</span>
                    <span className={cn("text-xs flex items-center gap-0.5", item.up ? "text-fresh-lime" : "text-orange-400")}>
                        {item.up ? <MdTrendingUp /> : <MdTrendingDown />}
                        {item.change}
                    </span>
                </div>
            ))}
        </div>
    );
}

export function WaterUsageChart() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full">
            <h3 className="text-lg font-semibold text-deep-teal mb-4">Water Source</h3>
            <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={waterData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
                        <Tooltip
                            cursor={{ fill: '#F3F4F6' }}
                            contentStyle={{ backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #E5E7EB" }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                            {waterData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? "#1F4E3D" : "#4BAF47"} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export function IoTStatusCard({ label, status, value, icon: Icon, color }: { label: string; status: string; value: string; icon: any; color: string }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white text-xl", color)}>
                <Icon />
            </div>
            <div>
                <p className="text-xs text-slate-500 font-medium">{label}</p>
                <div className="flex items-baseline gap-2">
                    <h4 className="text-lg font-bold text-deep-teal">{value}</h4>
                    <span className="text-xs text-fresh-lime bg-fresh-lime/10 px-2 py-0.5 rounded-full">{status}</span>
                </div>
            </div>
        </div>
    );
}

export function IoTGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <IoTStatusCard
                label="Smart Irrigation"
                status="Active"
                value="Zone A-4"
                icon={MdWaterDrop}
                color="bg-blue-500"
            />
            <IoTStatusCard
                label="Drone Fleet"
                status="Charging"
                value="2 / 5"
                icon={MdFlight}
                color="bg-orange-500"
            />
            <IoTStatusCard
                label="Greenhouse Temp"
                status="Optimal"
                value="24°C"
                icon={MdDeviceThermostat}
                color="bg-leaf-green"
            />
        </div>
    );
}
