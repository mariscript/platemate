import os
from pydantic import BaseModel
from queries.pool import pool
from typing import Union
from queries.accounts import Account


class Error(BaseModel):
    message: str

class Allergies(BaseModel):
    id: int
    seafood: bool
    gluten_free: bool
    account_id: int

class AllergiesIn(BaseModel):
    seafood: bool
    gluten_free: bool
    account_id: int

class AllergiesOut(BaseModel):
    id: int
    seafood: bool
    gluten_free: bool
    account_id: int

class AllergiesQueries(BaseModel):

    def create(self, allergies: AllergiesIn) -> Allergies:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO allergies (seafood, gluten_free, account_id)
                    VALUES(%s, %s, %s)
                    RETURNING id;
                    """,
                    [allergies.seafood,
                    allergies.gluten_free,
                    allergies.account_id]
                )
                id = result.fetchone()[0]
                return Allergies(
                    id=id,
                    seafood=allergies.seafood,
                    gluten_free=allergies.gluten_free,
                    account_id=allergies.account_id
                )