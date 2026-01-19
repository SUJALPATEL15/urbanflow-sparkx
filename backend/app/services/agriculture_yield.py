import joblib
import pandas as pd
import os

# Path to your saved model
MODEL_PATH = os.path.join(os.path.dirname(__file__), '../../ml/yield_predictor_model.pkl')

# Load the model globally so it's ready
try:
    model = joblib.load(MODEL_PATH)
except FileNotFoundError:
    model = None
    print("Warning: ML Model not found. Please run backend/ml/train_model.py")

async def get_yield_forecast(soil_data: dict, weather_data: dict):
    """
    Real ML service for crop yield forecast.
    """
    if not model:
        # Return mock data if model is not loaded, to prevent frontend crash
        return [
            {"crop": "Corn", "year": 2026, "predicted_yield": 120.5},
            {"crop": "Wheat", "year": 2026, "predicted_yield": 95.2},
            {"crop": "Soybean", "year": 2026, "predicted_yield": 80.8},
            {"status": "Mock data (ML model not loaded)"}
        ]

    # Prepare input data in the same format as training
    # (In a real app, you would extract these values from the arguments)
    input_data = pd.DataFrame([{
        'nitrogen': soil_data.get('nitrogen', 50),
        'phosphorus': soil_data.get('phosphorus', 30),
        'potassium': soil_data.get('potassium', 40),
        'temperature': weather_data.get('temp', 25.0),
        'humidity': weather_data.get('humidity', 60.0)
    }])

    prediction = model.predict(input_data)[0]

    return [
        {"crop": "Corn", "year": 2026, "predicted_yield": round(prediction, 2)},
        {"status": "Prediction based on live ML model"}
    ]