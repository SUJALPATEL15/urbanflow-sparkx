from fastapi import APIRouter
from app.services.education import get_education_overview

router = APIRouter(prefix="/education", tags=["Education"])

@router.get("/overview")
def education_overview():
    return get_education_overview()

@router.get("/live")
def education_live():
    # Backward compatibility
    return get_education_overview()
