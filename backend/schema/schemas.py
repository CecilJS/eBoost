#schema to serialise logs
def log_serializer(log) -> dict:
    return {
    "UDI": log["UDI"],
    "Air_temperature": log["Air_temperature"],
    "Process_temperature": log[ "Process_temperature"],
    "Rotational_speed": log["Rotational_speed"],
    "Torque": log["Torque"],
    "Tool_wear": log["Tool_wear"],
    "TWF": log["TWF"],
    "HDF": log["HDF"],
    "PWF": log["PWF"],
    "OSF": log["OSF"],
    "RNF": log["RNF"]
    }

def serialized_list(logs) -> list:
    return[log_serializer(log) for log in logs]

#schema to serialise predictions
def pred_serializer(prediction) -> dict:
    return {
    "prediction": prediction["prediction"]
    }


def serialized_pred(predictions) -> list:
    return[pred_serializer(prediction) for prediction in predictions]