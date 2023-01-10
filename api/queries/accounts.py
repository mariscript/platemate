import os
from pydantic import BaseModel
from queries.pool import pool
from typing import Union


class Error(BaseModel):
    message: str

class DuplicateUserError(ValueError):
    pass

class Account(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    zipcode: str
    hashed_password: str

class AccountIn(BaseModel):
    first_name: str
    last_name: str
    email: str
    zipcode: str
    password: str

class AccountOut(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str
    zipcode: str

class AccountsOut(BaseModel):
    accounts: list[AccountOut]


class AccountsQueries:
    def get(self, email: str) -> Account:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id
                        , first_name
                        , last_name
                        , email
                        , zipcode
                        , hashed_password
                    FROM accounts
                    WHERE email = %s;
                    """,
                    [email]
                )

                # record = None
                # row = db.fetchone()
                # if row is not None:
                #     record = {}
                #     for i, column in enumerate(db.description):
                #         record[column.name] = row[i]
                # return record

                record = result.fetchone()
                if record is None:
                    return None
                return Account(
                    id=record[0],
                    first_name=record[1],
                    last_name=record[2],
                    email=record[3],
                    zipcode=record[4],
                    hashed_password=record[5],
                )

    def create(self, account: AccountIn, hashed_password: str) -> Account:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO accounts (first_name, last_name, email, zipcode, hashed_password)
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [account.first_name,
                    account.last_name,
                    account.email,
                    account.zipcode,
                    hashed_password]
                )
                id = result.fetchone()[0]
                return Account(
                    id=id,
                    first_name=account.first_name,
                    last_name=account.last_name,
                    email=account.email,
                    zipcode=account.zipcode,
                    hashed_password=hashed_password,
                )


    def get_all_accounts(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT id
                    , first_name
                    , last_name
                    , email
                    , zipcode
                    , hashed_password
                    FROM accounts;
                    """
                )
                results = []
                for row in cur.fetchall():
                    account = {}
                    for i, column in enumerate(cur.description):
                        account[column.name] = row[i]
                    results.append(account)
                return results

    def delete_account(self, id: int) -> bool:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM accounts
                    WHERE id = %s
                    """,
                    [id]
                )
                return True

    def get_account_by_id(self, id: int):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id
                    , first_name
                    , last_name
                    , email
                    , zipcode
                    , hashed_password
                    FROM accounts
                    WHERE id = %s;
                    """,
                    [id]
                )

                results = db.fetchone()
                if results is None: return results
                account = {}
                for i, column in enumerate(db.description):
                    account[column.name] = results[i]
                return account

    def update_account(self,id:int, account:AccountIn) -> Union[AccountOut,Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE accounts
                        SET first_name = %s
                        , last_name = %s
                        , email = %s
                        , zipcode = %s
                        WHERE id = %s
                        """,
                        [
                            account.first_name,
                            account.last_name,
                            account.email,
                            account.zipcode,
                            id
                        ]
                    )
                    return self.account_in_to_out(id, account)
        except Exception as e:
            print(e)
            return {"message":"Could not update the account"}

    def account_in_to_out(self, id: int, account: AccountIn):
            old_data = account.dict()
            return AccountOut(id=id, **old_data)
