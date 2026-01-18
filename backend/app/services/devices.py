import random

async def get_devices():
    """
    Mock service for connected IoT devices.
    """
    return {
        "total": 45,
        "active": 42,
        "offline": 3,
        "maintenance": 0
    }
