/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    // {
    //     id      : 'dashboards',
    //     title   : 'Dashboards',
    //     subtitle: 'Accès rapide et template',
    //     type    : 'group',
    //     icon    : 'heroicons_outline:home',
    //     children: [
    //         {
    //             id   : 'dashboards.project',
    //             title: 'Project',
    //             type : 'basic',
    //             icon : 'heroicons_outline:clipboard-check',
    //             link : '/dashboards/project'
    //         },
    //         {
    //             id   : 'dashboards.analytics',
    //             title: 'Analytics',
    //             type : 'basic',
    //             icon : 'heroicons_outline:chart-pie',
    //             link : '/dashboards/analytics'
    //         }
    //     ]
    // },
    // {
    //     id      : 'apps',
    //     title   : 'Formations',
    //     subtitle: 'Outils de formation',
    //     type    : 'group',
    //     icon    : 'heroicons_outline:home',
    //     children: [
    //         {
    //             id   : 'apps.academy',
    //             title: 'Formations',
    //             type : 'basic',
    //             icon : 'heroicons_outline:academic-cap',
    //             link : '/apps/academy'
    //         },
    //         {
    //             id   : 'apps.contacts',
    //             title: 'Participants',
    //             type : 'basic',
    //             icon : 'heroicons_outline:user-group',
    //             link : '/apps/contacts'
    //         },
    //         {
    //             id   : 'apps.file-manager',
    //             title: 'Fichier Personnel',
    //             type : 'basic',
    //             icon : 'heroicons_outline:cloud',
    //             link : '/apps/file-manager'
    //         },
            
    //         {
    //             id   : 'apps.mailbox',
    //             title: 'Mailbox',
    //             type : 'basic',
    //             icon : 'heroicons_outline:mail',
    //             link : '/apps/mailbox',
    //             badge: {
    //                 title  : '27',
    //                 classes: 'px-2 bg-pink-600 text-white rounded-full'
    //             }
    //         },   
    //         {
    //             id   : 'apps.settings',
    //             title: 'Paramétres',
    //             type : 'basic',
    //             icon : 'heroicons_outline:cog',
    //             link : '/pages/settings'
    //         }
    //     ]
    // },  
    // {
    //     id  : 'divider-1',
    //     type: 'divider'
    // },
    {
        id      : 'custom',
        title   : 'Formations',
        subtitle: 'Outils de formation',
        type    : 'group',
        icon    : 'heroicons_outline:support',
        children: [
            {
                id   : 'categorie',
                title: 'Categorie',
                type : 'basic',
                icon : 'heroicons_outline:speakerphone',
                link : '/custom/categories'
            },
            {
                id   : 'participant',
                title: 'Participants',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/custom/participants'
            },
            {
                id   : 'personnel',
                title: 'Personnels',
                type : 'basic',
                icon : 'heroicons_outline:users',
                link : '/custom/personnels'
            },
            {
                id   : 'formation',
                title: 'Formations',
                type : 'basic',
                icon : 'heroicons_outline:academic-cap',
                link : '/custom/formations'
            },
            {
                id   : 'session',
                title: 'Sessions de formation',
                type : 'basic',
                icon : 'heroicons_outline:book-open',
                link : '/custom/sessions'
            },
            {
                id   : 'message',
                title: 'Messages',
                type : 'basic',
                icon : 'heroicons_outline:mail',
                link : '/custom/messages'
            },
            {
                id   : 'support',
                title: 'Supports',
                type : 'basic',
                icon : 'heroicons_outline:cloud',
                link : '/custom/supports'
            }
        ]
    }, 
    {
        id  : 'divider-1',
        type: 'divider'
    },
    // {
    //     id      : 'documentation',
    //     title   : 'Documentation',
    //     subtitle: 'Everything you need to know about Fuse',
    //     type    : 'group',
    //     icon    : 'heroicons_outline:support',
    //     children: [
    //         {
    //             id   : 'documentation.changelog',
    //             title: 'Changelog',
    //             type : 'basic',
    //             icon : 'heroicons_outline:speakerphone',
    //             link : '/docs/changelog',
    //             badge: {
    //                 title  : '14.2.0',
    //                 classes: 'px-2 bg-yellow-300 text-black rounded-full'
    //             }
    //         },
    //         {
    //             id   : 'documentation.guides',
    //             title: 'Guides',
    //             type : 'basic',
    //             icon : 'heroicons_outline:book-open',
    //             link : '/docs/guides'
    //         }
    //     ]
    // },
    // {
    //     id  : 'divider-2',
    //     type: 'divider'
    // }, 
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        tooltip : 'Dashboards',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        tooltip : 'UI',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        tooltip : 'Navigation',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        type    : 'group',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
