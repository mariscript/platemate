from fastapi import APIRouter, Depends, Response
from authenticator import authenticator
from queries.allergies import (
    AllergyIn,
    AllergyOut,
    AllergiesQueries,
    AllergiesOut,
    Error,
)
from typing import Union


router = APIRouter()


@router.post("/api/allergies", response_model=Union[AllergyOut, Error])
def create_allergies(
    allergies: AllergyIn,
    response: Response,
    repo: AllergiesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.create(allergies)


@router.get("/api/allergies", response_model=AllergiesOut)
def allergies_list(
    queries: AllergiesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {
        "allergies": queries.get_all_allergies(),
    }


@router.get("/api/allergies/me", response_model=AllergyOut)
def get_allergy(
    response: Response,
    queries: AllergiesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    record = queries.get_allergy_by_id(account_data["id"])
    if record is None:
        response.status_code = 404
    else:
        return record


@router.put("/api/allergies/me", response_model=AllergyOut)
def update_allergy(
    allergy_in: AllergyIn,
    response: Response,
    queries: AllergiesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    record = queries.update_allergy(account_data["id"], allergy_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/allergies/me", response_model=bool)
def delete_allergy(
    queries: AllergiesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return queries.delete_allergy(account_data["id"])
