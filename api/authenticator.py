import os
from fastapi import Depends
from datetime import timedelta
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountOut, AccountsQueries, Account


class PMAuthenticator(Authenticator):
    async def get_account_data(
        self,
        username: str,
        accounts: AccountsQueries,
    ):
        return accounts.get(username)

    def get_account_getter(
        self,
        accounts: AccountsQueries = Depends(),
    ):
        return accounts

    def get_hashed_password(self, account: Account):
        return account.hashed_password

    def get_account_data_for_cookie(self, account: Account):
        return account.email, AccountOut(**account.dict())


two_hours = timedelta(hours=2)

authenticator = PMAuthenticator(os.environ["SIGNING_KEY"], exp=two_hours)
