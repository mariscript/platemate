# This test was by Natalie
from fastapi.testclient import TestClient
from queries.diet_restrict import DietRestrictQueries
from authenticator import authenticator
from main import app


client = TestClient(app=app)


def get_current_account_data_mock():
    return {
        'id': 77,
        'username': 'test@email.com'
    }


class DietRestrictQueriesMock:
    def get_all_diet_restricts(self):
        return []


def test_diet_restrict_list():
    # Arrange
    app.dependency_overrides[DietRestrictQueries] = DietRestrictQueriesMock
    app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock

    # Act
    res = client.get("/api/diet_restricts")
    # Assert
    assert res.status_code == 200
    assert res.json() == {'diet_restricts': []}

    # A cleanup
    app.dependency_overrides = {}
