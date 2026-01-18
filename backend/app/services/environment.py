import asyncio
from app.services.air_quality import get_air_quality
from app.services.weather import get_weather
from app.services.water_quality import get_water_quality

async def get_environment_data(lat: float, lng: float):
    """
    Aggregate AQI, Weather, and Water Quality data.
    """
    # Run requests in parallel
    aqi_task = get_air_quality(lat, lng)
    weather_task = get_weather(lat, lng)
    water_task = get_water_quality(lat, lng)
    
    aqi_data, weather_data, water_data = await asyncio.gather(aqi_task, weather_task, water_task)
    
    return {
        "air_quality": aqi_data,
        "weather": weather_data,
        "water_quality": water_data
    }
