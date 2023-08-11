from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Loading the variables from .env file
load_dotenv()

# Accessing the secrets
username = os.environ.get("db_username")
secret = os.environ.get("db_secret")

url = f"mongodb+srv://{username}:{secret}@eboost.luoixzu.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(url)

#sanity check confirming database connection
print("Database connection successful")

db = client.eboost_db

#collection in the database
eboost = db["eboost_collection"]
prediction_results = db["prediction_results"]