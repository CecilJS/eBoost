from pydantic import BaseModel

#Define the shape of the body object
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
