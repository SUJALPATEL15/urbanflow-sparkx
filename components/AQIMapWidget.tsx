"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom pin icons
const greenIcon = new L.DivIcon({
    className: "bg-transparent",
    html: `<div style="background-color: #4BAF47; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

const orangeIcon = new L.DivIcon({
    className: "bg-transparent",
    html: `<div style="background-color: #F4A261; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

export default function AQIMapWidget() {
    const position: [number, number] = [40.7128, -74.0060];

    return (
        <MapContainer center={position} zoom={12} scrollWheelZoom={false} className="w-full h-full rounded-2xl z-0">
            <TileLayer
                attribution='&copy; CARTO'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={[40.7128, -74.0060]} icon={greenIcon}>
                <Popup>Central Park: Good (32)</Popup>
            </Marker>
            <Marker position={[40.7300, -73.9800]} icon={orangeIcon}>
                <Popup>Midtown: Moderate (85)</Popup>
            </Marker>
            <Marker position={[40.7000, -74.0100]} icon={greenIcon}>
                <Popup>Battery Park: Good (28)</Popup>
            </Marker>
            <Marker position={[40.7500, -73.9500]} icon={greenIcon}>
                <Popup>East Side: Good (40)</Popup>
            </Marker>
            {/* Add more markers as visually needed to fill the map */}
        </MapContainer>
    );
}
