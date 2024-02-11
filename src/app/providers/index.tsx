import { ReduxProvider } from "./ReduxProvider";
import { Router } from "./RouterProvider";
import { HashRouter } from "react-router-dom";

export function Provider() {
  return (
    <ReduxProvider>
      <HashRouter>
        <Router />
      </HashRouter>
    </ReduxProvider>
  );
}
