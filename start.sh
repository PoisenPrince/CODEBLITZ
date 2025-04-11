#!/bin/bash

cd construction-estimator
npm install
npm run build

cd ..
pip install -r requirements.txt

uvicorn backend.main:app --host=0.0.0.0 --port=10000
