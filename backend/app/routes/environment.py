from fastapi import APIRouter, Query
from app.services.environment import get_environment_data

router = APIRouter()

@router.get("/environment/live")
async def get_live_environment(lat: float = Query(..., description="Latitude"), lng: float = Query(..., description="Longitude")):
    """
    Get live environment data (AQI + Weather).
    """
    return await get_environment_data(lat, lng)
