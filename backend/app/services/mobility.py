import httpx
import random
from app.config.settings import settings

async def get_traffic_flow_segment(latitude: float, longitude: float, zoom: int = 10):
    """
    Fetch traffic flow segment data from TomTom API.
    """
    base_url = "https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute"
    url = f"{base_url}/{zoom}/json"
    
    params = {
        "key": settings.TOMTOM_API_KEY,
        "point": f"{latitude},{longitude}"
    }

    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url, params=params)
            response.raise_for_status()
            return response.json()
        except httpx.HTTPStatusError as e:
            return {"error": f"TomTom API error: {e.response.status_code}", "details": e.response.text}
        except Exception as e:
            return {"error": "Failed to fetch traffic data", "details": str(e)}

async def get_mobility_dashboard_data():
    """
    Returns aggregated mock data for the Mobility Dashboard.
    """
    # 1. Traffic Density (24h)
    traffic_density = []
    for i in range(24):
        hour = f"{i:02d}:00"
        # Peak hours at 8-9am and 5-6pm
        base_traffic = 40 + (50 if (8 <= i <= 9 or 17 <= i <= 18) else 10)
        value = base_traffic + random.randint(-5, 15)
        traffic_density.append({"time": hour, "value": value})

    # 2. Transit Status
    transit_status = [
        {"mode": "Metro", "status": 98, "color": "#4BAF47"},
        {"mode": "Bus", "status": 85, "color": "#F4A261"},
        {"mode": "Light Rail", "status": 92, "color": "#1F4E3D"},
    ]

    # 3. Parking Capacity
    parking = [
        {"name": "Occupied", "value": 1250, "fill": "#1F4E3D"},
        {"name": "Available", "value": 450, "fill": "#E5E7EB"},
    ]

    # 4. Commuter Flow
    commuter_flow = []
    for i in range(6, 22): # 6am to 10pm
        hour = f"{i:02d}:00"
        pub = 3000 + (2000 if (8 <= i <= 9 or 17 <= i <= 18) else 0) + random.randint(-200, 200)
        priv = 2500 + (1500 if (8 <= i <= 9 or 17 <= i <= 18) else 0) + random.randint(-200, 200)
        commuter_flow.append({"hour": hour, "public": pub, "private": priv})

    # 5. EV Chargers
    ev_chargers = {
        "available": 42,
        "total": 65
    }

    return {
        "trafficDensity": traffic_density,
        "transitStatus": transit_status,
        "parking": parking,
        "commuterFlow": commuter_flow,
        "evChargers": ev_chargers
    }
