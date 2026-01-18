from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import mobility, environment, agriculture, education, energy, air_quality, health, auth
from app.database import engine, Base

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="UrbanFlow API")

# Configure CORS
origins = [
    "http://localhost:3000",  # Next.js frontend
    "http://localhost:3001",  # Alternative frontend port
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(mobility.router, tags=["Mobility"])
app.include_router(environment.router, tags=["Environment"])
app.include_router(agriculture.router, tags=["Agriculture"])
app.include_router(education.router, tags=["Education"])
app.include_router(energy.router, tags=["Energy"])
app.include_router(air_quality.router, tags=["Air Quality"])
app.include_router(health.router, tags=["Health"])

@app.get("/")
def read_root():
    return {"message": "Welcome to UrbanFlow API", "status": "operational"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
