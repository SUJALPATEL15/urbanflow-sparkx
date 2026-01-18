import json
from pathlib import Path

BASE_PATH = Path("app/geojson")

def get_crop_yield_forecast():
    return [
        {"month": "Jan", "yield": 4200},
        {"month": "Feb", "yield": 3800},
        {"month": "Mar", "yield": 9800},
        {"month": "Apr", "yield": 4200},
        {"month": "May", "yield": 4800},
        {"month": "Jun", "yield": 3900},
        {"month": "Jul", "yield": 4400}
    ]


def get_soil_health():
    return {
        "nitrogen": 78,
        "phosphorus": 65,
        "potassium": 82,
        "recommendations": {
            "nitrogen": "Adequate",
            "phosphorus": "Low – Add fertilizer",
            "potassium": "Optimal"
        }
    }


def get_water_source():
    return {
        "rainwater": {
            "value": 62,
            "unit": "%"
        },
        "municipal": {
            "value": 38,
            "unit": "%"
        }
    }


def get_connected_devices():
    return [
        {
            "device": "Smart Irrigation",
            "zone": "A-4",
            "status": "Active",
            "impact": "Water saved: 12%"
        },
        {
            "device": "Drone Fleet",
            "count": "2 / 5",
            "status": "Charging",
            "impact": "Crop area monitored: 180 ha"
        },
        {
            "device": "Greenhouse Temperature",
            "value": "24°C",
            "status": "Optimal"
        }
    ]


def get_field_moisture_map():
    try:
        with open(BASE_PATH / "field_moisture.json") as f:
            return json.load(f)
    except FileNotFoundError:
        return {"error": "GeoJSON file not found"}


def get_agriculture_index(soil, water):
    score = 100

    if soil["phosphorus"] < 70:
        score -= 15

    if water["rainwater"]["value"] < 50:
        score -= 10

    return max(score, 0)


def get_advisories():
    return [
        "Irrigation recommended in Zone A-2",
        "Heat stress risk in next 48 hours",
        "Optimal sowing window approaching"
    ]


def get_agriculture_overview():
    soil = get_soil_health()
    water = get_water_source()

    return {
        "crop_yield_forecast": get_crop_yield_forecast(),
        "soil_health": soil,
        "field_moisture_map": get_field_moisture_map(),
        "water_source": water,
        "connected_devices": get_connected_devices(),
        "agriculture_index": get_agriculture_index(soil, water),
        "advisories": get_advisories()
    }
