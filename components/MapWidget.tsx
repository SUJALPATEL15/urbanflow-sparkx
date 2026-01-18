"use client";

import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix Leaflet marker icon issue
const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function MapWidget() {
    // Center roughly on a generic city (e.g. New York or just 0,0) or coordinates
    const position: [number, number] = [40.7128, -74.0060]; // NYC as example

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full rounded-2xl z-0">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            {/* Mock Green Flow Lines (Traffic) */}
            <Polyline
                positions={[
                    [40.7128, -74.0060], [40.7200, -74.0100], [40.7300, -74.0000]
                ]}
                color="#4BAF47"
                weight={5}
                opacity={0.7}
            />
            <Polyline
                positions={[
                    [40.7100, -74.0200], [40.7150, -74.0150], [40.7050, -74.0050]
                ]}
                color="#1F4E3D"
                weight={5}
                opacity={0.7}
            />
            <Marker position={position} icon={customIcon}>
                <Popup>Central Station</Popup>
            </Marker>
        </MapContainer>
    );
}
