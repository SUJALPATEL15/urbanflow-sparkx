import random

async def get_grid_load():
    """
    Mock service for grid load time series.
    """
    data = []
    for i in range(24):
        hour = f"{i:02d}:00"
        base_load = 50 + (30 * (1 if 8 <= i <= 20 else 0.3))
        value = base_load + random.randint(-5, 5)
        
        data.append({
            "time": hour,
            "value": value
        })
    return data
