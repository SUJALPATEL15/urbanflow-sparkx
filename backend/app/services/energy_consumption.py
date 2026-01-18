import random

async def get_energy_consumption():
    """
    Mock service for energy consumption vs production time series.
    """
    data = []
    for i in range(24):
        hour = f"{i:02d}:00"
        # Mocking a typical curve
        base_cons = 3000 + (1000 * (1 if 8 <= i <= 20 else 0.5))
        base_prod = 3200 + (800 * (1 if 10 <= i <= 16 else 0.2)) # Solar peak
        
        consumption = base_cons + random.randint(-200, 200)
        production = base_prod + random.randint(-100, 100)
        
        data.append({
            "time": hour,
            "consumption": consumption,
            "production": production
        })
    return data
