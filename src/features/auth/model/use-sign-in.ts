import { ISignInRequest, useSession, useSignInMutation } from "entities/auth";
import { useEffect } from "react";

export const useSignIn = () => {
  const { setToken } = useSession();
  const [signIn, { data: response, isLoading, isError, isSuccess }] =
    useSignInMutation();

  const onSignIn = (data: ISignInRequest) => {
    signIn(data);
  };

  useEffect(() => {
    if (response) {
      setToken(response.token);
    }
  }, [response, setToken]);

  return {
    signIn: onSignIn,
    isLoading,
    isError,
    isSuccess,
  };
};
