steps = [
    [
        '''
        CREATE TABLE users (
            user_id serial PRIMARY KEY NOT NULL,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL,
            zipcode INTEGER NOT NULL,
            password VARCHAR(50) NOT NULL
        );
        ''',
        '''
        DROP TABLE users;
        '''
    ]
]