import { ISignInRequest } from "entities/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { UiButton, UiInput, UiInputPassword } from "shared/ui";
import { useSignIn } from "../model/use-sign-in";

export function SignInForm() {
  const { signIn, isLoading, isError } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInRequest>();

  const onSubmit = (data: ISignInRequest) => {
    signIn(data);
  };

  return (
    <form
      className="flex flex-col gap-5 items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <UiInput
        {...register("email", {
          required: "Поле обязательно к заполнению!",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Неверный формат электронной почты",
          },
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
