import { Outlet } from "react-router-dom";

export function GuestLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
