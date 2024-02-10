/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthToken } from "entities/auth";
import { ROUTES } from "shared/constants";

type AuthGuardProps = {
  children: ReactNode;
};

export function AuthGuard(props: AuthGuardProps) {
  const { children } = props;
  const { token } = useAuthToken();

  if (!token) return <Navigate to={ROUTES.SIGN_IN} replace />;

  return <> {children} </>;
}
