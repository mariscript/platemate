from pydantic import BaseModel
from queries.pool import pool
import os

class DuplicateUserError(ValueError):
    pass

class UserIn(BaseModel):
    first_name: str
    last_name: str
    email: str
    zipcode: int
    password: str

class UserOut(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    email: str
    zipcode: int
    password: str

class UsersOut(BaseModel):
    users: list[UserOut]


class UserQueries:
    def get_all_users(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT user_id, first_name, last_name, email, zipcode, password
                    FROM users;
                    """
                )
                results = []
                # loop through the results
                # for each row, create a user
                for row in cur.fetchall():

                    # either build a dict or a UserOut
                    print('row *********', row)
                    user = {}
                    for i, column in enumerate(cur.description):
                        user[column.name] = row[i]
                    results.append(user)

                # append the user to results

                return results

    def get_user_by_id(self, user_id: int):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT user_id, first_name, last_name, email, zipcode, password
                    FROM users
                    WHERE user_id = %s;
                    """,
                    [user_id]
                )

                results = cur.fetchone()
                if results is None: return results
                user = {}
                for i, column in enumerate(cur.description):
                    user[column.name] = results[i]
                return user