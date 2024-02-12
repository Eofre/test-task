import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "entities/auth/model/use-session";
import { ROUTES } from "shared/constants";

type GuestGuardProps = {
  children: ReactNode;
};

export function GuestGuard(props: GuestGuardProps) {
  const { children } = props;
  const { token } = useSession();

  if (token) return <Navigate to={ROUTES.HOME} replace />;

  return <> {children} </>;
}
