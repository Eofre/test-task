import { AuthGuard, GuestGuard } from "entities/auth";
import { AuthLayout, MainLayout } from "pages/layouts";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { Loadable } from "shared/ui";
const SignInPage = Loadable(lazy(() => import("pages/sign-in")));
const SignUpPage = Loadable(lazy(() => import("pages/sign-up")));
const UserListPage = Loadable(lazy(() => import("pages/user-list")));
const UserInfoPage = Loadable(lazy(() => import("pages/user-info")));

export function Router() {
  return useRoutes([
    { path: "*", element: <Navigate to={ROUTES.HOME} replace /> },
    {
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: ROUTES.HOME,
          element: <UserListPage />,
        },
        {
          path: ROUTES.USER_PAGE(),
          element: <UserInfoPage />,
        },
      ],
    },
    {
      element: (
        <GuestGuard>
          <AuthLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: ROUTES.SIGN_IN,
          element: <SignInPage />,
        },
        {
          path: ROUTES.SIGN_UP,
          element: <SignUpPage />,
        },
      ],
    },
  ]);
}
