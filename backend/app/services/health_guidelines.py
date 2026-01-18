async def get_health_guidelines():
    """
    Mock service for health guidelines.
    """
    return [
        {
            "id": 1,
            "title": "Air Quality Alert",
            "description": "AQI is moderate. Sensitive groups should reduce outdoor exertion.",
            "category": "Air Quality",
            "severity": "Moderate"
        },
        {
            "id": 2,
            "title": "Flu Season",
            "description": "Flu activity is rising. Get your flu shot and wash hands frequently.",
            "category": "General",
            "severity": "Info"
        },
        {
            "id": 3,
            "title": "Heat Wave Warning",
            "description": "High temperatures expected. Stay hydrated and avoid direct sunlight.",
            "category": "Weather",
            "severity": "High"
        },
        {
            "id": 4,
            "title": "COVID-19 Update",
            "description": "Community levels are low. Masks are optional in most indoor settings.",
            "category": "Pandemic",
            "severity": "Low"
        }
    ]
