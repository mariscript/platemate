from fastapi import APIRouter, Depends, Response, Request
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from queries.allergies import AllergiesIn, AllergiesOut, AllergiesQueries, Error
from typing import List, Optional, Union
from queries.accounts import Account

router = APIRouter()

@router.post("/allergies", response_model=Union[AllergiesOut, Error])
def create_allergies(
    allergies: AllergiesIn,
    response: Response,
    repo: AllergiesQueries = Depends(),
):
    return repo.create(allergies)
