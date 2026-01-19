import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib

# 1. Load your dataset (Replace this with your actual CSV loading)
# Example structure: 'nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'crop_yield'
data = {
    'nitrogen': [90, 85, 60, 50, 95, 70],
    'phosphorus': [42, 38, 35, 20, 45, 30],
    'potassium': [43, 41, 38, 20, 42, 35],
    'temperature': [20.0, 21.0, 25.0, 28.0, 19.0, 24.0],
    'humidity': [82.0, 80.0, 70.0, 65.0, 85.0, 75.0],
    'crop_yield': [150, 145, 120, 90, 160, 110] # Target variable
}
df = pd.DataFrame(data)

# 2. Prepare Features (X) and Target (y)
X = df[['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity']]
y = df['crop_yield']

# 3. Train the Model
model = RandomForestRegressor(n_estimators=100)
model.fit(X, y)

# 4. Save the Model
joblib.dump(model, 'yield_predictor_model.pkl')
print("Model trained and saved as 'yield_predictor_model.pkl'")