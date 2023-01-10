import os
from pydantic import BaseModel
from queries.pool import pool
from typing import Union


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
                    BEGIN;
                    INSERT INTO allergies (seafood, gluten_free)
                    VALUES (%s, %s)
                    RETURNING id;
                    SELECT accounts.*, allergies.*
                    FROM accounts
                    JOIN allergies
                    ON accounts.id = allergies.account_id;
                    COMMIT;
                    """,
                    [allergies.seafood,
                    allergies.gluten_free,]
                )
                id = result.fetchone()[0]
                return Allergies(
                    id=id,
                    seafood=allergies.seafood,
                    gluten_free=allergies.gluten_free,
                )
