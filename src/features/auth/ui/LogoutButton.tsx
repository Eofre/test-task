import exitIcon from "assets/exit.svg";
import { useSession } from "entities/auth";
import { useResize } from "shared/lib";
import { UiButton } from "shared/ui";

export function LogoutButton() {
  const { width } = useResize();
  const { logout } = useSession();

  const isMobile = width < 768;
  return (
    <>
      {isMobile ? (
        <UiButton icon={exitIcon} variant="text" onClick={logout} />
      ) : (
        <UiButton variant="outline-light" onClick={logout}>
          Выход
        </UiButton>
      )}
    </>
  );
}
