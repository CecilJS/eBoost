from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load variables from the .env file
load_dotenv()

# Access the secrets using the os.environ dictionary
username = os.environ.get("db_username")
secret = os.environ.get("db_secret")

url = f"mongodb+srv://{username}:{secret}@eboost.luoixzu.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(url)

print("Database connection successful")

db = client.eboost_db

collection_name = db["eboost_collection"]