### Get a list of Restuarants

* Endpoint path: /restaurants
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of Restaurants
* Response shape:
    ```json
    {
      "restaurants": [
        {
          "name": string,
          "address": string,
          "phone_number": string,
          "image_url": varchar,
          "budget": smallint,
          "rating": smallint,
        }
      ]
    }
    ```
