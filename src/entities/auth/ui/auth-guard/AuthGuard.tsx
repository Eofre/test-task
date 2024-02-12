import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSession } from "entities/auth/model/use-session";
import { ROUTES } from "shared/constants";

type AuthGuardProps = {
  children: ReactNode;
};

export function AuthGuard(props: AuthGuardProps) {
  const { children } = props;

  const { token } = useSession();

  if (!token) return <Navigate to={ROUTES.SIGN_IN} replace />;

  return <> {children} </>;
}
