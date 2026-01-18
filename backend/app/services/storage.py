async def get_storage_status():
    """
    Mock service for energy storage/battery status.
    """
    return {
        "capacity": 1500,  # MWh
        "currentLevel": 1200,
        "charging": True,
        "dischargeRate": 0
    }
