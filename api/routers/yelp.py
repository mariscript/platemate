from fastapi import APIRouter, Depends
from queries.yelp import YelpQueries

router = APIRouter()

@router.get('/api/yelp/')
def get_yelp(repo: YelpQueries = Depends()):
    return repo.get_yelp()
