import { ISignUpRequest } from "entities/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { UiButton, UiInput, UiInputPassword } from "shared/ui";
import { useSignUp } from "../model/use-sign-up";

export function SignUpForm() {
  const { signUp, isError, isLoading } = useSignUp();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpRequest>();

  const onSubmit = (data: ISignUpRequest) => {
    signUp(data);
  };

  return (
    <form
      className="flex flex-col gap-5 items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <UiInput
        {...register("firstName", {
          required: "Поле обязательно к заполнению!",
          maxLength: {
            value: 30,
            message: "Имя должно содержать не более 30 символов",
          },
          pattern: {
            value: /^[A-Za-zА-Яа-яЁё\s]+$/,
            message: "Имя может содержать только буквы и пробелы",
          },
        })}
        errorMessage={errors.firstName?.message}
        label="Имя"
      />
      <UiInput
        {...register("email", {
          required: "Поле обязательно к заполнению!",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Неверный формат электронной почты",
          },
        })}
        label="Электронная почта"
        type="email"
        errorMessage={errors.email?.message}
      />
      <UiInputPassword
        {...register("password", {
          required: "Поле обязательно к заполнению!",
          minLength: {
            value: 6,
            message: "Пароль должен содержать не менее 6 символов",
          },
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
