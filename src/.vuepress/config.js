const {description, base} = require('../../package');
const dbSchemaSidebar = require('./sidebars/db-schema');
const globalFunctionsSidebar = require('./sidebars/global-functions');
const hooksSidebar = require('./sidebars/hooks');
const helpersSidebar = require('./sidebars/helpers');
const apiSidebar = require('./sidebars/apiSidebar');
const submissionLifecycleSidebar = require('./sidebars/submissionLifecycleSidebar');

const path = require('path');

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Fluent Forms Developers',

    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#base
     */
    base: process.env.BASE === '1' ? base : undefined,

    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * Ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['link', {rel: 'icon', href: '/favicon.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['link', {rel: 'mask-icon', href: '/assets/img/logo.svg', color: '#66b1ff'}],
        ['link', {rel: 'apple-touch-icon', href: '/assets/img/logo.svg'}],
        ['meta', {name: 'theme-color', content: '#66b1ff'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['meta', {name: 'msapplication-TileImage', content: '/assets/img/icon.svg'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
        //Algolia
        ['link', {rel: 'preconnect', href: 'https://UDGQXUN0WR-dsn.algolia.net',crossorigin: ''}],
        // Fonts
        ['link', {rel: 'preconnect', href: 'https://fonts.googleapis.com'}],
        ['link', {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: ''}],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=auto'
        }],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * Ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        base: '/fluentform-developer-docs/',
        repo: 'fluentform/fluentform-developer-docs',
        docsBranch: 'main',
        docsDir: 'src',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: true,
        logo: '/assets/img/fluentform-icon1.png',
        displayAllHeaders: true,
        smoothScroll: true,
        search: false, // built in search disabled because of Algolia search
        searchPlaceholder: 'Search...',
        searchMaxSuggestions: 10,
        searchHotkeys : ['s', '/',],
        algolia: {
            apiKey: 'f407f123e9bc5c5d76a37686297b8282',
            indexName: 'developers-fluentforms',
            appId: 'UDGQXUN0WR',
        },
        nav: [
            {
                text: 'Get Started',
                link: '/getting-started/',
            },
            {
                text: 'Architecture',
                items: [
                    {
                        text: 'Database Schema',
                        link: '/database/',
                    },
                    {
                        text: 'Database Models',
                        link: '/database/models/',
                    },
                    {
                        text: 'Submission Lifecycle',
                        link: '/submission-lifecycle/',
                    }
                ],
            },
            {
                text: 'Developer Hooks',
                items: [
                    {
                        text: 'Action Hooks',
                        link: '/hooks/actions/',
                    },
                    {
                        text: 'Filter Hooks',
                        link: '/hooks/filters/',
                    },
                    {
                        text: 'Global Functions',
                        link: '/global-functions/',
                    },
                    {
                        text: 'Helpers Classes',
                        link: '/helpers/',
                    },
                    {
                        text: 'CLI',
                        link: '/cli/',
                    }
                ],
            },
            {
                text: 'API',
                items: [
                    {
                        text: 'Extending REST API',
                        link: '/api/extending-rest-api/',
                    },
                    {
                        text: 'BaseFieldManager Class',
                        link: '/api/classes/base-field-manager/'
                    },
                    {
                        text: 'IntegrationManagerController',
                        link: '/api/classes/integration-manager-controller/'
                    },
                    {
                        text: 'BaseProcessor Class',
                        link: '/api/classes/base-processor/'
                    },
                    {
                        text: 'BasePaymentMethod Class',
                        link: '/api/classes/base-payment-method/'
                    },
                    {
                        text: 'PDFTemplateManager Class',
                        link: '/api/classes/pdf-template-manager/'
                    }
                ],
            },
            {
                text: 'Blog',
                link: 'https://fluentforms.com/blog/',
            },
        ],
        sidebar: {

            '/database/': dbSchemaSidebar,
            '/global-functions/': globalFunctionsSidebar,
            '/hooks/': hooksSidebar,
            '/helpers/': helpersSidebar,
            '/api/': apiSidebar,
            '/submission-lifecycle/': submissionLifecycleSidebar,

        }
    },

    /**
     * Markdown rules.
     *
     * Ref：https://v1.vuepress.vuejs.org/config/#markdown
     */
    markdown: {
        lineNumbers: true,
        toc: true
    },

    extendMarkdown: (md) => {
        // use more markdown-it plugins!
        md.use(require('markdown-it-include'))
    },

    /**
     * Apply vue plugins.
     *
     * Ref：https://v1.vuepress.vuejs.org/plugin/
     */
    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: 'New content is available.',
                    buttonText: 'Refresh'
                }
            }
        ],
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
        [
            'vuepress-plugin-seo',
            {
                siteTitle: (_, $site) => $site.title,
                title: $page => $page.title,
                description: $page => $page.frontmatter.description,
                author: (_, $site) => $site.themeConfig.author,
                tags: $page => $page.frontmatter.tags,
                twitterCard: _ => 'summary_large_image',
                type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
                url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
                image: () => 'https://avatars.githubusercontent.com/u/71979105',
                publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
                modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
            }
        ],
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
        [ 'vuepress-plugin-sitemap1' ,
            {}
        ]
    ]
}
