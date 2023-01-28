steps = [
    [
        '''
        ALTER TABLE accounts
        ADD UNIQUE(email);
        ''',
        '''
        DROP TABLE accounts;
        '''
    ]
]
