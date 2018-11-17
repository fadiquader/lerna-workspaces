import { lazy } from 'react';
import PublicLayout from '../layouts/PublicLayout.js';

const Landing = lazy(() => import('../routes/Landing/index.js'));

const routerConfig = {
  '/': {
    component: PublicLayout,
    // exact: true,
    key: 'landingLayout',
    routes: [
      {
        path: '/',
        exact: true,
        component: Landing,
        key: 'landing',
      },
    ]
  }
};

export function getRouterData() {
  return routerConfig
}

