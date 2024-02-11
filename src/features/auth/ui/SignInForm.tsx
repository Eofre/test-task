import { ISignInRequest, useSignInMutation } from "entities/auth";
import { setToken } from "entities/auth/model/slice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { UiButton, UiInput, UiInputPassword } from "shared/ui";

export function SignInForm() {
  const dispatch = useDispatch();
  const [signIn, { data: response, isSuccess, isLoading, isError }] =
    useSignInMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInRequest>();

  const onSubmit = (data: ISignInRequest) => {
    signIn(data);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken({ accessToken: response?.token }));
    }
  }, [isSuccess, response, dispatch]);

  return (
    <form
      className="flex flex-col gap-5 items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <UiInput
        {...register("email", {
          required: "Поле обязательно к заполнению!",
        })}
        label="Электронная почта"
        errorMessage={errors.email?.message}
        type="email"
      />
      <UiInputPassword
        {...register("password", {
          required: "Поле обязательно к заполнению!",
        })}
        label="Пароль"
        errorMessage={errors.password?.message}
      />
      {isError && <p className="text-red-500">Ошибка!</p>}
      <UiButton loading={isLoading} type="submit" block>
        Войти
      </UiButton>
      <Link className="w-full text-center text-violet" to={ROUTES.SIGN_UP}>
        Зарегистрироваться
      </Link>
    </form>
  );
}
