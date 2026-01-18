from fastapi import APIRouter
from app.services.energy_grid import get_energy_overview
from app.services.energy import get_energy_data

router = APIRouter(prefix="/energy", tags=["Energy"])

@router.get("/live")
async def get_live_energy():
    """
    Get live energy data including consumption, mix, load, storage, and usage.
    """
    return await get_energy_data()

@router.get("/overview")
def energy_overview(city: str = "Ahmedabad"):
    return get_energy_overview(city)
