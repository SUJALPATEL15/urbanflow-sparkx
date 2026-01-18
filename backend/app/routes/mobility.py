from fastapi import APIRouter, HTTPException, Query
from app.services.mobility import get_traffic_flow_segment, get_mobility_dashboard_data

router = APIRouter()

@router.get("/mobility/live")
async def get_live_traffic():
    """
    Get aggregated mobility data for the dashboard.
    """
    return await get_mobility_dashboard_data()

@router.get("/mobility/tomtom")
async def get_tomtom_traffic(lat: float = Query(..., description="Latitude"), lng: float = Query(..., description="Longitude")):
    """
    Get live traffic flow data from TomTom for a specific point.
    """
    data = await get_traffic_flow_segment(lat, lng)
    
    if "error" in data:
        raise HTTPException(status_code=500, detail=data["error"])
    
    return data
