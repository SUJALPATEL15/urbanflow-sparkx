from datetime import datetime

def get_energy_overview(city: str):
    hour = datetime.now().hour

    # 🔹 Consumption vs Production (hourly logic)
    if 0 <= hour < 6:
        consumption = 40
        production = 30
    elif 6 <= hour < 10:
        consumption = 60
        production = 55
    elif 10 <= hour < 16:
        consumption = 80
        production = 95
    elif 16 <= hour < 20:
        consumption = 85
        production = 75
    else:
        consumption = 50
        production = 35

    # 🔹 Renewable Mix (%)
    renewable_mix = {
        "solar": 42,
        "wind": 33,
        "hydro": 25
    }

    # 🔹 Real-time Grid Load (wave data)
    real_time_load = [
        {"time": "10:00", "load": 70},
        {"time": "10:05", "load": 74},
        {"time": "10:10", "load": 78},
        {"time": "10:15", "load": 76},
        {"time": "10:20", "load": 80}
    ]

    # 🔹 Battery Storage
    battery_used = min(100, consumption + 10)
    battery_status = (
        "Healthy" if battery_used < 75
        else "Moderate" if battery_used < 90
        else "Critical"
    )

    # 🔹 Sector Usage
    sector_usage = {
        "heating": 82,
        "industry": 65
    }

    # 🔹 Energy Grid Health Index
    energy_index = 100
    if consumption > production:
        energy_index -= 20
    if battery_used > 85:
        energy_index -= 20

    return {
        "city": city,
        "consumption_vs_production": {
            "consumption": consumption,
            "production": production,
            "unit": "MW"
        },
        "renewable_mix": renewable_mix,
        "real_time_load": real_time_load,
        "battery_storage": {
            "percentage": battery_used,
            "capacity": "750MWh / 960MWh",
            "status": battery_status
        },
        "sector_usage": sector_usage,
        "energy_grid_index": max(energy_index, 0)
    }
