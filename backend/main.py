from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import uvicorn
from pydantic import BaseModel
from src import test
import os
import logging
import logging.config
from utils.load_resourses import load_image_embedding
from src.methods.search import Search

#CLIENT_PORT = os.environ["CLIENT_PORT"]


app = FastAPI()

app.mount("/dataset", StaticFiles(directory="dataset"), name="dataset")

#CORS
origin = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class request_body(BaseModel):
    query : str

class SearchResult(BaseModel):
    result_paths: list

index = load_image_embedding()

app_logger = logging.getLogger("app_logger")

#api

@app.get('/')
def main():
    return {'Message' : 'Welcome to api'}

@app.get('/{name}')
def hello(name : str):
    return {'message' : f'Welcome to api {name }'}

@app.post('/search')
async def search(data : request_body):
    try:
        search_text = data.query
        result_paths = Search(search_text, 30, index)

        result_objects = [
            {"img": 'http://localhost:8000/dataset/output/' + os.path.basename(path), "title": os.path.basename(path)}
            for path in result_paths
        ]
        return {"result_paths": result_objects}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    