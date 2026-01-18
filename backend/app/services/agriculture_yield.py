import random

async def get_yield_forecast():
    """
    Mock service for crop yield forecast.
    """
    return [
        {"crop": "Corn", "year": 2024, "yield": 160},
        {"crop": "Corn", "year": 2025, "yield": 155},
        {"crop": "Soybeans", "year": 2024, "yield": 50},
        {"crop": "Soybeans", "year": 2025, "yield": 52}
    ]
