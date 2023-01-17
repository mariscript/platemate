from fastapi import APIRouter, Depends
from queries.yelp import YelpQueries
from authenticator import authenticator


router = APIRouter()

@router.get('/api/yelp/')
def get_yelp(location: str, distance: int, budget: int, unix_time: int, repo: YelpQueries = Depends()):
    return repo.get_yelp(location, distance, budget, unix_time)

@router.get('/api/yelp_guest/')
def get_yelp_guest(location: str, repo: YelpQueries = Depends()):
    return repo.get_yelp_guest(location)

@router.get('/api/yelp/{id}')
def get_yelp_by_one(id, repo: YelpQueries = Depends(), account_data: dict = Depends(authenticator.get_current_account_data)):
    return account_data,repo.get_yelp_by_id(id)

@router.get('/api/yelp_test/')
def get_yelp_guest(repo: YelpQueries = Depends(), account_data: dict = Depends(authenticator.get_current_account_data)):
    return account_data,repo.yelp_test()
