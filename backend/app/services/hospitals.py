async def get_hospitals():
    """
    Mock service for hospital locations.
    """
    return [
        {
            "id": 1,
            "name": "City General Hospital",
            "type": "General",
            "lat": 37.7749,
            "lng": -122.4194,
            "address": "1001 Potrero Ave, San Francisco, CA 94110"
        },
        {
            "id": 2,
            "name": "St. Mary's Medical Center",
            "type": "Specialty",
            "lat": 37.773972,
            "lng": -122.453056,
            "address": "450 Stanyan St, San Francisco, CA 94117"
        },
        {
            "id": 3,
            "name": "UCSF Medical Center",
            "type": "University",
            "lat": 37.7631,
            "lng": -122.4580,
            "address": "505 Parnassus Ave, San Francisco, CA 94143"
        },
        {
            "id": 4,
            "name": "San Francisco VA Medical Center",
            "type": "Government",
            "lat": 37.7820,
            "lng": -122.5050,
            "address": "4150 Clement St, San Francisco, CA 94121"
        },
        {
            "id": 5,
            "name": "Kaiser Permanente",
            "type": "Private",
            "lat": 37.7836,
            "lng": -122.4415,
            "address": "2425 Geary Blvd, San Francisco, CA 94115"
        }
    ]
