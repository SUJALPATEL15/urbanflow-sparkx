from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    TOMTOM_API_KEY: str
    OPENWEATHER_API_KEY: str
    OPENAQ_API_KEY: str | None = None  # Optional, required for OpenAQ v3

    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()
