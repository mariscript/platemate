from fastapi import APIRouter, Depends
from queries.yelp import YelpQueries

router = APIRouter()

@router.get('/api/yelp/')
def get_yelp(location: str, distance: int, budget: int, unix_time: int, repo: YelpQueries = Depends()):
    return repo.get_yelp(location, distance, budget, unix_time)
