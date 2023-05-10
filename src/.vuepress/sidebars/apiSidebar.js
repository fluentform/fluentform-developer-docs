module.exports = [
    {
        title: 'Rest API',
        collapsable: false,
        sidebarDepth: -1,
        children: [
            ['/api/extending-rest-api/', 'Extend Rest API']
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
