# Data Models

_For Accounts_

### Accounts

| Name            | Type | Not Null | Primary Key |
| --------------- | ---- | -------- | ----------- |
| id              | Int  | True     | Yes         |
| first_name      | Str  | True     | No          |
| last_name       | Str  | True     | No          |
| email           | Str  | True     | No          |
| zipcode         | Str  | True     | No          |
| hashed_password | Str  | True     | No          |

### Allergies

| Name        | Type | Not Null | Primary Key |
| ----------- | ---- | -------- | ----------- |
| id          | Int  | True     | Yes         |
| seafood     | Bool | False    | No          |
| gluten_free | Bool | False    | No          |
| account_id  | Int  | True     | No          |

### Diet Restrictions

| Name       | Type | Not Null | Primary Key |
| ---------- | ---- | -------- | ----------- |
| id         | Int  | True     | Yes         |
| vegan      | Bool | False    | No          |
| vegetarian | Bool | False    | No          |
| halal      | Bool | False    | No          |
| account_id | Int  | True     | No          |
