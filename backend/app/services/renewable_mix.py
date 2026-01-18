
async def get_renewable_mix():
    """
    Mock service for renewable energy mix returning chart-friendly data.
    """
    return [
        {"name": "Solar", "value": 35, "fill": "#F4A261"},
        {"name": "Wind", "value": 25, "fill": "#4BAF47"},
        {"name": "Hydro", "value": 15, "fill": "#1F4E3D"},
        {"name": "Geothermal", "value": 5, "fill": "#E76F51"},
        {"name": "Other", "value": 20, "fill": "#6B7280"}
    ]
