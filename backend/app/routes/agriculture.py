from fastapi import APIRouter
from app.services.agriculture import get_agriculture_overview

router = APIRouter(prefix="/agriculture", tags=["Agriculture"])

@router.get("/overview")
def agriculture_overview():
    return get_agriculture_overview()

@router.get("/live")
def agriculture_live():
    # Backward compatibility or just alias to overview
    return get_agriculture_overview()
