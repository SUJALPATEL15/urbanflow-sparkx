import json
from pathlib import Path

BASE_PATH = Path("app/geojson")

def get_summary():
    return {
        "total_students": 42150,
        "school_occupancy": 92,
        "digital_literacy": 98.4
    }


def get_enrollment_trends():
    return [
        {"year": 2021, "students": 38000},
        {"year": 2022, "students": 39500},
        {"year": 2023, "students": 41000},
        {"year": 2024, "students": 41800},
        {"year": 2025, "students": 42150}
    ]


def get_library_resources():
    return {
        "digital": 85,
        "physical": 60
    }


def get_grant_allocation():
    return {
        "stem": 45,
        "arts": 30,
        "humanities": 25
    }


def get_school_network_map():
    try:
        with open(BASE_PATH / "schools.json") as f:
            return json.load(f)
    except FileNotFoundError:
        return {"error": "GeoJSON file not found"}


def calculate_education_index(summary):
    score = 100

    if summary["school_occupancy"] > 95:
        score -= 10

    if summary["digital_literacy"] < 95:
        score -= 10

    return max(score, 0)


def get_education_overview():
    summary = get_summary()

    return {
        "summary": summary,
        "enrollment_trends": get_enrollment_trends(),
        "library_resources": get_library_resources(),
        "grant_allocation": get_grant_allocation(),
        "school_network_map": get_school_network_map(),
        "education_index": calculate_education_index(summary)
    }
