const routes = [
  { 
    path: '/', 
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'home',
        alias: '',
        name: 'home',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: 'dev/getting-started',
        name: 'dev-getting-started',
        component: () => import('@/pages/developments/GettingStarted.vue')
      },
      {
        path: 'dev/components/icon',
        name: 'dev-components-icon',
        component: () => import('@/pages/developments/icon/IconExample.vue')
      },
      {
        path: 'dev/components/button',
        name: 'dev-components-button',
        component: () => import('@/pages/developments/button/ButtonExample.vue')
      },
      {
        path: 'dev/components/dropdown',
        name: 'dev-components-dropdown',
        component: () => import('@/pages/developments/dropdown/DropdownExample.vue')
      },
      {
        path: 'dev/components/tooltip',
        name: 'dev-components-tooltip',
        component: () => import('@/pages/developments/tooltip/TooltipExample.vue')
      },
      {
        path: 'dev/components/form',
        name: 'dev-components-forms',
        component: () => import('@/pages/developments/forms/Index.vue')
      },
      {
        path: 'dev/components/table',
        name: 'dev-components-tables',
        component: () => import('@/pages/developments/tables/Index.vue')
      }
    ]
  },
]

export default routes