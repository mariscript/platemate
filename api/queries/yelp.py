import requests
import os

YELP_KEY = os.environ["YELP_KEY"]

class YelpQueries:
    def get_yelp(
        self,
        location: str,
        budget: int,
        open_at: int,
        term: str,
        diet_needs: str
    ):
        url = f"https://api.yelp.com/v3/businesses/search?location={location}&term={term}&radius=40000&price={budget}&open_at={open_at}{diet_needs}&sort_by=best_match&limit=20"
        headers = {"Authorization": f"Bearer {YELP_KEY}"}
        print(url)
        res = requests.get(url, headers=headers)
        data = res.json()
        return data

    def get_yelp_by_id(self, id):
        url = f"https://api.yelp.com/v3/businesses/{id}"
        headers = {"Authorization": f"Bearer {YELP_KEY}"}
        print(url)
        res = requests.get(url, headers=headers)
        data = res.json()
        return data

    def get_yelp_by_review(self, id):
        url = f"https://api.yelp.com/v3/businesses/{id}/reviews?limit=20&sort_by=yelp_sort"
        headers = {"Authorization": f"Bearer {YELP_KEY}"}
        print(url)
        res = requests.get(url, headers=headers)
        data = res.json()
        return data
