// File: data/indianCitiesData.js

export const indianCitiesData = [
  // ========================= 1. Mumbai =========================
  {
    id: "mumbai",
    name: "Mumbai",
    systemStatus: "Online",
    overview: {
      healthScore: 78,
      keyMetrics: { publicSafety: 88, sustainability: 65, digitalConnectivity: 95 },
      statusGrid: {
        mobilitySpeed: 28, // km/h
        gridLoad: 18.2, // GW
        aqi: 145, // Moderate/Poor
        dailyRevenue: "₹45.2 Cr",
      },
      alerts: [
        { id: 1, type: "warning", message: "High tide warning for coastal areas." },
        { id: 2, type: "alert", message: "Traffic congestion on Western Express Highway." },
      ],
      economicGrowth: [
        { month: "Jan", value: 400 }, { month: "Feb", value: 450 }, { month: "Mar", value: 420 }, { month: "Apr", value: 500 }, { month: "May", value: 520 }, { month: "Jun", value: 480 }
      ],
      citizenSatisfaction: 3.9,
    },
    mobility: {
      trafficDensity24h: [
        { time: "00:00", density: 20 }, { time: "08:00", density: 85 }, { time: "12:00", density: 60 }, { time: "16:00", density: 70 }, { time: "20:00", density: 90 }
      ],
      transitStatus: { bus: 92, metro: 98, tram: 0 },
      parkingCapacity: [
        { name: "South Bombay", value: 95 }, { name: "BKC", value: 80 }, { name: "Suburbs", value: 60 }
      ],
      commuterFlow: [
         { time: "8am", public: 8000, private: 4000 }, { time: "6pm", public: 9000, private: 5000 }
      ],
      evNetwork: { available: 250, occupied: 150, reserved: 50, offline: 20 },
    },
    energy: {
      consumptionVsProduction: [
        { time: "00:00", production: 30, consumption: 40 }, { time: "12:00", production: 80, consumption: 90 }
      ],
      renewableMix: [
        { name: "Solar", value: 20 }, { name: "Wind", value: 15 }, { name: "Hydro/Other", value: 65 }
      ],
      heatingStatus: { supplyTemp: 28, returnTemp: 24 },
      storageCapacity: 65,
    },
    health: {
      hospitals: [
        { name: "KEM Hospital", general: 95, icu: 98 },
        { name: "Lilavati", general: 80, icu: 85 }
      ],
      responseTimes: { ambulance: "18:30", fireDept: "15:45" },
      aqiSensors: [
        { location: "Bandra", aqi: 140, status: "Moderate" },
        { location: "Colaba", aqi: 110, status: "Moderate" }
      ],
      alertsFeed: ["Dengue prevention drive active."],
      budgetAllocation: [{ name: "Infrastructure", value: 40 }, { name: "Services", value: 35 }, { name: "Research", value: 25 }],
    },
    education: {
      topStats: { totalStudents: "2.1M", schoolOccupancy: 92.5, digitalLiteracy: 85 },
      trendsEnrollment: [{ year: 2023, students: 2.05 }, { year: 2024, students: 2.1 }],
      libraryResources: [{ name: "Digital", value: 60 }, { name: "Physical", value: 40 }],
      grantAllocation: [{ name: "STEM", value: 45 }, { name: "Arts", value: 25 }, { name: "Humanities", value: 30 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 70, infrastructureShortage: 30 },
      activityMonitor: [{ period: "Morning", activity: 60 }, { period: "Evening", activity: 95 }],
      powerDistribution: [{ name: "Industry", value: 40 }, { name: "Private", value: 60 }],
      waterQuality: { purity: 88, spring: 90, groundwater: 82 },
      cultureEvents: [{ id: 1, name: "Kala Ghoda Arts Festival", date: "Feb 2026" }]
    },
    agriculture: {
      cropForecast: [{ month: "Jan", projected: 100, actual: 95 }, { month: "Mar", projected: 120, actual: 115 }],
      soilHealth: { nitrogen: 70, phosphorus: 65, potassium: 80 },
      iotStatus: { smartIrrigation: "Active", droneFleet: "Docked", greenhouseTemp: "26°C" },
      marketPrices: { wheat: {price: "₹24/kg", trend: "up"}, corn: {price: "₹20/kg", trend: "down"} },
      waterUsage: [{ source: "Rainwater", value: 30 }, { source: "Municipal", value: 70 }]
    }
  },

  // ========================= 2. Delhi (NCR) =========================
  {
    id: "delhi",
    name: "Delhi NCR",
    systemStatus: "Online",
    overview: {
      healthScore: 65,
      keyMetrics: { publicSafety: 82, sustainability: 55, digitalConnectivity: 92 },
      statusGrid: { mobilitySpeed: 32, gridLoad: 16.5, aqi: 310, dailyRevenue: "₹38.5 Cr" },
      alerts: [{ id: 1, type: "warning", message: "Severe Air Quality Alert. Masks recommended." }],
      economicGrowth: [{ month: "Jan", value: 380 }, { month: "Jun", value: 460 }],
      citizenSatisfaction: 3.5,
    },
    mobility: {
      trafficDensity24h: [{ time: "08:00", density: 95 }, { time: "20:00", density: 90 }],
      transitStatus: { bus: 88, metro: 99, tram: 0 },
      parkingCapacity: [{ name: "Connaught Place", value: 98 }, { name: "Gurgaon", value: 85 }],
      commuterFlow: [{ time: "8am", public: 9000, private: 6000 }],
      evNetwork: { available: 300, occupied: 200, reserved: 80, offline: 30 },
    },
    energy: {
      consumptionVsProduction: [{ time: "12:00", production: 70, consumption: 95 }],
      renewableMix: [{ name: "Solar", value: 35 }, { name: "Wind", value: 5 }, { name: "Thermal", value: 60 }],
      heatingStatus: { supplyTemp: 30, returnTemp: 26 },
      storageCapacity: 55,
    },
    health: {
      hospitals: [{ name: "AIIMS", general: 99, icu: 100 }, { name: "Max Saket", general: 85, icu: 90 }],
      responseTimes: { ambulance: "16:15", fireDept: "14:00" },
      aqiSensors: [{ location: "Anand Vihar", aqi: 350, status: "Hazardous" }],
      alertsFeed: ["Respiratory illness clinic hours extended."],
      budgetAllocation: [{ name: "Infrastructure", value: 35 }, { name: "Services", value: 40 }, { name: "Research", value: 25 }],
    },
    education: {
      topStats: { totalStudents: "1.8M", schoolOccupancy: 94, digitalLiteracy: 82 },
      trendsEnrollment: [{ year: 2024, students: 1.8 }],
      libraryResources: [{ name: "Digital", value: 55 }, { name: "Physical", value: 45 }],
      grantAllocation: [{ name: "STEM", value: 40 }, { name: "Arts", value: 30 }, { name: "Humanities", value: 30 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 65, infrastructureShortage: 35 },
      activityMonitor: [{ period: "Morning", activity: 50 }, { period: "Evening", activity: 80 }],
      powerDistribution: [{ name: "Industry", value: 45 }, { name: "Private", value: 55 }],
      waterQuality: { purity: 80, spring: 85, groundwater: 70 },
      cultureEvents: [{ id: 1, name: "Trade Fair", date: "Nov 2026" }]
    },
    agriculture: {
      cropForecast: [{ month: "Mar", projected: 140, actual: 130 }],
      soilHealth: { nitrogen: 60, phosphorus: 55, potassium: 70 },
      iotStatus: { smartIrrigation: "Active", droneFleet: "Active", greenhouseTemp: "28°C" },
      marketPrices: { wheat: {price: "₹22/kg", trend: "up"} },
      waterUsage: [{ source: "Rainwater", value: 15 }, { source: "Canal", value: 85 }]
    }
  },

  // ========================= 3. Bangalore =========================
  {
    id: "bangalore",
    name: "Bengaluru",
    systemStatus: "Online",
    overview: {
      healthScore: 82,
      keyMetrics: { publicSafety: 90, sustainability: 75, digitalConnectivity: 98 },
      statusGrid: { mobilitySpeed: 22, gridLoad: 14.0, aqi: 85, dailyRevenue: "₹32.1 Cr" },
      alerts: [{ id: 1, type: "alert", message: "Heavy rain forecast for Whitefield area." }],
      economicGrowth: [{ month: "Jan", value: 350 }, { month: "Jun", value: 440 }],
      citizenSatisfaction: 4.0,
    },
    mobility: {
      trafficDensity24h: [{ time: "09:00", density: 98 }, { time: "18:00", density: 98 }],
      transitStatus: { bus: 85, metro: 92, tram: 0 },
      parkingCapacity: [{ name: "Indiranagar", value: 95 }, { name: "Tech Parks", value: 99 }],
      commuterFlow: [{ time: "9am", public: 6000, private: 8000 }],
      evNetwork: { available: 400, occupied: 250, reserved: 100, offline: 50 },
    },
    energy: {
      consumptionVsProduction: [{ time: "12:00", production: 75, consumption: 85 }],
      renewableMix: [{ name: "Solar", value: 40 }, { name: "Wind", value: 20 }, { name: "Other", value: 40 }],
      heatingStatus: { supplyTemp: 22, returnTemp: 19 },
      storageCapacity: 80,
    },
    health: {
      hospitals: [{ name: "Narayana Health", general: 90, icu: 92 }],
      responseTimes: { ambulance: "20:00", fireDept: "18:00" },
      aqiSensors: [{ location: "MG Road", aqi: 90, status: "Satisfactory" }],
      alertsFeed: ["Pollen count high."],
      budgetAllocation: [{ name: "Infrastructure", value: 30 }, { name: "Tech Integration", value: 40 }, { name: "Services", value: 30 }],
    },
    education: {
      topStats: { totalStudents: "1.5M", schoolOccupancy: 88, digitalLiteracy: 92 },
      trendsEnrollment: [{ year: 2024, students: 1.5 }],
      libraryResources: [{ name: "Digital", value: 75 }, { name: "Physical", value: 25 }],
      grantAllocation: [{ name: "STEM", value: 60 }, { name: "Arts", value: 20 }, { name: "Humanities", value: 20 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 60, infrastructureShortage: 40 },
      activityMonitor: [{ period: "Morning", activity: 70 }, { period: "Evening", activity: 90 }],
      powerDistribution: [{ name: "Tech Parks", value: 55 }, { name: "Residential", value: 45 }],
      waterQuality: { purity: 85, spring: 70, groundwater: 65 },
      cultureEvents: [{ id: 1, name: "Bengaluru Tech Summit", date: "Nov 2026" }]
    },
    agriculture: {
      cropForecast: [{ month: "Mar", projected: 90, actual: 88 }],
      soilHealth: { nitrogen: 75, phosphorus: 70, potassium: 75 },
      iotStatus: { smartIrrigation: "Active", droneFleet: "Active", greenhouseTemp: "24°C" },
      marketPrices: { vegetables: {price: "Variable", trend: "up"} },
      waterUsage: [{ source: "Rainwater", value: 40 }, { source: "Borewell", value: 60 }]
    }
  },

  // ========================= 4. Chennai =========================
  {
    id: "chennai",
    name: "Chennai",
    systemStatus: "Online",
    overview: {
      healthScore: 80,
      keyMetrics: { publicSafety: 92, sustainability: 70, digitalConnectivity: 90 },
      statusGrid: { mobilitySpeed: 30, gridLoad: 13.5, aqi: 95, dailyRevenue: "₹28.4 Cr" },
      alerts: [{ id: 1, type: "warning", message: "Water reservoir levels critical." }],
      economicGrowth: [{ month: "Jan", value: 300 }, { month: "Jun", value: 380 }],
      citizenSatisfaction: 3.8,
    },
    mobility: {
      trafficDensity24h: [{ time: "09:00", density: 85 }, { time: "18:00", density: 90 }],
      transitStatus: { bus: 95, metro: 88, tram: 0 },
      parkingCapacity: [{ name: "T. Nagar", value: 98 }, { name: "OMR", value: 80 }],
      commuterFlow: [{ time: "9am", public: 7000, private: 5000 }],
      evNetwork: { available: 200, occupied: 100, reserved: 50, offline: 50 },
    },
    energy: {
      consumptionVsProduction: [{ time: "12:00", production: 60, consumption: 80 }],
      renewableMix: [{ name: "Solar", value: 30 }, { name: "Wind", value: 30 }, { name: "Thermal", value: 40 }],
      heatingStatus: { supplyTemp: 32, returnTemp: 28 },
      storageCapacity: 60,
    },
    health: {
      hospitals: [{ name: "Apollo", general: 92, icu: 95 }],
      responseTimes: { ambulance: "15:00", fireDept: "12:30" },
      aqiSensors: [{ location: "Adyar", aqi: 90, status: "Satisfactory" }],
      alertsFeed: ["Heatwave alert."],
      budgetAllocation: [{ name: "Infrastructure", value: 35 }, { name: "Water Management", value: 30 }, { name: "Services", value: 35 }],
    },
    education: {
      topStats: { totalStudents: "1.2M", schoolOccupancy: 90, digitalLiteracy: 88 },
      trendsEnrollment: [{ year: 2024, students: 1.2 }],
      libraryResources: [{ name: "Digital", value: 50 }, { name: "Physical", value: 50 }],
      grantAllocation: [{ name: "STEM", value: 50 }, { name: "Arts", value: 25 }, { name: "Humanities", value: 25 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 68, infrastructureShortage: 32 },
      activityMonitor: [{ period: "Morning", activity: 75 }, { period: "Evening", activity: 85 }],
      powerDistribution: [{ name: "Industry", value: 50 }, { name: "Residential", value: 50 }],
      waterQuality: { purity: 80, spring: 60, groundwater: 55 },
      cultureEvents: [{ id: 1, name: "Music Season", date: "Dec 2026" }]
    },
    agriculture: {
      cropForecast: [{ month: "Mar", projected: 85, actual: 80 }],
      soilHealth: { nitrogen: 65, phosphorus: 60, potassium: 70 },
      iotStatus: { smartIrrigation: "Active (Critical)", droneFleet: "Maintenance", greenhouseTemp: "30°C" },
      marketPrices: { rice: {price: "₹40/kg", trend: "stable"} },
      waterUsage: [{ source: "Desalination", value: 40 }, { source: "Groundwater", value: 60 }]
    }
  },

  // ========================= 5. Hyderabad =========================
  {
    id: "hyderabad",
    name: "Hyderabad",
    systemStatus: "Online",
    overview: {
      healthScore: 84,
      keyMetrics: { publicSafety: 91, sustainability: 72, digitalConnectivity: 96 },
      statusGrid: { mobilitySpeed: 35, gridLoad: 12.0, aqi: 110, dailyRevenue: "₹26.5 Cr" },
      alerts: [],
      economicGrowth: [{ month: "Jan", value: 280 }, { month: "Jun", value: 360 }],
      citizenSatisfaction: 4.1,
    },
    mobility: {
      trafficDensity24h: [{ time: "09:00", density: 88 }, { time: "18:00", density: 92 }],
      transitStatus: { bus: 80, metro: 85, tram: 0 },
      parkingCapacity: [{ name: "HITEC City", value: 90 }, { name: "Banjara Hills", value: 85 }],
      commuterFlow: [{ time: "9am", public: 5000, private: 7000 }],
      evNetwork: { available: 280, occupied: 120, reserved: 60, offline: 20 },
    },
    energy: {
      consumptionVsProduction: [{ time: "12:00", production: 55, consumption: 75 }],
      renewableMix: [{ name: "Solar", value: 35 }, { name: "Wind", value: 10 }, { name: "Other", value: 55 }],
      heatingStatus: { supplyTemp: 29, returnTemp: 25 },
      storageCapacity: 70,
    },
    health: {
      hospitals: [{ name: "Apollo Health City", general: 88, icu: 90 }],
      responseTimes: { ambulance: "17:00", fireDept: "15:00" },
      aqiSensors: [{ location: "Gachibowli", aqi: 105, status: "Moderate" }],
      alertsFeed: [],
      budgetAllocation: [{ name: "Infrastructure", value: 35 }, { name: "Pharma Support", value: 30 }, { name: "Services", value: 35 }],
    },
    education: {
      topStats: { totalStudents: "1.1M", schoolOccupancy: 89, digitalLiteracy: 90 },
      trendsEnrollment: [{ year: 2024, students: 1.1 }],
      libraryResources: [{ name: "Digital", value: 65 }, { name: "Physical", value: 35 }],
      grantAllocation: [{ name: "STEM", value: 55 }, { name: "Arts", value: 20 }, { name: "Humanities", value: 25 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 65, infrastructureShortage: 35 },
      activityMonitor: [{ period: "Morning", activity: 65 }, { period: "Evening", activity: 80 }],
      powerDistribution: [{ name: "Pharma/IT", value: 50 }, { name: "Residential", value: 50 }],
      waterQuality: { purity: 88, spring: 75, groundwater: 70 },
      cultureEvents: [{ id: 1, name: "Literary Festival", date: "Jan 2026" }]
    },
    agriculture: {
      cropForecast: [{ month: "Mar", projected: 95, actual: 92 }],
      soilHealth: { nitrogen: 70, phosphorus: 65, potassium: 75 },
      iotStatus: { smartIrrigation: "Active", droneFleet: "Active", greenhouseTemp: "27°C" },
      marketPrices: { rice: {price: "₹38/kg", trend: "up"} },
      waterUsage: [{ source: "Reservoir", value: 65 }, { source: "Groundwater", value: 35 }]
    }
  },

  // ========================= 6. Ahmedabad =========================
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    systemStatus: "Online",
    overview: {
      healthScore: 86,
      keyMetrics: { publicSafety: 93, sustainability: 78, digitalConnectivity: 91 },
      statusGrid: { mobilitySpeed: 38, gridLoad: 10.5, aqi: 120, dailyRevenue: "₹22.1 Cr" },
      alerts: [],
      economicGrowth: [{ month: "Jan", value: 250 }, { month: "Jun", value: 330 }],
      citizenSatisfaction: 4.2,
    },
    mobility: {
      trafficDensity24h: [{ time: "09:00", density: 80 }, { time: "18:00", density: 85 }],
      transitStatus: { bus: 90, metro: 82, tram: 0 },
      parkingCapacity: [{ name: "CG Road", value: 92 }, { name: "Satellite", value: 80 }],
      commuterFlow: [{ time: "9am", public: 6000, private: 6000 }],
      evNetwork: { available: 220, occupied: 100, reserved: 40, offline: 20 },
    },
    energy: {
      consumptionVsProduction: [{ time: "12:00", production: 65, consumption: 70 }],
      renewableMix: [{ name: "Solar", value: 45 }, { name: "Wind", value: 25 }, { name: "Thermal", value: 30 }],
      heatingStatus: { supplyTemp: 31, returnTemp: 27 },
      storageCapacity: 75,
    },
    health: {
      hospitals: [{ name: "Apollo", general: 85, icu: 88 }, { name: "Zydus", general: 82, icu: 85 }],
      responseTimes: { ambulance: "14:00", fireDept: "12:00" },
      aqiSensors: [{ location: "Navrangpura", aqi: 115, status: "Moderate" }],
      alertsFeed: [],
      budgetAllocation: [{ name: "Infrastructure", value: 40 }, { name: "Services", value: 35 }, { name: "Planning", value: 25 }],
    },
    education: {
      topStats: { totalStudents: "0.9M", schoolOccupancy: 88, digitalLiteracy: 89 },
      trendsEnrollment: [{ year: 2024, students: 0.9 }],
      libraryResources: [{ name: "Digital", value: 60 }, { name: "Physical", value: 40 }],
      grantAllocation: [{ name: "Business", value: 40 }, { name: "STEM", value: 40 }, { name: "Arts", value: 20 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 70, infrastructureShortage: 30 },
      activityMonitor: [{ period: "Morning", activity: 70 }, { period: "Evening", activity: 80 }],
      powerDistribution: [{ name: "Industry", value: 55 }, { name: "Residential", value: 45 }],
      waterQuality: { purity: 89, spring: 80, groundwater: 75 },
      cultureEvents: [{ id: 1, name: "Kite Festival", date: "Jan 2026" }]
    },
    agriculture: {
      cropForecast: [{ month: "Mar", projected: 110, actual: 105 }],
      soilHealth: { nitrogen: 72, phosphorus: 68, potassium: 78 },
      iotStatus: { smartIrrigation: "Active", droneFleet: "Active", greenhouseTemp: "28°C" },
      marketPrices: { cotton: {price: "Variable", trend: "up"} },
      waterUsage: [{ source: "Narmada Canal", value: 75 }, { source: "Groundwater", value: 25 }]
    }
  },

  // ========================= 7. Pune =========================
  {
    id: "pune",
    name: "Pune",
    systemStatus: "Online",
    overview: {
      healthScore: 85,
      keyMetrics: { publicSafety: 91, sustainability: 77, digitalConnectivity: 94 },
      statusGrid: { mobilitySpeed: 26, gridLoad: 11.0, aqi: 90, dailyRevenue: "₹20.5 Cr" },
      alerts: [],
      economicGrowth: [{ month: "Jan", value: 220 }, { month: "Jun", value: 300 }],
      citizenSatisfaction: 4.1,
    },
    mobility: {
      trafficDensity24h: [{ time: "09:00", density: 90 }, { time: "18:00", density: 92 }],
      transitStatus: { bus: 88, metro: 80, tram: 0 },
      parkingCapacity: [{ name: "FC Road", value: 98 }, { name: "Hinjewadi", value: 90 }],
      commuterFlow: [{ time: "9am", public: 5500, private: 6500 }],
      evNetwork: { available: 200, occupied: 110, reserved: 50, offline: 30 },
    },
    energy: {
      consumptionVsProduction: [{ time: "12:00", production: 50, consumption: 65 }],
      renewableMix: [{ name: "Solar", value: 30 }, { name: "Wind", value: 25 }, { name: "Hydro", value: 45 }],
      heatingStatus: { supplyTemp: 26, returnTemp: 22 },
      storageCapacity: 72,
    },
    health: {
      hospitals: [{ name: "Ruby Hall Clinic", general: 90, icu: 92 }],
      responseTimes: { ambulance: "16:00", fireDept: "14:00" },
      aqiSensors: [{ location: "Shivajinagar", aqi: 95, status: "Satisfactory" }],
      alertsFeed: [],
      budgetAllocation: [{ name: "Infrastructure", value: 35 }, { name: "Education", value: 35 }, { name: "Services", value: 30 }],
    },
    education: {
      topStats: { totalStudents: "1.0M", schoolOccupancy: 90, digitalLiteracy: 93 },
      trendsEnrollment: [{ year: 2024, students: 1.0 }],
      libraryResources: [{ name: "Digital", value: 70 }, { name: "Physical", value: 30 }],
      grantAllocation: [{ name: "STEM", value: 50 }, { name: "Arts", value: 25 }, { name: "Humanities", value: 25 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 65, infrastructureShortage: 35 },
      activityMonitor: [{ period: "Morning", activity: 75 }, { period: "Evening", activity: 85 }],
      powerDistribution: [{ name: "IT/Auto", value: 50 }, { name: "Residential", value: 50 }],
      waterQuality: { purity: 87, spring: 80, groundwater: 78 },
      cultureEvents: [{ id: 1, name: "Music Festival", date: "Dec 2026" }]
    },
    agriculture: {
      cropForecast: [{ month: "Mar", projected: 100, actual: 98 }],
      soilHealth: { nitrogen: 75, phosphorus: 70, potassium: 75 },
      iotStatus: { smartIrrigation: "Active", droneFleet: "Available", greenhouseTemp: "25°C" },
      marketPrices: { sugarcane: {price: "Stable", trend: "stable"} },
      waterUsage: [{ source: "Dams", value: 70 }, { source: "Groundwater", value: 30 }]
    }
  },

  // ========================= 8. Kolkata =========================
  {
    id: "kolkata",
    name: "Kolkata",
    systemStatus: "Online",
    overview: {
      healthScore: 76,
      keyMetrics: { publicSafety: 88, sustainability: 68, digitalConnectivity: 87 },
      statusGrid: { mobilitySpeed: 24, gridLoad: 11.5, aqi: 155, dailyRevenue: "₹21.8 Cr" },
      alerts: [{ id: 1, type: "warning", message: "Air quality deteriorating." }],
      economicGrowth: [{ month: "Jan", value: 230 }, { month: "Jun", value: 310 }],
      citizenSatisfaction: 3.9,
    },
    mobility: {
      trafficDensity24h: [{ time: "09:00", density: 88 }, { time: "18:00", density: 90 }],
      transitStatus: { bus: 90, metro: 95, tram: 60 },
      parkingCapacity: [{ name: "Park Street", value: 95 }, { name: "Salt Lake", value: 85 }],
      commuterFlow: [{ time: "9am", public: 7500, private: 4500 }],
      evNetwork: { available: 150, occupied: 80, reserved: 30, offline: 40 },
    },
    energy: {
      consumptionVsProduction: [{ time: "12:00", production: 55, consumption: 70 }],
      renewableMix: [{ name: "Solar", value: 20 }, { name: "Wind", value: 10 }, { name: "Thermal", value: 70 }],
      heatingStatus: { supplyTemp: 30, returnTemp: 27 },
      storageCapacity: 50,
    },
    health: {
      hospitals: [{ name: "AMRI", general: 88, icu: 90 }],
      responseTimes: { ambulance: "19:00", fireDept: "17:00" },
      aqiSensors: [{ location: "Victoria Memorial", aqi: 140, status: "Moderate" }],
      alertsFeed: [],
      budgetAllocation: [{ name: "Infrastructure", value: 30 }, { name: "Services", value: 40 }, { name: "Heritage", value: 30 }],
    },
    education: {
      topStats: { totalStudents: "1.1M", schoolOccupancy: 91, digitalLiteracy: 84 },
      trendsEnrollment: [{ year: 2024, students: 1.1 }],
      libraryResources: [{ name: "Digital", value: 40 }, { name: "Physical", value: 60 }],
      grantAllocation: [{ name: "Arts", value: 45 }, { name: "STEM", value: 35 }, { name: "Commerce", value: 20 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 75, infrastructureShortage: 25 },
      activityMonitor: [{ period: "Morning", activity: 60 }, { period: "Evening", activity: 85 }],
      powerDistribution: [{ name: "Industry", value: 45 }, { name: "Residential", value: 55 }],
      waterQuality: { purity: 82, spring: 75, groundwater: 70 },
      cultureEvents: [{ id: 1, name: "Durga Puja", date: "Oct 2026" }]
    },
    agriculture: {
      cropForecast: [{ month: "Mar", projected: 120, actual: 115 }],
      soilHealth: { nitrogen: 80, phosphorus: 75, potassium: 80 },
      iotStatus: { smartIrrigation: "Developing", droneFleet: "Minimal", greenhouseTemp: "28°C" },
      marketPrices: { rice: {price: "₹35/kg", trend: "stable"} },
      waterUsage: [{ source: "River", value: 80 }, { source: "Groundwater", value: 20 }]
    }
  },

  // ========================= 9. Jaipur =========================
  {
    id: "jaipur",
    name: "Jaipur",
    systemStatus: "Online",
    overview: {
      healthScore: 83,
      keyMetrics: { publicSafety: 92, sustainability: 74, digitalConnectivity: 89 },
      statusGrid: { mobilitySpeed: 34, gridLoad: 9.5, aqi: 105, dailyRevenue: "₹15.2 Cr" },
      alerts: [],
      economicGrowth: [{ month: "Jan", value: 180 }, { month: "Jun", value: 250 }],
      citizenSatisfaction: 4.2,
    },
    mobility: {
      trafficDensity24h: [{ time: "09:00", density: 80 }, { time: "18:00", density: 85 }],
      transitStatus: { bus: 85, metro: 75, tram: 0 },
      parkingCapacity: [{ name: "Walled City", value: 99 }, { name: "C-Scheme", value: 85 }],
      commuterFlow: [{ time: "9am", public: 4000, private: 5000 }],
      evNetwork: { available: 180, occupied: 80, reserved: 30, offline: 20 },
    },
    energy: {
      consumptionVsProduction: [{ time: "12:00", production: 60, consumption: 65 }],
      renewableMix: [{ name: "Solar", value: 55 }, { name: "Wind", value: 15 }, { name: "Other", value: 30 }],
      heatingStatus: { supplyTemp: 33, returnTemp: 29 },
      storageCapacity: 65,
    },
    health: {
      hospitals: [{ name: "SMS Hospital", general: 95, icu: 98 }],
      responseTimes: { ambulance: "15:00", fireDept: "13:00" },
      aqiSensors: [{ location: "Ajmeri Gate", aqi: 110, status: "Moderate" }],
      alertsFeed: ["Heatwave warning."],
      budgetAllocation: [{ name: "Infrastructure", value: 30 }, { name: "Tourism", value: 40 }, { name: "Services", value: 30 }],
    },
    education: {
      topStats: { totalStudents: "0.7M", schoolOccupancy: 89, digitalLiteracy: 86 },
      trendsEnrollment: [{ year: 2024, students: 0.7 }],
      libraryResources: [{ name: "Digital", value: 55 }, { name: "Physical", value: 45 }],
      grantAllocation: [{ name: "Arts", value: 40 }, { name: "STEM", value: 35 }, { name: "Humanities", value: 25 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 72, infrastructureShortage: 28 },
      activityMonitor: [{ period: "Morning", activity: 65 }, { period: "Evening", activity: 80 }],
      powerDistribution: [{ name: "Tourism", value: 45 }, { name: "Residential", value: 55 }],
      waterQuality: { purity: 84, spring: 70, groundwater: 60 },
      cultureEvents: [{ id: 1, name: "Literature Festival", date: "Jan 2026" }]
    },
    agriculture: {
      cropForecast: [{ month: "Mar", projected: 70, actual: 68 }],
      soilHealth: { nitrogen: 60, phosphorus: 55, potassium: 70 },
      iotStatus: { smartIrrigation: "Highly Active", droneFleet: "Active", greenhouseTemp: "30°C" },
      marketPrices: { mustard: {price: "Variable", trend: "up"} },
      waterUsage: [{ source: "Groundwater", value: 70 }, { source: "Canal", value: 30 }]
    }
  },

  // ========================= 10. Surat =========================
  {
    id: "surat",
    name: "Surat",
    systemStatus: "Online",
    overview: {
      healthScore: 89,
      keyMetrics: { publicSafety: 94, sustainability: 82, digitalConnectivity: 93 },
      statusGrid: { mobilitySpeed: 40, gridLoad: 8.5, aqi: 80, dailyRevenue: "₹18.8 Cr" },
      alerts: [],
      economicGrowth: [{ month: "Jan", value: 200 }, { month: "Jun", value: 290 }],
      citizenSatisfaction: 4.4,
    },
    mobility: {
      trafficDensity24h: [{ time: "09:00", density: 75 }, { time: "18:00", density: 80 }],
      transitStatus: { bus: 92, metro: 70, tram: 0 },
      parkingCapacity: [{ name: "Diamond Market", value: 95 }, { name: "Textile Market", value: 92 }],
      commuterFlow: [{ time: "9am", public: 5000, private: 5500 }],
      evNetwork: { available: 210, occupied: 90, reserved: 40, offline: 10 },
    },
    energy: {
      consumptionVsProduction: [{ time: "12:00", production: 58, consumption: 62 }],
      renewableMix: [{ name: "Solar", value: 40 }, { name: "Wind", value: 20 }, { name: "Thermal", value: 40 }],
      heatingStatus: { supplyTemp: 30, returnTemp: 26 },
      storageCapacity: 78,
    },
    health: {
      hospitals: [{ name: "New Civil Hospital", general: 90, icu: 92 }],
      responseTimes: { ambulance: "13:00", fireDept: "11:00" },
      aqiSensors: [{ location: "Adajan", aqi: 75, status: "Good" }],
      alertsFeed: [],
      budgetAllocation: [{ name: "Infrastructure", value: 45 }, { name: "Services", value: 30 }, { name: "Sanitation", value: 25 }],
    },
    education: {
      topStats: { totalStudents: "0.6M", schoolOccupancy: 90, digitalLiteracy: 91 },
      trendsEnrollment: [{ year: 2024, students: 0.6 }],
      libraryResources: [{ name: "Digital", value: 65 }, { name: "Physical", value: 35 }],
      grantAllocation: [{ name: "Commerce", value: 45 }, { name: "STEM", value: 35 }, { name: "Arts", value: 20 }],
    },
    environment: {
      citizenStatus: { stationaryStay: 75, infrastructureShortage: 25 },
      activityMonitor: [{ period: "Morning", activity: 65 }, { period: "Evening", activity: 85 }],
      powerDistribution: [{ name: "Industry", value: 60 }, { name: "Residential", value: 40 }],
      waterQuality: { purity: 92, spring: 85, groundwater: 80 },
      cultureEvents: []
    },
    agriculture: {
      cropForecast: [{ month: "Mar", projected: 115, actual: 112 }],
      soilHealth: { nitrogen: 78, phosphorus: 75, potassium: 80 },
      iotStatus: { smartIrrigation: "Active", droneFleet: "Active", greenhouseTemp: "27°C" },
      marketPrices: { sugarcane: {price: "Stable", trend: "stable"} },
      waterUsage: [{ source: "Canal", value: 80 }, { source: "Groundwater", value: 20 }]
    }
  },
];