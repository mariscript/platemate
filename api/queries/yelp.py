import requests
from .keys import YELP_KEY



class YelpQueries:
    def get_yelp(self, location: str, budget: int, open_at: int, categories: str):
        url = f"https://api.yelp.com/v3/businesses/search?location={location}&term=restaurants&radius=40000&categories={categories}&price={budget}&open_at={open_at}&attributes=&sort_by=best_match&limit=50"
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
