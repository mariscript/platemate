import requests
import os
from .keys import YELP_KEY

class YelpQueries:
    def get_yelp(self, location: str, distance: int, budget: int, unix_time: int):
        url = f"https://api.yelp.com/v3/businesses/search?location={location}&term=restaurants&radius={distance}&categories=japanese&price={budget}&open_at={unix_time}&attributes=&sort_by=best_match&limit=20"
        headers = {"Authorization": f"Bearer {YELP_KEY}"}
        res = requests.get(url, headers=headers)
        data = res.json()
        return data

    def get_yelp_guest(self, location: str):
        url = f"https://api.yelp.com/v3/businesses/search?location={location}&term=restaurants&sort_by=best_match&limit=20"
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

    def yelp_test(self):
        url = f"https://api.yelp.com/v3/businesses/search?location=nyc&term=restaurants&sort_by=best_match&limit=20"
        headers = {"Authorization": f"Bearer {YELP_KEY}"}
        res = requests.get(url, headers=headers)
        data = res.json()
        return data
