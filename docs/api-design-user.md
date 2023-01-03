### Log in

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * email: string
  * password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        «key»: type»,
      },
      "token": string
    }
    ```
### Log out

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true

### CEATE a new user

* Endpoint path: /account
* Endpoint method: POST

* Headers:
    *Authorization

* Request shape (form):

* "first_name": string,
* "last_name": string,
* "email": email,
* "password": string,
* "check_password": string,
* "zip": string,

* Response: Create a user
* Response shape (JSON):
    ```json
    {
        "users": [
            {
                "first_name": string,
                "last_name": string,
                "email": email,
                "password": string,
                "zip": string,
            }
        ]
    }
    ```
### DETAIL account

* Endpoint path: /account/id
* Endpoisnt method: GET

* Headers:
    * Authorization: Bearer token

* Response: Create a new account
* Response shape (JSON):
    ```json
    {
        "user": [
            {
                "first_name": string,
                "last_name": string,
                "email": email,
                "password": string,
                "zip": string,
            }
                "allergies": {
                    "seafood": boolean,
                    "gluten_free": boolean,
                }
                "diet_restrict": {
                    "vegan": boolean,
                    "vegetarian": boolean,
                    "halal": boolean,
            }
        ]
    }
    ```
