import { ISignUpRequest, useSignUpMutation } from "entities/auth";
import { setToken } from "entities/auth/model/slice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { UiButton, UiInput, UiInputPassword } from "shared/ui";

export function SignUpForm() {
  const dispatch = useDispatch();
  const [signUp, { data: response, isSuccess, isLoading, isError }] =
    useSignUpMutation();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpRequest>();

  const onSubmit = (data: ISignUpRequest) => {
    signUp(data);
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
        {...register("firstName", {
          required: "Поле обязательно к заполнению!",
        })}
        errorMessage={errors.firstName?.message}
        label="Имя"
      />
      <UiInput
        {...register("email", {
          required: "Поле обязательно к заполнению!",
        })}
        label="Электронная почта"
        type="email"
        errorMessage={errors.email?.message}
      />
      <UiInputPassword
        {...register("password", {
          required: "Поле обязательно к заполнению!",
        })}
        label="Пароль"
        errorMessage={errors.password?.message}
      />
      <UiInputPassword
        {...register("confirmPassword", {
          required: true,
          validate: (val: string) => {
            if (watch("password") != val) {
              return "Ваши пароли не совпадают";
            }
          },
        })}
        label="Подтвердите пароль"
        errorMessage={errors.confirmPassword?.message}
      />

      {isError && <p className="text-red-500">Ошибка!</p>}

      <UiButton loading={isLoading} type="submit" block>
        Зарегистрироваться
      </UiButton>
      <Link className="w-full text-center text-violet" to={ROUTES.SIGN_IN}>
        Авторизоваться
      </Link>
    </form>
  );
}
