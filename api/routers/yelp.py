from fastapi import APIRouter, Depends
from queries.yelp import YelpQueries
from datetime import datetime, time
# below needed for the mktime method
import time

router = APIRouter()
# changed open_at to accept datetime strings to avoid inputting unix 😊😊
@router.get('/api/yelp/')
def get_yelp(location: str, distance: int, budget: int, open_at: datetime, repo: YelpQueries = Depends()):
    # converting datetime to unix time, and setting the seconds to zero to make it easier.
    # example of input: 2023-1-10 19:00
    #  the 19:00 == 7:00pm
    convertedDate = time.mktime(open_at.timetuple())
    return repo.get_yelp(location, distance, budget, int(convertedDate)) 


@router.get('/api/yelp/{id}')
def get_yelp_by_one(id, repo: YelpQueries = Depends()):
    return repo.get_yelp_by_id(id)
