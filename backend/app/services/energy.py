import asyncio
from app.services.energy_consumption import get_energy_consumption
from app.services.renewable_mix import get_renewable_mix
from app.services.grid_load import get_grid_load
from app.services.storage import get_storage_status
from app.services.sector_usage import get_sector_usage

async def get_energy_data():
    """
    Aggregate all energy data into a single response.
    """
    consumption_task = get_energy_consumption()
    mix_task = get_renewable_mix()
    load_task = get_grid_load()
    storage_task = get_storage_status()
    sector_task = get_sector_usage()

    consumption, mix, load, storage, sector = await asyncio.gather(
        consumption_task, mix_task, load_task, storage_task, sector_task
    )

    return {
        "consumption": consumption,
        "renewableMix": mix,
        "gridLoad": load,
        "storage": storage,
        "sectorUsage": sector
    }
