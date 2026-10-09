from pydantic import BaseModel, Field
from typing import Optional, List

class PatientRecord(BaseModel):
    patient_id: str
    region_language: str
    symptoms: List[str]
    vitals: Optional[dict] = None
    audio_transcript: Optional[str] = None
    urgency_level: Optional[str] = Field(None, description="Classified as Low, Medium, or High")
    is_synced: bool = True

class TriageUpdate(BaseModel):
    urgency_level: str
    ai_flags: List[str]