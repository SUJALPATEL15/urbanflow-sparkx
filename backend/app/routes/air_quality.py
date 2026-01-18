from fastapi import APIRouter
from app.services.air_quality import get_city_aqi

router = APIRouter(prefix="/air-quality", tags=["Air Quality"])

@router.get("/live")
async def live_air_quality(city: str = "Ahmedabad"):
    return await get_city_aqi(city)
