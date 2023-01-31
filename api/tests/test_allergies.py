# This test was Authored by Zac
from fastapi.testclient import TestClient
from queries.allergies import AllergiesQueries
from authenticator import authenticator
from main import app


client = TestClient(app=app)


def get_current_account_data_mock():
    return {
        'id': 100,
        'username': 'test@email.com'
    }


class AllergiesQueriesMock:
    def get_all_allergies(self):
        return []


def test_allergies_list():
    # Arrange
    app.dependency_overrides[AllergiesQueries] = AllergiesQueriesMock
    app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock

    # Act
    res = client.get("/api/allergies")
    # Assert
    assert res.status_code == 200
    assert res.json() == {'allergies': []}

    # A cleanup
    app.dependency_overrides = {}
