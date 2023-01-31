steps = [
    [
        '''
        ALTER TABLE users
        ADD hashed_password VARCHAR(100);
        ''',
        '''
        DROP TABLE users;
        '''
    ]
]
