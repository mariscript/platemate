import os
from pydantic import BaseModel
from queries.pool import pool
from typing import List, Optional

class DuplicateUserError(ValueError):
    pass

class Account(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    email: str
    zipcode: str
    hashed_password: str

class AccountOut(BaseModel):
    user_id: int
    first_name: str
    last_name: str
    email: str
    zipcode: str

class AccountsOut(BaseModel):
    accounts: list[AccountOut]

class AccountIn(BaseModel):
    first_name: str
    last_name: str
    email: str
    zipcode: str
    password: str

class AccountsQueries:
    def get(self, email: str) -> Account:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT user_id
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
                    user_id=record[0],
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
                    RETURNING user_id;
                    """,
                    [account.first_name,
                    account.last_name,
                    account.email,
                    account.zipcode,
                    hashed_password]
                )
                user_id = result.fetchone()[0]
                return Account(
                    user_id=user_id,
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
                    SELECT user_id
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

    # delete account
    def delete_account(self, user_id: int) -> bool:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    DELETE FROM accounts
                    WHERE user_id = %s
                    """,
                    [user_id]
                )
                return True

    def get_account_by_id(self, user_id: int):
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT user_id
                    , first_name
                    , last_name
                    , email
                    , zipcode
                    , hashed_password
                    FROM accounts
                    WHERE user_id = %s;
                    """,
                    [user_id]
                )

                results = db.fetchone()
                if results is None: return results
                account = {}
                for i, column in enumerate(db.description):
                    account[column.name] = results[i]
                return account
