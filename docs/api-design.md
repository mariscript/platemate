# **Plate-Mate API Design**

---

## Account

#### Create Account

- Endpoint path: `/api/accounts`
- Endpoint Method: "POST"
- Request shape:

```json
"first_name": string,
"last_name": string,
"email": string,
"zipcode": string,
"password": string
```

- Response: Account info and token
- Response shape (JSON):

```json
{
  "access_token": "string",
  "token_type": "Bearer",
  "account": {
    "id": int,
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "zipcode": "string"
  }
}
```

---

#### Get Account Details (_for when the user is logged in_)

- Endpoint path: `/api/accounts/me`
- Endpoint method: GET

- Headers:

  - Authorization: Bearer token

- Response: Details of the specific account
- Response shape (JSON):

```json
{
  "id": int,
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "zipcode": "string"
}
```

---

#### Edit profile _form_

- Endpoint path: `/api/accounts/me`
- Endpoint method: GET

- Headers:

  - Authorization: Bearer token

- Request body:

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "zipcode": "string",
  "password": "string"
}
```

- Response shape:

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "zipcode": "string",
  "password": "string"
}
```

---

### Allergies _create_

- Endpoint path: `/api/allergies`
- Endpoint method: POST

- Headers:

  - Authorization: Bearer token

- Request body:

```json
  {
  "seafood": bool,
  "gluten_free": bool,
  "account_id": int
  }
```

- Response: updated preferences
- Response shape:

```json
{
  "id": int,
  "seafood": bool,
  "gluten_free": bool,
  "account_id": int
}
```

#### Allergies _update_

- Endpoint path: `/api/allergies`
- Endpoint method: PUT

- Headers:

  - Authorization: Bearer token

- Request body:

```json
{
  "seafood": bool,
  "gluten_free": bool,
  "account_id": int
}
```

- Response: Updated allergy for the account
- Response shape:

```json
{
  "id": int,
  "seafood": bool,
  "gluten_free": bool,
  "account_id": int
}
```

---

#### Diet Restrictions _create_

- Endpoint path: `/api/diet_restrict`
- Endpoint method: POST

- Headers:

  - Authorization: Bearer token

- Request body:

```json
{
  "vegan": bool,
  "vegetarian": bool,
  "halal": bool,
  "account_id": int
}
```

- Response: Created diet restriction
- Response shape:

```json

Successful Response

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "id": int,
  "vegan": bool,
  "vegetarian": bool,
  "halal": bool,
  "account_id": int
}
```

#### Diet Restrictions _update_

- Endpoint path: `/api/diet_restrict/me`
- Endpoint method: PUT

- Headers:

  - Authorization: Bearer token

- Request body:

```json
{
  "vegan": bool,
  "vegetarian": bool,
  "halal": bool,
  "account_id": int
}
```

- Response: Updated diet restriction
- Response shape:

```json
{
  "id": int,
  "vegan": bool,
  "vegetarian": bool,
  "halal": bool,
  "account_id": int
}
```

## Login/Logout

#### _Login_

- Endpoint path: `/token`
- Endpoint method: "POST"
- Request Shape:

```json
"username": string,
"password": string
```

- Response: User info and token
- Response shape (JSON):

```json
{
  "access_token": "string",
  "token_type": "Bearer"
}
```

---

#### _Log out_

- Endpoint path: `/token`
- Endpoint method: DELETE

- Headers:

  - Authorization: Bearer token

- Response: True
- Response shape(JSON):

```json
true
```

---

### Get a list of Restuarants

- Endpoint path: /restaurants
- Endpoint method: GET

- Headers:

  - Authorization: Bearer token

- Response: A list of Restaurants
- Response shape:
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

#### YELP FUSION

### Get Yelp

- Endpoint path: /api/yelp
- Endpoint method: GET

- Request body:

```json
{
"location": string,
"budget": int,
"open_at": string($date-time),
"term": string,
"diet_needs": string
}
```

- Response: Yelp Restaurant List

### Get Yelp Guest

- Endpoint path: /api/yelp
- Endpoint method: GET

- Request body:

```json
{
  "location": string
}
```

- Response: Yelp list of businesses in target area.

### Get Yelp by One

- Endpoint path: /api/yelp/{id}
- Endpoint method: GET

- Request body:

```json
{
  "id": path,
  "session_getter": query,
  "fastapi_token": string
}
```

- Response: A single yelp business.

### Get Yelp by Review

- Endpoint path: /api/yelp/review/{id}
- Endpoint method: GET

- Request body:

```json
{
  "id": path,
  "session_getter": query,
  "fastapi_token": string
}
```

- Response: Reviews of target business.
