import { ReduxProvider } from "./ReduxProvider";
import { Router } from "./RouterProvider";
import { BrowserRouter } from "react-router-dom";

export function Provider() {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ReduxProvider>
  );
}
