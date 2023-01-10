steps = [
    [
        """
        CREATE TABLE allergies (
            id SERIAL PRIMARY KEY NOT NULL,
            seafood BOOLEAN NOT NULL DEFAULT FALSE,
            gluten_free BOOLEAN NOT NULL DEFAULT FALSE,
            account_id INTEGER UNIQUE REFERENCES accounts(id)
        );
        """,
        """
        DROP TABLE allergies;
        """
    ],
    [
        """
        CREATE TABLE diet_restrict (
            id SERIAL PRIMARY KEY NOT NULL,
            vegan BOOLEAN NOT NULL DEFAULT FALSE,
            vegetarian BOOLEAN NOT NULL DEFAULT FALSE,
            halal BOOLEAN NOT NULL DEFAULT FALSE,
            account_id INTEGER UNIQUE REFERENCES accounts(id)
        );
        """,
        """
        DROP TABLE diet_restrict;
        """
    ]
]
