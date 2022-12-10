import { LazyExoticComponent, ReactNode, lazy } from 'react';

import Paths from './constants/path';

const Home = lazy(() => import('./pages/Home/Home'));
const Users = lazy(() => import('./pages/Users/Users'));
const Posts = lazy(() => import('./pages/Posts/Posts'));

type TRoute = {
  name: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
  Fallback: ReactNode | null;
};

const routes = [
  {
    name: 'home',
    path: Paths.HOME,
    Component: Home,
    Fallback: null,
  },
  {
    name: 'users',
    path: Paths.USERS,
    Component: Users,
    Fallback: null,
  },
  {
    name: 'posts',
    path: Paths.POSTS,
    Component: Posts,
    Fallback: null,
  },
] as TRoute[];

export default routes;
