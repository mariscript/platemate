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

class UserOutWithPassword(UserOut):
    hashed_password: str

class UserQueries:
    def get(self, email: str) -> UserOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT user_id, first_name, last_name,
                        email, zipcode, password
                    FROM users
                """,
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]

                return record

    def create_user(self, info: UserIn, hashed_password: str) -> UserOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                params = [
                    info.first_name,
                    info.last_name,
                    info.email,
                    info.zipcode,
                    info.password,
                ]
                cur.execute(
                    """
                    INSERT INTO users (first_name, last_name, email, zipcode, password)
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING user_id, first_name, last_name, email, zipcode, password
                    """,
                    params,
                )

                record = None
                row = cur.fetchone()
                if row is not None:
                    record = {}
                    for i, column in enumerate(cur.description):
                        record[column.name] = row[i]

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
                for row in cur.fetchall():
                    print('row *********', row)
                    user = {}
                    for i, column in enumerate(cur.description):
                        user[column.name] = row[i]
                    results.append(user)

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