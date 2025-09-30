import {
  createRouter as createReactRouter,
  rewriteBasepath,
} from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

export function createRouter() {
  return createReactRouter({
    routeTree,
    context: {
      head: '',
    },
    rewrite: rewriteBasepath({ basepath: 'my-app' }),
    defaultPreload: 'intent',
    scrollRestoration: true,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
