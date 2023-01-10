steps = [
    [
        '''
        ALTER TABLE accounts
        RENAME COLUMN user_id TO id;
        ''',
        '''
        DROP TABLE accounts;
        '''
    ]
]
