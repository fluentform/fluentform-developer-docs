module.exports = [
    {
        title: 'Rest API',
        collapsable: false,
        sidebarDepth: -1,
        children: [
            ['/api/extending-rest-api/', 'Extend Rest API'],
            ['/api/endpoints/', 'Endpoint Reference']
        ]
    },
    {
        title: 'Endpoint Reference',
        collapsable: true,
        sidebarDepth: 0,
        children: [
            ['/api/endpoints/forms', 'Forms'],
            ['/api/endpoints/settings', 'Form Settings'],
            ['/api/endpoints/submissions', 'Submissions'],
            ['/api/endpoints/integrations', 'Integrations'],
            ['/api/endpoints/global-settings', 'Global Settings'],
            ['/api/endpoints/managers', 'Managers'],
            ['/api/endpoints/roles', 'Roles'],
            ['/api/endpoints/analytics', 'Analytics'],
            ['/api/endpoints/report', 'Reports'],
            ['/api/endpoints/logs', 'Logs'],
            ['/api/endpoints/form-submit', 'Form Submit'],
            ['/api/endpoints/global-search', 'Global Search'],
            ['/api/endpoints/suggested-plugins', 'Suggested Plugins'],
            ['/api/endpoints/notice', 'Notice']
        ]
    },
    {
        title: 'Reference API Classes',
        collapsable: false,
        sidebarDepth: 1,
        children: [
            {
                title: 'BaseFieldManager',
                children: ['classes/base-field-manager/']
            },
            {
                title: 'IntegrationManagerController',
                children: ['classes/integration-manager-controller/']
            },
            {
                title: 'BaseProcessor',
                children: ['classes/base-processor/']
            },
            {
                title: 'BasePaymentMethod',
                children: ['classes/base-payment-method/']
            },
            {
                title: 'PDFTemplateManager',
                children: ['classes/pdf-template-manager/'],
            },
        ]
    },
];
