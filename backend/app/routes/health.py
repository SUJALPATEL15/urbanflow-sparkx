from fastapi import APIRouter
from app.services.hospitals import get_hospitals
from app.services.health_guidelines import get_health_guidelines
from app.services.first_aid import get_first_aid_tips

router = APIRouter(prefix="/health", tags=["Health"])

@router.get("/hospitals")
async def get_hospital_locations():
    """
    Get list of hospitals with coordinates.
    """
    return await get_hospitals()

@router.get("/guidelines")
async def get_guidelines():
    """
    Get health guidelines and advice.
    """
    return await get_health_guidelines()

@router.get("/first-aid")
async def get_first_aid():
    """
    Get basic medical knowledge / first aid tips.
    """
    return await get_first_aid_tips()
