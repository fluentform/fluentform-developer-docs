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
    {
        title: 'Model Reference',
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/database/models/form', 'Form'],
            ['/database/models/formmeta', 'FormMeta'],
            ['/database/models/formanalytics', 'FormAnalytics'],
            ['/database/models/submission', 'Submission'],
            ['/database/models/submissionmeta', 'SubmissionMeta'],
            ['/database/models/entry', 'Entry'],
            ['/database/models/entrydetails', 'EntryDetails'],
            ['/database/models/entrymeta', 'EntryMeta'],
            ['/database/models/transaction', 'Transaction'],
            ['/database/models/subscription', 'Subscription'],
            ['/database/models/orderitem', 'OrderItem'],
            ['/database/models/log', 'Log'],
            ['/database/models/scheduler', 'Scheduler'],
            ['/database/models/user', 'User']
        ]
    },
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
