from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict
from .model import predict_cost


app = FastAPI()

# ✅ Add this block to enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can set specific origins like ["http://localhost:3000"] for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EstimationInput(BaseModel):
    projectInfo: Dict
    materials: Dict
    labor: Dict
    location: Dict

@app.post("/predict")
def get_cost_estimate(data: EstimationInput):
    return predict_cost(data)
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

# Serve static frontend files
app.mount("/", StaticFiles(directory="construction-estimator/dist", html=True), name="static")

@app.get("/")
async def serve_react_app():
    return FileResponse("construction-estimator/dist/index.html")
