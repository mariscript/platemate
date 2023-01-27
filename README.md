# PlateMate

_Designed and Created By:_

- Zachary Macek
- Gina John
- Natalie Tang
- Marison Munoz
- Jason Olefson

PlateMate streamlines the search for the perfect dining experience by allowing users to easily find a restaurant that meets their preferences and requirements. By answering a few questions about price range, cuisine, location and atmosphere, users are presented with a tailored list of options. With PlateMate, users can explore reviews and menus, and make a reservation or order food for pickup or delivery with just a few clicks.

**The accuracy of the results are dependent on the status of Yelp's API. Results may vary.**

## Design

- [API Design](https://gitlab.com/team-4-hack-n-snack/platemate/-/blob/jason/docs/api-design.md)
- [Data Models](https://gitlab.com/team-4-hack-n-snack/platemate/-/blob/jason/docs/DataModel.MD)
- [GHI](https://gitlab.com/team-4-hack-n-snack/platemate/-/blob/jason/docs/GHI.md)

## Intended Market

PlateMate was created for individuals that want to go out, either alone or with a friend, and cannot decide where to eat. Whether they do not know what is around, can't agree on where to go, or there are just too many options, this app will help remedy that.

## Functionality of MVP

- Visitors to our site can create an account with a username(as email) and password
  - from there, users can update thier profile to consider allergies and dietary restrictions to help the app reccomend the perfect restaurant.
  - Once that is complete, users may use the app to search for thier mystery restaurant.
  - at their profile page, users can update a multitude of profile details:
    - Name
    - Username
    - Allergies
    - Diet Restrictions
- Users can logout and login through the navbar.

## Preview

![](docs/images/PlateMate.gif)

## Installation

1. Clone the repository down to your local machine

2. Make sure [Docker Desktop](https://www.docker.com/) is installed.

3. CD into the new project directory

4. Run `docker volume create platemate-data`

5. Run `docker volume create pg-admin`

6. Run `docker compose build`

7. Run `docker compose up`

8. Run `docker exec -it platemate-ghi-1 bash`

9. Run `python -m migrations up`

10. Exit the container's CLI

11. Create a new file in queries/ named "keys.py", and insert a Yelp fusion key from the dev website. Additionally, you may use:
    `Yelp_KEY = 'PNzIq6uOZAQTE_H3PMaWuSM9I8w1FfDbleMeaOSu2Iq8gqmxw93GuZh_chrmYzZ405-VvOQEkH20KRQ0S7dJi4bnbsYFFays4wxG8kDRlOko0eafGJc5gSmWIC_DY3Yx'`

12. Get ready to find your new favorite restaurant on PlateMate!

## Test [Should provide location of tests with test author]:

- [get_allergy_by_id] / [Jason Olefson]
- [get_all_allergies] / [Zac Macek]
- [get_account_by_id] / [Marison Munoz]
- [get_all_diet_restricts] / [Natalie Tang]
- [get_all_accounts] / [Gina John]
