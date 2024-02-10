import exitIcon from "assets/exit.svg";
import { logout } from "entities/auth/model/slice";
import { useDispatch } from "react-redux";
import { useResize } from "shared/lib";
import { UiButton } from "shared/ui";

export function LogoutButton() {
  const { width } = useResize();
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logout());
  };

  const isMobile = width < 768;
  return (
    <>
      {isMobile ? (
        <UiButton icon={exitIcon} variant="text" onClick={handleClickLogout} />
      ) : (
        <UiButton variant="outline-light" onClick={handleClickLogout}>
          Выход
        </UiButton>
      )}
    </>
  );
}
