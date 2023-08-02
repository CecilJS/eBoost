from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import pickle


app = FastAPI()

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

# Load the Gaussian Naive Bayes Model
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)


#Define a prediction endpoint for the Gaussian Naive Bayes Model
@app.post("/predict")
async def prediction_function(body: Item):
   df= pd.DataFrame([body.dict().values()], columns=body.dict().keys())
   yhat = model.predict(df)
   return { "prediction": int(yhat) }