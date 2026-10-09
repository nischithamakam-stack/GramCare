from fastapi import FastAPI, HTTPException, Depends
from motor.motor_asyncio import AsyncIOMotorDatabase
from models import PatientRecord, TriageUpdate
from database import get_database
from typing import List

app = FastAPI(title="GramCare Backend API", version="1.0.0")

@app.get("/")
async def root():
    return {"message": "Welcome to GramCare Low-Bandwidth Rural Telemedicine API"}

# 1. Endpoint to ingest patient symptoms (supports offline sync sync-ups)
@app.post("/api/records", response_model=dict)
async def create_patient_record(record: PatientRecord, db: AsyncIOMotorDatabase = Depends(get_database)):
    record_dict = record.model_dump()
    result = await db.records.insert_one(record_dict)
    return {"status": "success", "id": str(result.inserted_id), "message": "Record synced successfully"}

# 2. Endpoint to fetch prioritized queue for Doctor Dashboard
@app.get("/api/records/queue", response_model=List[dict])
async def get_prioritized_queue(db: AsyncIOMotorDatabase = Depends(get_database)):
    # Fetch records and sort them by urgency or recent entry
    cursor = db.records.find().sort("_id", -1)
    records = []
    async for document in cursor:
        document["id"] = str(document["_id"])
        del document["_id"]
        records.append(document)
    return records

# 3. Endpoint to update AI Triage results
@app.patch("/api/records/{record_id}/triage")
async def update_triage(record_id: str, triage: TriageUpdate, db: AsyncIOMotorDatabase = Depends(get_database)):
    from bson import ObjectId
    try:
        obj_id = ObjectId(record_id)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid ID format")
    
    update_result = await db.records.update_one(
        {"_id": obj_id},
        {"$set": {"urgency_level": triage.urgency_level, "ai_flags": triage.ai_flags}}
    )
    
    if update_result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Record not found")
    
    return {"status": "success", "message": "Triage updated successfully"}