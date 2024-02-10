import { Link } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { UiButton, UiInput, UiInputPassword } from "shared/ui";

export function SignInForm() {
  return (
    <form className="flex flex-col gap-5 items-start">
      <UiInput label="Электронная почта" type="email" />
      <UiInputPassword label="Пароль" />
      <UiButton block>Войти</UiButton>
      <Link className="w-full text-center text-violet" to={ROUTES.SIGN_UP}>
        Зарегистрироваться
      </Link>
    </form>
  );
}
