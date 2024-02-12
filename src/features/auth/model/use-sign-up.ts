import { ISignUpRequest, useSession, useSignUpMutation } from "entities/auth";
import { useEffect } from "react";

export const useSignUp = () => {
  const { setToken } = useSession();
  const [signUp, { data: response, isLoading, isError, isSuccess }] =
    useSignUpMutation();

  const onSignUp = (data: ISignUpRequest) => {
    signUp(data);
  };

  useEffect(() => {
    if (response) {
      setToken(response.token);
    }
  }, [response, setToken]);

  return {
    signUp: onSignUp,
    isLoading,
    isError,
    isSuccess,
  };
};
