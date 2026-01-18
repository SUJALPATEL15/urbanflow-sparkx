
async def get_water_source():
    """
    Mock service for water sources returning chart-friendly data.
    """
    return [
        {"name": "Rainwater", "value": 4000},
        {"name": "Municipal", "value": 2400},
        {"name": "Groundwater", "value": 1500},
        {"name": "Recycled", "value": 1000}
    ]
