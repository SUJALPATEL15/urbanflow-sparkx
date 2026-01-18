import random

async def get_soil_health():
    """
    Mock service for soil health.
    """
    return {
        "nitrogen": random.randint(40, 60),
        "phosphorus": random.randint(20, 30),
        "potassium": random.randint(150, 200),
        "ph": round(random.uniform(6.0, 7.5), 1),
        "organicMatter": round(random.uniform(2.5, 4.0), 1),
        "status": "Healthy"
    }
