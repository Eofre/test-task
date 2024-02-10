import { appStore, persistedStore } from "app/store/appStore";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { UiLoader } from "shared/ui";

type ReduxProviderProps = {
  children?: ReactNode;
};

export function ReduxProvider(props: ReduxProviderProps) {
  const { children } = props;
  return (
    <Provider store={appStore}>
      <PersistGate loading={<UiLoader />} persistor={persistedStore}>
        {children}
      </PersistGate>
    </Provider>
  );
}
