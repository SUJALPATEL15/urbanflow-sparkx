import random

async def get_field_moisture():
    """
    Mock service for field moisture.
    """
    return {
        "surface": random.randint(20, 35),
        "rootZone": random.randint(30, 45),
        "deep": random.randint(40, 50),
        "status": "Optimal"
    }
