module.exports = [
    {
        title: 'Database Schema',
        collapsable: false,
        sidebarDepth: -1,
        children: [
            [
                '',
                'Introduction'
            ],
            [
                '/database/models/',
                'Model Basic'
            ],
            [
                '/database/query-builder',
                'Query Builder'
            ]
        ]
    },
    // {
    //     title: 'Database Models',
    //     collapsable: true,
    //     sidebarDepth: -1,
    //     children: [
    //         [
    //             '/database/models/campaign',
    //             'Campaign Model'
    //         ]
    //     ]
    // },
    {
        title: 'Fluent ORM',
        collapsable: true,
        sidebarDepth: -1,
        children: [
            [
                '/database/orm/',
                'Getting Started'
            ],
            [
                '/database/orm/relationship',
                'Relationships'
            ],
            [
                '/database/orm/collections',
                'Collections'
            ],
            [
                '/database/orm/mutators',
                'Mutators'
            ],
            [
                '/database/orm/serialization',
                'Serialization'
            ],
        ]
    }
];
