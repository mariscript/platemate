#this test was by Gina

import json
from fastapi.testclient import TestClient
from queries.accounts import AccountsQueries
from main import app

client = TestClient(app=app)

class AccountQueriesMock:
    def get_all_accounts(self):
        return []

def test_account_list():
    # Arrange
    app.dependency_overrides[AccountsQueries] = AccountQueriesMock

    # Act
    res = client.get("/api/accounts")
    # Assert
    assert res.status_code == 200
    assert res.json() == {'accounts': []}

    # A cleanup
    app.dependency_overrides = {}
