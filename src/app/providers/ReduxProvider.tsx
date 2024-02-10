import { appStore } from "app/store/appStore";
import { ReactNode } from "react";
import { Provider } from "react-redux";

type ReduxProviderProps = {
  children?: ReactNode;
};

export function ReduxProvider(props: ReduxProviderProps) {
  const { children } = props;
  return <Provider store={appStore}>{children}</Provider>;
}
