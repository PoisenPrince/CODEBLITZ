#!/bin/bash

# Step 1: Build the React frontend
cd construction-estimator
npm install
npm run build
cd ..

# Step 2: Install backend dependencies
pip install -r backend/requirements.txt

# Step 3: Start FastAPI backend using uvicorn
uvicorn backend.main:app --host 0.0.0.0 --port 10000
