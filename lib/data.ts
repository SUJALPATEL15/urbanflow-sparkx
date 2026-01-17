export const overviewData = {
    healthScore: 87,
    keyMetrics: [
        { label: "Public Safety", value: "92%", trend: "up", change: "+4.2%" },
        { label: "Sustainability", value: "85%", trend: "up", change: "+2.1%" },
        { label: "Connectivity", value: "98%", trend: "static", change: "0%" },
    ],
    statusGrid: [
        { label: "Mobility Status", status: "Optimal", value: "94%", active: true },
        { label: "Grid Load", status: "Normal", value: "420 MW", active: true },
        { label: "Air Quality", status: "Good", value: "32 AQI", active: true, icon: "leaf" },
        { label: "Daily Revenue", status: "On Track", value: "$1.2M", active: true },
    ],
    alerts: [
        { id: 1, message: "Main St Water Leakage - Priority Repair Scheduled", type: "warning", time: "10m ago" },
        { id: 2, message: "Downtown Traffic Congestion - Rerouting Active", type: "info", time: "25m ago" },
    ],
    economicGrowth: [
        { month: "Jan", value: 40 },
        { month: "Feb", value: 45 },
        { month: "Mar", value: 55 },
        { month: "Apr", value: 50 },
        { month: "May", value: 65 },
        { month: "Jun", value: 75 },
        { month: "Jul", value: 85 },
    ],
    satisfaction: 4.8,
};

export const mobilityData = {
    trafficDensity: [
        { time: "00:00", value: 20 },
        { time: "04:00", value: 15 },
        { time: "08:00", value: 85 },
        { time: "12:00", value: 65 },
        { time: "16:00", value: 90 },
        { time: "20:00", value: 55 },
        { time: "23:59", value: 30 },
    ],
    transitStatus: [
        { mode: "Bus", status: 92, color: "#4BAF47" },
        { mode: "Metro", status: 98, color: "#1F4E3D" },
        { mode: "Tram", status: 85, color: "#F4A261" },
    ],
    parking: [
        { name: "Occupied", value: 1240, fill: "#4BAF47" },
        { name: "Available", value: 560, fill: "#E5E7EB" },
    ],
    commuterFlow: [
        { hour: "6am", public: 4000, private: 2400 },
        { hour: "8am", public: 12000, private: 3800 },
        { hour: "10am", public: 8000, private: 3000 },
        { hour: "12pm", public: 6000, private: 2800 },
        { hour: "2pm", public: 5500, private: 2600 },
        { hour: "4pm", public: 7000, private: 3200 },
        { hour: "6pm", public: 11000, private: 4100 },
    ],
    evChargers: { available: 142, total: 180 },
};

export const energyData = {
    consumptionProduction: [
        { time: "00:00", consumption: 40, production: 30 },
        { time: "04:00", consumption: 35, production: 20 },
        { time: "08:00", consumption: 60, production: 65 },
        { time: "12:00", consumption: 80, production: 95 },
        { time: "16:00", consumption: 85, production: 80 },
        { time: "20:00", consumption: 70, production: 40 },
        { time: "23:59", consumption: 50, production: 35 },
    ],
    renewableMix: [
        { name: "Solar", value: 45, fill: "#F4A261" },
        { name: "Wind", value: 35, fill: "#4BAF47" },
        { name: "Hydro", value: 20, fill: "#1F4E3D" },
    ],
    gridLoad: Array.from({ length: 50 }, (_, i) => ({
        time: i,
        value: 50 + Math.sin(i * 0.2) * 20 + Math.random() * 5,
    })),
    batteryCapacity: 78,
    heatingStatus: { residential: 82, industrial: 65 },
};

export const healthData = {
    hospitals: [
        { name: "Central General", capacity: 85, status: "High Load" },
        { name: "North Side Clinic", capacity: 42, status: "Normal" },
        { name: "University Medical", capacity: 92, status: "Critical" },
    ],
    responseTimes: {
        ambulance: { time: "6.2", unit: "min" },
        fire: { time: "4.5", unit: "min" },
    },
    alerts: [
        { id: 1, title: "High Pollen Count", severity: "Medium" },
        { id: 2, title: "Heat Wave Warning", severity: "High" },
    ],
    budget: [
        { name: "Emergency", value: 40, fill: "#1F4E3D" },
        { name: "Preventive", value: 35, fill: "#4BAF47" },
        { name: "Research", value: 25, fill: "#86EFAC" },
    ],
};

export const educationData = {
    stats: {
        students: "42,150",
        occupancy: "92%",
        literacy: "98.4%",
    },
    enrollmentTrends: [
        { year: "2021", value: 38000 },
        { year: "2022", value: 39500 },
        { year: "2023", value: 41000 },
        { year: "2024", value: 41800 },
        { year: "2025", value: 42150 },
    ],
    resources: [
        { name: "Digital", value: 85 },
        { name: "Physical", value: 60 },
    ],
    grants: [
        { name: "STEM", value: 50, fill: "#1F4E3D" },
        { name: "Arts", value: 30, fill: "#F4A261" },
        { name: "Humanities", value: 20, fill: "#4BAF47" },
    ],
};

export const environmentData = {
    citizenStatus: {
        stationary: 75,
        infrastructure: 25,
    },
    activity: [
        { day: "M", value: 40 },
        { day: "T", value: 55 },
        { day: "W", value: 45 },
        { day: "T", value: 70 },
        { day: "F", value: 85 },
        { day: "S", value: 95 },
        { day: "S", value: 90 },
    ],
    powerDistribution: [
        { name: "Industry", value: 60, fill: "#F4A261" },
        { name: "Private", value: 40, fill: "#4BAF47" },
    ],
    waterQuality: {
        purity: 100,
        spring: 98,
        groundwater: 100,
    },
    events: [
        { id: 1, name: "City Marathon", date: "Oct 12", price: "Free" },
        { id: 2, name: "Jazz Festival", date: "Oct 15", price: "$25" },
        { id: 3, name: "Tech Summit", date: "Oct 20", price: "$150" },
    ],
};
