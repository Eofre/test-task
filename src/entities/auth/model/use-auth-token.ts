import { useAppSelector } from "shared/model";

export const useAuthToken = () => {
  const token = useAppSelector((state) => state.session.accessToken);

  return { token };
};
