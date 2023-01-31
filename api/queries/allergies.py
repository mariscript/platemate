from pydantic import BaseModel
from queries.pool import pool
from typing import Union


class Error(BaseModel):
    message: str


class AllergyIn(BaseModel):
    seafood: bool
    gluten_free: bool
    account_id: int


class AllergyOut(BaseModel):
    id: int
    seafood: bool
    gluten_free: bool
    account_id: int


class AllergiesOut(BaseModel):
    allergies: list[AllergyOut]


class AllergiesQueries(BaseModel):
    def create(self, allergies: AllergyIn) -> AllergyOut:
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
                        allergies.account_id],
                    )
                id = result.fetchone()[0]
                return AllergyOut(
                    id=id,
                    seafood=allergies.seafood,
                    gluten_free=allergies.gluten_free,
                    account_id=allergies.account_id,
                )

    def get_all_allergies(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id
                    , seafood
                    , gluten_free
                    , account_id
                    FROM allergies
                    """
                )
                results = []
                for row in cur.fetchall():
                    allergy = {}
                    for i, column in enumerate(cur.description):
                        allergy[column.name] = row[i]
                    results.append(allergy)
                return results

    def get_allergy_by_id(self, account_id: int):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id
                    , seafood
                    , gluten_free
                    , account_id
                    FROM allergies
                    WHERE account_id = %s;
                    """,
                    [account_id],
                )

                results = db.fetchone()
                if results is None:
                    return results
                allergy = {}
                for i, column in enumerate(db.description):
                    allergy[column.name] = results[i]
                return allergy

    def update_allergy(
        self, account_id: int, allergy: AllergyIn
    ) -> Union[AllergyOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE allergies
                        SET seafood = %s
                        , gluten_free = %s
                        , account_id = %s
                        WHERE account_id = %s
                        """,
                        [
                            allergy.seafood,
                            allergy.gluten_free,
                            allergy.account_id,
                            account_id,
                        ],
                    )
                    return self.allergy_in_to_out(account_id, allergy)
        except Exception as e:
            print(e)
            return {"message": "Could not update the allergy"}

    def allergy_in_to_out(self, id: int, allergy: AllergyIn):
        old_data = allergy.dict()
        return AllergyOut(id=id, **old_data)

    def delete_allergy(self, id: int) -> bool:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM allergies
                    WHERE id = %s
                    """,
                    [id],
                )

                return True
