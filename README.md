# Plate-Mate

_Designed and Created By_

- Zachary Macek
- Gina John
- Natalie Tang
- Marison Munoz
- Jason Olefson

_Plate Mate_ - A fun little app that provides the user with a place to eat after asking personal questions!

## Design

- [API Design](https://gitlab.com/team-4-hack-n-snack/platemate/-/blob/jason/docs/api-design.md)
- [Data Models (to be added)](url goes here)

## Intended Market

Plate-Mate was created for individuals that want to go out, either alone or with a friend, and cannot decide where to eat. Whether they do not know what is around, can't aggree on where to go, or there are just too many options, this app will help remedy that.

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

![placeholder for gif](placeholder for gif)

## Installation

1. Clone the repository down to your local machine

2. CD into the new project directory

3. Run `docker volume create platemate-data`

4. Run `docker volume create pg-admin`

5. Run `docker compose build`

6. Run `docker compose up`

7. Run `docker exec -it platemate-ghi-1 bash`

8. Run `python -m migrations up`

9. Exit the container's CLI

10. Get ready to find your new favorite restaurant on Plate-Mate!
