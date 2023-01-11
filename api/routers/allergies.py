from fastapi import APIRouter, Depends, Response, Request
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from queries.allergies import AllergyIn, AllergyOut, AllergiesQueries, AllergiesOut, Error
from typing import List, Optional, Union
from queries.accounts import Account

router = APIRouter()

@router.post("/api/allergies", response_model=Union[AllergyOut, Error])
def create_allergies(
    allergies: AllergyIn,
    response: Response,
    repo: AllergiesQueries = Depends(),
):
    return repo.create(allergies)

@router.get("/api/allergies", response_model=AllergiesOut)
def allergies_list(queries: AllergiesQueries = Depends()):
    return {
        "allergies": queries.get_all_allergies(),
    }

@router.get("/api/allergies/{id}", response_model=AllergyOut)
def get_allergy(
    id: int,
    response: Response,
    queries: AllergiesQueries = Depends(),
):
    record = queries.get_allergy_by_id(id)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.put("/api/allergies/{id}", response_model=AllergyOut)
def update_allergy(
    id: int,
    allergy_in: AllergyIn,
    response: Response,
    queries: AllergiesQueries = Depends(),
):
    record = queries.update_allergy(id, allergy_in)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.delete("/api/allergies/{id}", response_model=bool)
def delete_allergy(id: int, queries: AllergiesQueries = Depends()):
    return queries.delete_allergy(id)
