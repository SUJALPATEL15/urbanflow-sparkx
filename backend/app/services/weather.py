import httpx
from app.config.settings import settings

async def get_weather(latitude: float, longitude: float):
    """
    Fetch Weather data from OpenWeatherMap.
    """
    base_url = "https://api.openweathermap.org/data/2.5/weather"
    
    params = {
        "lat": latitude,
        "lon": longitude,
        "appid": settings.OPENWEATHER_API_KEY,
        "units": "metric"
    }

    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(base_url, params=params)
            if response.status_code == 401:
                 return {"error": "Invalid OpenWeather API Key"}
            
            response.raise_for_status()
            return response.json()
        except Exception as e:
            return {"error": "Failed to fetch Weather", "details": str(e)}
