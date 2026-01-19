from app.services.agriculture_yield import get_yield_forecast
from app.services.soil_health import get_soil_health
from app.services.field_moisture import get_field_moisture  # Note: logic moved to fields_geojson mostly, but keeping for reference if needed, or we use geojson service
from app.services.geojson_service import get_fields_geojson
from app.services.water_source import get_water_source
from app.services.devices import get_devices

async def get_agriculture_overview():
    # Fetch all data in parallel logically (or sequentially for simplicity first)
    # Mock weather/soil data for yield forecast input
    soil_input = {"nitrogen": 50, "phosphorus": 30, "potassium": 40}
    weather_input = {"temp": 25.0, "humidity": 60.0}

    crop_yield = await get_yield_forecast(soil_input, weather_input)
    soil = await get_soil_health()
    # Frontend expects "field_moisture_map" which seems to correspond to the geojson
    field_map = await get_fields_geojson()
    water = await get_water_source()
    devices = await get_devices()

    return {
        "crop_yield_forecast": crop_yield,
        "soil_health": soil,
        "field_moisture_map": field_map,
        "water_source": water,
        "connected_devices": devices
    }

async def predict_yield(soil_data: dict, weather_data: dict):
    return await get_yield_forecast(soil_data, weather_data)