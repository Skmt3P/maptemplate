import Home from '../components/pages/Home.vue'
export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/map/:lat?/:lng?/:zoom?',
    name: 'map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "map" */ '../components/pages/Map.vue')
  }
]
