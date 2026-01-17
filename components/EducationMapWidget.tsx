"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const schoolIcon = new L.DivIcon({
    className: "bg-transparent",
    html: `<div style="background-color: #1F4E3D; width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: bold; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">S</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});

const libraryIcon = new L.DivIcon({
    className: "bg-transparent",
    html: `<div style="background-color: #F4A261; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: bold; border: 2px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">L</div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});

export default function EducationMapWidget() {
    const center: [number, number] = [40.7128, -74.0060];
    const schoolLocs = [
        [40.7128, -74.0060],
        [40.7200, -74.0100],
        [40.7150, -73.9900],
    ];
    const libLocs = [
        [40.7180, -74.0000],
        [40.7100, -74.0050],
    ];

    // Connections
    const connections = [
        [schoolLocs[0], libLocs[0]],
        [schoolLocs[1], libLocs[0]],
        [schoolLocs[2], libLocs[1]],
    ] as [number, number][][];

    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="w-full h-full rounded-2xl z-0">
            <TileLayer
                attribution='&copy; CARTO'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {/* Network Lines */}
            {connections.map((pos, i) => (
                <Polyline key={i} positions={pos} color="#6B7280" weight={1} dashArray="5, 10" opacity={0.5} />
            ))}

            {schoolLocs.map((pos, i) => (
                <Marker key={`s-${i}`} position={pos as [number, number]} icon={schoolIcon}>
                    <Popup>Public School #{i + 1}</Popup>
                </Marker>
            ))}
            {libLocs.map((pos, i) => (
                <Marker key={`l-${i}`} position={pos as [number, number]} icon={libraryIcon}>
                    <Popup>Public Library #{i + 1}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
