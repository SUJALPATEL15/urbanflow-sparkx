async def get_first_aid_tips():
    """
    Mock service for basic medical knowledge / first aid.
    """
    return [
        {
            "id": 1,
            "title": "CPR Basics",
            "description": "Push hard and fast in the center of the chest. 100-120 compressions per minute.",
            "icon": "Heart"
        },
        {
            "id": 2,
            "title": "Severe Bleeding",
            "description": "Apply direct pressure to the wound with a clean cloth. Elevate the injury.",
            "icon": "Droplet"
        },
        {
            "id": 3,
            "title": "Choking",
            "description": "Perform abdominal thrusts (Heimlich maneuver) just above the navel.",
            "icon": "User"
        },
        {
            "id": 4,
            "title": "Burn Treatment",
            "description": "Cool the burn with cool (not cold) running water for at least 10 minutes.",
            "icon": "Flame"
        }
    ]
