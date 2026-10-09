import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "gramcare_db")

client = AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]

async def get_database():
    return database