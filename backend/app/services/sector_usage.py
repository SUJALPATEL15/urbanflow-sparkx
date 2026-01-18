async def get_sector_usage():
    """
    Mock service for energy usage by sector.
    """
    return {
        "residential": 40,
        "commercial": 30,
        "industrial": 20,
        "transport": 10
    }
