import { Routes } from "@angular/router";

export const content: Routes = [
    {
        path: 'dashboard',
        data: {
            title: "Dashboard",
            breadcrumb: "Dashboard",
        },
        loadChildren: () => import('../../components/dashboard/dashboard.routes'),
    },
    {
        path: 'widgets',
        data: {
            title: "Widgets",
            breadcrumb: "Widgets",
        },
        loadChildren: () => import('../../components/widgets/widgets.routes'),
    },
    {
        path: 'page-layout',
        data: {
            title: "Page Layout",
            breadcrumb: "Page Layout",
        },
        loadChildren: () => import('../../components/page-layout/page-layout.routes'),
    },
    {
        path: 'project',
        data: {
            title: "Widgets",
            breadcrumb: "Project",
        },
        loadChildren: () => import('../../components/project/project.routes'),
    },
    {
        path: 'file-manager',
        data: {
            title: "Widgets",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/file-manager/file-manager.routes'),
    },
    {
        path: 'ecommerce',
        data: {
            title: "ECommerce",
            breadcrumb: "ECommerce",
        },
        loadChildren: () => import('../../components/e-commerce/e-commerce.routes'),
    },
    {
        path: 'letter-box',
        data: {
            title: "Email",
            breadcrumb: "Email",
        },
        loadChildren: () => import('../../components/letter-box/letter-box.routes'),
    },
    {
        path: 'invoice',
        data: {
            title: "Ecommerce",
            breadcrumb: "Ecommerce",
        },
        loadChildren: () => import('../../components/invoice/invoice.routes'),
    },
    {
        path: 'chat',
        data: {
            title: "Chat",
            breadcrumb: "Chat",
        },
        loadChildren: () => import('../../components/chat/chat.routes'),
    },
    {
        path: 'user',
        data: {
            title: "Users",
            breadcrumb: "Users",
        },
        loadChildren: () => import('../../components/users/users.routes'),
    },
    {
        path: 'bookmarks',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/bookmarks/bookmarks.routing'),
    },
    {
        path: 'contacts',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/contacts/contacts.routes'),
    },
    {
        path: 'tasks',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/tasks/tasks.routes'),
    },
    {
        path: 'calender',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/calendar/calendar.routes'),
    },
    {
        path: 'social-app',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/social-app/social-app.routes'),
    },
    {
        path: 'todo',
        data: {
            title: "To-Do",
            breadcrumb: "To-Do",
        },
        loadChildren: () => import('../../components/to-do/to-do.routes'),
    },
    {
        path: 'search-result',
        data: {
            title: "Search Pages",
            breadcrumb: "Search Pages",
        },
        loadChildren: () => import('../../components/search-result/search-result.routes'),
    },
    {
        path: 'form-controls',
        data: {
            title: "Form Controls",
            breadcrumb: "Form Controls",
        },
        loadChildren: () => import('../../components/forms/form-controls/form-controls.routes'),
    },
    {
        path: 'form-widgets',
        data: {
            title: "Form Widgets",
            breadcrumb: "Form Widgets",
        },
        loadChildren: () => import('../../components/forms/form-widgets/form-widgets.routes'),
    },
    {
        path: 'table',
        data: {
            title: "Tables",
            breadcrumb: "Tables",
        },
        loadChildren: () => import('../../components/table/table.routes'),
    },
    {
        path: 'ui-kits',
        data: {
            title: "Ui Kits",
            breadcrumb: "Ui Kits",
        },
        loadChildren: () => import('../../components/ui-kits/ui-kits.routes'),
    },
    {
        path: 'bonus-ui',
        data: {
            title: "Bonus Ui",
            breadcrumb: "Bonus Ui",
        },
        loadChildren: () => import('../../components/bonus-ui/bonus-ui.routes'),
    },
    {
        path: 'icons',
        data: {
            title: "Icons",
            breadcrumb: "Icons",
        },
        loadChildren: () => import('../../components/icons/icons.routes'),
    },
    {
        path: 'buttons',
        data: {
            title: "Buttons",
            breadcrumb: "Buttons",
        },
        loadChildren: () => import('../../components/buttons/buttons.routes'),
    },
    {
        path: 'chart',
        data: {
            title: "Charts",
            breadcrumb: "Charts",
        },
        loadChildren: () => import('../../components/charts/charts.routes')
    },
    {
        path: 'sample-page',
        data: {
            title: "Pages",
            breadcrumb: "Pages",
        },
        loadChildren: () => import('../../components/sample-page/sample-page.routes'),
    },
    {
        path: 'gallary',
        data: {
            title: "Gallery",
            breadcrumb: "Gallery",
        },
        loadChildren: () => import('../../components/gallery/gallery.routes'),
    },
    {
        path: 'blog',
        data: {
            title: "Blog",
            breadcrumb: "Blog",
        },
        loadChildren: () => import('../../components/blog/blog.routes'),
    },
    {
        path: 'faq',
        data: {
            title: "FAQ",
            breadcrumb: "FAQ",
        },
        loadChildren: () => import('../../components/faq/faq.routes'),
    },
    {
        path: 'job',
        data: {
            title: "Job Search",
            breadcrumb: "Job Search",
        },
        loadChildren: () => import('../../components/job-search/job-search.routes'),
    },
    {
        path: 'learning',
        data: {
            title: "Learning",
            breadcrumb: "Learning",
        },
        loadChildren: () => import('../../components/learning/learning.routes'),
    },
    {
        path: 'maps',
        data: {
            title: "Maps",
            breadcrumb: "Maps",
        },
        loadChildren: () => import('../../components/maps/maps.routes'),
    },
    {
        path: 'editors',
        data: {
            title: "Editors",
            breadcrumb: "Editors",
        },
        loadChildren: () => import('../../components/editors/editors.routes'),
    },
    {
        path: 'knowledgebase',
        data: {
            title: "Knowledgebase",
            breadcrumb: "Knowledgebase",
        },
        loadChildren: () => import('../../components/knowledgebase/knowledgebase.routes'),
    },
    {
        path: 'support-ticket',
        data: {
            title: "Apps",
            breadcrumb: "Apps",
        },
        loadChildren: () => import('../../components/support-ticket/support-tickit.routes'),
    },
    {
        path: 'links',
        data: {
            title: "Links",
            breadcrumb: "Links",
        },
        loadChildren: () => import('../../components/links/links.routes'),
    },
    {
        path: 'qr-codes',
        data: {
            title: "Qr Codes",
            breadcrumb: "Qr Codes",
        },
        loadChildren: () => import('../../components/qr-codes/qr-codes.routes'),
    },
    {
        path: 'charts',
        data: {
            title: "Charts",
            breadcrumb: "Charts",
        },
        loadChildren: () => import('../../components/charts/charts.routes'),
    }
]


