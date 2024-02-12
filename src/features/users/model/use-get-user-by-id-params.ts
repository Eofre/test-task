import { useGetUserByIdQuery } from "entities/user";
import { useParams } from "react-router-dom";

export const useGetUserByIdParams = () => {
  const { userId } = useParams();
  const {
    data: user,
    isSuccess,
    isLoading,
    isError,
  } = useGetUserByIdQuery(Number(userId));

  return { user, isSuccess, isLoading, isError };
};
