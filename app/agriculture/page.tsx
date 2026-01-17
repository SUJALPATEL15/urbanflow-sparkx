"use client";

import dynamic from "next/dynamic";
import {
    CropForecastChart,
    SoilHealthGrid,
    MarketPriceTicker,
    WaterUsageChart,
    IoTGrid
} from "@/components/AgricultureWidgets";

// Dynamically import MapWidget to avoid SSR issues with Leaflet
const MapWidget = dynamic(() => import("@/components/MapWidget"), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-slate-100 animate-pulse rounded-2xl" />
});

export default function AgriculturePage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-deep-teal tracking-tight">Agriculture</h1>
                <div className="text-sm text-slate-500">Smart Farming & Yields Module</div>
            </div>

            {/* Market Ticker */}
            <MarketPriceTicker />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Row 1: Crop Forecast (2 cols) & Soil Health (1 col) */}
                <div className="lg:col-span-2 h-[400px]">
                    <CropForecastChart />
                </div>
                <div className="lg:col-span-1 h-[400px]">
                    <SoilHealthGrid />
                </div>

                {/* Row 2: Map (2 cols) & Water Usage (1 col) */}
                <div className="lg:col-span-2 h-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                    <h3 className="text-lg font-semibold text-deep-teal mb-4">Field Moisture Levels</h3>
                    <div className="flex-1 rounded-xl overflow-hidden relative">
                        {/* Reusing MapWidget but ideally would pass props for "Satellite" or "Heatmap" if supported. 
                             For now, using standard map as placeholder for "Field Map". */}
                        <MapWidget />
                        <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded shadow text-xs">
                            <div className="flex items-center gap-2 mb-1"><div className="w-3 h-3 bg-blue-500 rounded-full"></div> High Moisture</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-400 rounded-full"></div> Needs Irrigation</div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 h-[400px]">
                    <WaterUsageChart />
                </div>
            </div>

            {/* Row 3: IoT Status */}
            <div>
                <h3 className="text-lg font-semibold text-deep-teal mb-4">Connected Devices</h3>
                <IoTGrid />
            </div>
        </div>
    );
}
