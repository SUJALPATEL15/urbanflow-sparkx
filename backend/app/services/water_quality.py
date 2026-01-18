import random

async def get_water_quality(latitude: float, longitude: float):
    """
    Fetch Water Quality data.
    Currently mocked as real-time global water quality APIs are rare/expensive.
    """
    # Simulate API latency
    # await asyncio.sleep(0.1) 
    
    # Generate realistic variations based on "sensor readings"
    base_purity = 95
    base_spring = 90
    base_ground = 98

    return {
        "purity": min(100, max(0, int(base_purity + random.uniform(-5, 2)))),
        "spring": min(100, max(0, int(base_spring + random.uniform(-8, 5)))),
        "groundwater": min(100, max(0, int(base_ground + random.uniform(-2, 1)))),
        "status": "Optimal",
        "last_updated": "Just now"
    }
