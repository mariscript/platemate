steps = [
    [
        '''
        ALTER TABLE users
        ALTER COLUMN zipcode TYPE VARCHAR(11);
        ''',
        '''
        DROP TABLE users;
        '''
    ]
]