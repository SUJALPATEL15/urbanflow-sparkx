from fastapi import APIRouter
from app.services.agriculture import get_agriculture_overview, predict_yield

router = APIRouter(prefix="/agriculture", tags=["Agriculture"])

@router.get("/overview")
async def agriculture_overview():
    return await get_agriculture_overview()

@router.get("/live")
async def agriculture_live():
    # Backward compatibility or just alias to overview
    return await get_agriculture_overview()

@router.post("/predict-yield")
async def predict_yield_route(soil_data: dict, weather_data: dict):
    return await predict_yield(soil_data, weather_data)
