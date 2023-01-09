import requests
import os
from .keys import YELP_KEY

class YelpQueries:
    def get_yelp(self):
        url = "https://api.yelp.com/v3/businesses/search?location=new%20york%20city&term=restaurants&categories=&sort_by=best_match&limit=20"
        headers = {"Authorization": f"Bearer {YELP_KEY}"}
        res = requests.get(url, headers=headers)
        data = res.json()
        return data
