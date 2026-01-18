from pydantic import BaseModel
from typing import Optional

class UserBase(BaseModel):
    email: str
    name: str
    city: str
    mobile: Optional[str] = None

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class UserResponse(UserBase):
    id: int
    role: str

    class Config:
        from_attributes = True
