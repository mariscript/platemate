steps = [
    [
        '''
        ALTER TABLE users
        RENAME TO accounts;
        ALTER TABLE accounts
        DROP COLUMN password;
        ''',
        '''
        DROP TABLE accounts;
        '''
    ]
]