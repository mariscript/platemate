import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.users import UsersOut, UserOut, UserIn, UserQueries, UserOutWithPassword

class PMAuthenticator(Authenticator):
    async def get_account_data(
        self,
        email: str,
        users: UserQueries,
    ):
        return users.get(email)

    def get_account_getter(
        self,
        users: UserQueries = Depends(),
    ):
        return users

    def get_hashed_password(self, user: UserOutWithPassword):
        return user.hashed_password

    def get_user_data_for_cookie(self, user: UserOut):
        return user.email, UserOut(**user.dict())


authenticator = PMAuthenticator(os.environ["SIGNING_KEY"])