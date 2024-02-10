import { Link } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { UiButton, UiInput, UiInputPassword } from "shared/ui";

export function SignUpForm() {
  return (
    <form className="flex flex-col gap-5 items-start">
      <UiInput label="Имя" />
      <UiInput label="Электронная почта" type="email" />
      <UiInputPassword label="Пароль" />
      <UiInputPassword label="Подтвердите пароль" />
      <UiButton block>Зарегистрироваться</UiButton>
      <Link className="w-full text-center text-violet" to={ROUTES.SIGN_IN}>
        Авторизоваться
      </Link>
    </form>
  );
}
