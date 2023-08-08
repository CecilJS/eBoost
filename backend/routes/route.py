from fastapi import APIRouter
from models.eboost import Item
from config.database import collection_name
from schema.schemas import serialized_list
from bson import ObjectId
import pandas as pd
import pickle

router = APIRouter()


# Load the Gaussian Naive Bayes Model
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)


# GET Request to retrieve logs entered
@router.get("/")
async def get_log():
    logs = serialized_list(collection_name.find())
    return logs

# POST Request for logs entered
@router.post("/logs")
async def post_log(log: Item):
    collection_name.insert_one(dict(log))

# PUT Request for updating logs entered
@router.put("/{id}")
async def update_log(id: str, log: Item):
    collection_name.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(log)})

# DELETE Request for deleting logs entered
@router.delete("/{id}")
async def delete_log(id: str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})


#Define a prediction endpoint for the Gaussian Naive Bayes Model
@router.post("/predict")
async def prediction_function(body: Item):
   df= pd.DataFrame([body.dict().values()], columns=body.dict().keys())
   yhat = model.predict(df)
   return { "prediction": int(yhat) }