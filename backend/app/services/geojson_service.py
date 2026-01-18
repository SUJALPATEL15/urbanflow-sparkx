import json
import os

async def get_fields_geojson():
    """
    Reads and returns the GeoJSON data from fields.json.
    """
    file_path = os.path.join("app", "geojson", "fields.json")
    try:
        with open(file_path, "r") as f:
            data = json.load(f)
        return data
    except Exception as e:
        print(f"Error reading GeoJSON: {e}")
        return {"type": "FeatureCollection", "features": []}
