from fastapi import APIRouter, Depends, Response, Request
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from queries.diet_restrict import DietRestrictIn, DietRestrictOut, DietRestrictQueries, DietRestrictsOut, Error
from typing import List, Optional, Union
from queries.accounts import Account

router = APIRouter()

@router.post("/api/diet_restrict", response_model=Union[DietRestrictOut, Error])
def create_diet_restrict(
    diet_restrict: DietRestrictIn,
    response: Response,
    repo: DietRestrictQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.create(diet_restrict)

@router.get("/api/diet_restricts", response_model=DietRestrictsOut)
def diet_restrict_list(
    queries: DietRestrictQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return {
        "diet_restricts": queries.get_all_diet_restricts(),
    }

@router.get("/api/diet_restricts/me", response_model=DietRestrictOut)
def get_diet_restrict(
    response: Response,
    queries: DietRestrictQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    record = queries.get_diet_restrict_by_id(account_data['id'])
    if record is None:
        response.status_code = 404
    else:
        return record

@router.put("/api/diet_restrict/me", response_model=DietRestrictOut)
def update_diet_restrict(
    diet_restrict_in: DietRestrictIn,
    response: Response,
    queries: DietRestrictQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    record = queries.update_diet_restrict(account_data['id'], diet_restrict_in)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.delete("/api/diet_restrict/me", response_model=bool)
def delete_allergy(
    queries: DietRestrictQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    return queries.delete_diet_restrict(account_data['id'])
