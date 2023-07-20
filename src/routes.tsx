import { LazyExoticComponent, ReactNode, lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Users = lazy(() => import("./pages/Users/Users"));
const Posts = lazy(() => import("./pages/Posts/Posts"));

type TRoute = {
  name: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element>;
  Fallback: ReactNode | null;
};

export const paths = {
  HOME: "/",
  USERS: "/users",
  POSTS: "/posts",
};

export const routes = [
  {
    name: "home",
    path: paths.HOME,
    Component: Home,
    Fallback: null,
  },
  {
    name: "users",
    path: paths.USERS,
    Component: Users,
    Fallback: null,
  },
  {
    name: "posts",
    path: paths.POSTS,
    Component: Posts,
    Fallback: null,
  },
] as TRoute[];
