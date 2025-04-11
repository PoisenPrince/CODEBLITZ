# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def predict_cost(data):
    project_area = int(data.projectInfo.get("area", 1000))
    floors = int(data.projectInfo.get("floors", 1))
    
    materials_cost = project_area * 30
    labor_cost = project_area * 20
    location_cost = 10000 if data.location.get("infraAccess") else 20000
    misc = 5000

    return {
        "materials": materials_cost,
        "labor": labor_cost,
        "location": location_cost,
        "misc": misc
    }

@app.route('/predict-cost', methods=['POST'])
def cost_prediction():
    data = request.get_json()

    class InputData:
        def __init__(self, data):
            self.projectInfo = data.get('projectInfo', {})
            self.location = data.get('location', {})

    input_data = InputData(data)
    result = predict_cost(input_data)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
