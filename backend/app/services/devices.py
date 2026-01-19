import random

async def get_devices():
    """
    Mock service for connected IoT devices returning a list for the grid view.
    """
    return [
        {"name": "Soil Sensor A1", "status": "Active", "type": "Sensor", "value": "Moisture: 35%"},
        {"name": "Irrigation Node North", "status": "Active", "type": "Actuator", "value": "On"},
        {"name": "Drone Scout 1", "status": "Standby", "type": "Drone", "value": "Battery: 95%"},
        {"name": "Weather Station Main", "status": "Active", "type": "Sensor", "value": "Temp: 24°C"},
        {"name": "Soil Sensor A2", "status": "Offline", "type": "Sensor", "value": "No Signal"},
        {"name": "Irrigation Node South", "status": "Idle", "type": "Actuator", "value": "Off"}
    ]
