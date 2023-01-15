import requests
import os
import datetime
from .keys import YELP_KEY


# Changed open_ at to open_now, as this app is a way to find what you want to eat now
class YelpQueries:
    def get_yelp(self, location: str, distance: int, budget: int, open_at: int):
        url = f"https://api.yelp.com/v3/businesses/search?location={location}&term=restaurants&radius={distance}&categories=japanese&price={budget}&open_at={open_at}&attributes=&sort_by=best_match&limit=5"
        headers = {"Authorization": f"Bearer {YELP_KEY}"}
        res = requests.get(url, headers=headers)
        data = res.json()
        return data

    def get_yelp_by_id(self, id):
        url = f"https://api.yelp.com/v3/businesses/{id}"
        headers = {"Authorization": f"Bearer {YELP_KEY}"}
        res = requests.get(url, headers=headers)
        data = res.json()
        return data
