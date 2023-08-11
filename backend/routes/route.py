from fastapi import APIRouter
from models.eboost import Item
from models.eboost import Results
from config.database import eboost
from config.database import prediction_results
from schema.schemas import serialized_list
from schema.schemas import serialized_pred
from bson import ObjectId
import pandas as pd
import pickle

#set router
router = APIRouter()


# Load the Gaussian Naive Bayes Model
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)


# GET Request to retrieve logs entered
@router.get("/get-logs")
async def get_log():
    logs = serialized_list(eboost.find())
    return logs

# POST Request for logs entered
@router.post("/logs")
async def post_log(log: Item):
    eboost.insert_one(dict(log))

# POST predictions results from model
@router.post("/prediction_results")
async def post_prediction(prediction: Results):
    prediction_results.insert_one(dict(prediction))


# GET predictions results from DB
@router.get("/latest_prediction_result")
async def get_prediction():
    latest_prediction = serialized_pred(prediction_results.find().limit(1).sort([('$natural', -1)]))
    return latest_prediction[0]


# PUT Request for updating logs entered
@router.put("/{id}")
async def update_log(id: str, log: Item):
    eboost.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(log)})

# DELETE Request for deleting logs entered
@router.delete("/{id}")
async def delete_log(id: str):
    eboost.find_one_and_delete({"_id": ObjectId(id)})


#Define a prediction endpoint for the Gaussian Naive Bayes Model
@router.post("/predict")
async def prediction_function(body: Item):
   df= pd.DataFrame([body.dict().values()], columns=body.dict().keys())
   yhat = model.predict(df)
   return { "prediction": int(yhat) }