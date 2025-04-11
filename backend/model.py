def predict_cost(data):
    project_area = int(data.projectInfo.get("area", 1000))
    floors = int(data.projectInfo.get("floors", 1))
    total_area = project_area * floors

    materials_cost = total_area * 30  # ₹30 per sq.ft
    labor_cost = total_area * 20      # ₹20 per sq.ft
    location_cost = 10000 if data.location.get("infraAccess") else 20000
    misc = 5000

    total = materials_cost + labor_cost + location_cost + misc

    return {
        "materials": materials_cost,
        "labor": labor_cost,
        "location": location_cost,
        "misc": misc,
        "total": total
    }
