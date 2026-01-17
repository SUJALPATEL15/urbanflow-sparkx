"use client";

import { ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface ChartWrapperProps {
    children: React.ReactElement;
    height?: number | string;
    className?: string;
    title?: string;
}

export function ChartWrapper({ children, height = 300, className, title }: ChartWrapperProps) {
    return (
        <div className={cn("w-full h-full flex flex-col", className)}>
            {title && <h3 className="text-lg font-semibold text-deep-teal mb-4">{title}</h3>}
            <div style={{ height }} className="w-full">
                <ResponsiveContainer width="100%" height="100%">
                    {children}
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export function CustomTooltip({ active, payload, label }: any) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 rounded-lg shadow-lg border border-black/5">
                <p className="text-sm font-medium text-deep-teal mb-1">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={index} className="text-sm" style={{ color: entry.color }}>
                        {entry.name}: {entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
}
