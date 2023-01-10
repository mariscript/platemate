from fastapi import APIRouter, Depends, Response, Request
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from queries.accounts import AccountOut, AccountIn, AccountsQueries, AccountsOut


class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: AccountOut

class HttpError(BaseModel):
    detail: str

router = APIRouter()

@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }

@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountsQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    account = repo.create(info, hashed_password)
    form = AccountForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())

@router.get("/api/accounts", response_model=AccountsOut)
def accounts_list(queries: AccountsQueries = Depends()):
    return {
        "accounts": queries.get_all_accounts(),
    }

@router.get("/api/accounts/{id}", response_model=AccountOut)
def get_account(
    id: int,
    response: Response,
    queries: AccountsQueries = Depends(),
):
    record = queries.get_account_by_id(id)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.put("/api/accounts/{id}", response_model=AccountOut)
def update_account(
    id: int,
    account_in: AccountIn,
    response: Response,
    queries: AccountsQueries = Depends(),
):
    record = queries.update_account(id, account_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/accounts/{id}", response_model=bool)
def delete_account(id: int, queries: AccountsQueries = Depends()):
    return queries.delete_account(id)