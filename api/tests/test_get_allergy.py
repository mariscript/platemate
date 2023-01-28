# This test was Authored by jason
from fastapi.testclient import TestClient
from queries.allergies import AllergiesQueries, AllergyOut
from authenticator import authenticator
from main import app


client = TestClient(app=app)


def get_current_account_data_mock():
    return {'id': 6, "username": 'test@email.com'}


class AllergiesQueriesMock:
    def get_allergy_by_id(self, id: int) -> AllergyOut:
        if id == 6:
            return AllergyOut(
                id=6,
                seafood=True,
                gluten_free=True,
                account_id=6)
        else:
            return None


def test_allergies_list():
    # Arrange
    app.dependency_overrides[AllergiesQueries] = AllergiesQueriesMock
    app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock

    # Act
    res = client.get("/api/allergies/me")
    data = res.json()
    # Assert
    if res.status_code == 404:
        assert data['detail'] == 'Allergy not found.'
    else:
        assert res.status_code == 200
        assert data == {
            "id": 6,
            "seafood": True,
            'gluten_free': True,
            'account_id': 6
        }

    # A cleanup
    app.dependency_overrides = {}
