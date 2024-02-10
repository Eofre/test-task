/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthToken } from "entities/auth";
import { ROUTES } from "shared/constants";

type GuestGuardProps = {
  children: ReactNode;
};

export function GuestGuard(props: GuestGuardProps) {
  const { children } = props;
  const { token } = useAuthToken();

  if (token) return <Navigate to={ROUTES.HOME} replace />;

  return <> {children} </>;
}
