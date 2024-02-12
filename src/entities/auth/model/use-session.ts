import { useDispatch } from "react-redux";
import { useAppSelector } from "shared/model";
import { logout, setToken } from "./slice";

export const useSession = () => {
  const dispatch = useDispatch();
  const token = useAppSelector((state) => state.session.accessToken);

  const setNewToken = (newToken: string) => {
    dispatch(setToken({ accessToken: newToken }));
  };

  const handleLogout = () => dispatch(logout());

  return { token, setToken: setNewToken, logout: handleLogout };
};
