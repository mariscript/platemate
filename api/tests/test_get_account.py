# This test was written by Marison 
import json
from fastapi.testclient import TestClient
from queries.accounts import AccountsQueries, AccountOut
from authenticator import authenticator
from main import app

client = TestClient(app=app)

def get_current_account_data_mock():
    return {
        'id': 789,
        'username': 'test@email.com'
    }

class GetAccountQueriesMock:
    def get_account_by_id(self, id: int) -> AccountOut:
        if id == 789:
            return AccountOut(id=7, first_name="test", last_name="test_last", email="test@email.com", zipcode="12345")
        else:
            return None

def test_get_account():
    # arrange
    app.dependency_overrides[AccountsQueries] = GetAccountQueriesMock
    app.dependency_overrides[authenticator.get_current_account_data] = get_current_account_data_mock

    # act
    res = client.get('/api/accounts/me')
    data = res.json()

    # assert
    if res.status_code == 404:
        assert data['detail'] == 'Account Not Found'
    else:
        assert res.status_code == 200
        assert data == {
            "id": 7,
            "first_name": "test",
            "last_name": "test_last",
            "email": "test@email.com",
            "zipcode": "12345"
        }

    # cleanup
    app.dependency_overrides = {}
