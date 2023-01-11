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
):
    return repo.create(diet_restrict)

@router.get("/api/diet_restricts", response_model=DietRestrictsOut)
def diet_restrict_list(queries: DietRestrictQueries = Depends()):
    return {
        "diet_restricts": queries.get_all_diet_restricts(),
    }

@router.get("/api/diet_restricts/{id}", response_model=DietRestrictOut)
def get_diet_restrict(
    id: int,
    response: Response,
    queries: DietRestrictQueries = Depends(),
):
    record = queries.get_diet_restrict_by_id(id)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.put("/api/diet_restrict/{id}", response_model=DietRestrictOut)
def update_diet_restrict(
    id: int,
    diet_restrict_in: DietRestrictIn,
    response: Response,
    queries: DietRestrictQueries = Depends(),
):
    record = queries.update_diet_restrict(id, diet_restrict_in)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.delete("/api/diet_restrict/{id}", response_model=bool)
def delete_allergy(id: int, queries: DietRestrictQueries = Depends()):
    return queries.delete_diet_restrict(id)
