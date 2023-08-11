from pydantic import BaseModel

#Define the shape of the body object for sending logs for prediction
class Item(BaseModel):
    UDI: int
    Air_temperature: float
    Process_temperature: float
    Rotational_speed: int
    Torque: float
    Tool_wear: int
    TWF: int
    HDF: int
    PWF: int
    OSF: int
    RNF: int

#Define the shape of the body object for sending prediction results
class Results(BaseModel):
    prediction: int

