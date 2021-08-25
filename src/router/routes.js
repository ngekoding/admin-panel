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
        path: 'dev/components/dropdown',
        name: 'dev-components-dropdown',
        component: () => import('@/pages/developments/dropdown/DropdownExample.vue')
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