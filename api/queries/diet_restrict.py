import os
from pydantic import BaseModel
from queries.pool import pool
from typing import Union
from queries.accounts import Account


class Error(BaseModel):
    message: str

# class DietRestrict(BaseModel):
#     id: int
#     vegan: bool
#     vegetarian: bool
#     halal: bool
#     account_id: int

class DietRestrictIn(BaseModel):
    vegan: bool
    vegetarian: bool
    halal: bool
    account_id: int

class DietRestrictOut(BaseModel):
    id: int
    vegan: bool
    vegetarian: bool
    halal: bool
    account_id: int

class DietRestrictsOut(BaseModel):
    diet_restricts: list[DietRestrictOut]

class DietRestrictQueries(BaseModel):
    def create(self, diet_restrict : DietRestrictIn) -> DietRestrictOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO diet_restrict (vegan, vegetarian, halal, account_id)
                    VALUES(%s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [diet_restrict.vegan,
                    diet_restrict.vegetarian,
                    diet_restrict.halal,
                    diet_restrict.account_id]
                )
                id = result.fetchone()[0]
                return DietRestrictOut(
                    id=id,
                    vegan=diet_restrict.vegan,
                    vegetarian=diet_restrict.vegetarian,
                    halal= diet_restrict.halal,
                    account_id=diet_restrict.account_id
                    )

    def get_all_diet_restricts(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id
                    , vegan
                    , vegetarian
                    , halal
                    , account_id
                    FROM diet_restrict
                    """
                )
                results = []
                for row in cur.fetchall():
                    diet_restrict = {}
                    for i, column in enumerate(cur.description):
                        diet_restrict[column.name] = row[i]
                    results.append(diet_restrict)
                return results

    def get_diet_restrict_by_id(self, id: int):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id
                    , vegan
                    , vegetarian
                    , halal
                    , account_id
                    FROM diet_restrict
                    WHERE id = %s;
                    """,
                    [id]
                )

                results = db.fetchone()
                if results is None: return results
                diet_restrict = {}
                for i, column in enumerate(db.description):
                    diet_restrict[column.name] = results[i]
                return diet_restrict



    def update_diet_restrict(self, id:int, diet_restrict:DietRestrictIn) -> Union[DietRestrictOut,Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE diet_restrict
                        SET vegan = %s
                        , vegetarian = %s
                        , halal = %s
                        , account_id = %s
                        WHERE id = %s
                        """,
                        [
                            diet_restrict.vegan,
                            diet_restrict.vegetarian,
                            diet_restrict.halal,
                            diet_restrict.account_id,
                            id
                        ]
                    )
                    return self.diet_restrict_in_to_out(id, diet_restrict)
        except Exception as e:
            print(e)
            return {"message":"Could not update the diet_restrict"}

    def diet_restrict_in_to_out(self, id: int, diet_restrict: DietRestrictIn):
        old_data =  diet_restrict.dict()
        return DietRestrictOut(id=id, **old_data)

    def delete_diet_restrict(self, id: int) -> bool:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM diet_restrict
                    WHERE id = %s
                    """,
                    [id]
                )
                return True
