import { SignInForm } from "features/auth";
import { UiFormLayout } from "shared/ui";

export function SignInPage() {
  return (
    <section>
      <UiFormLayout title="Авторизация" form={<SignInForm />} />
    </section>
  );
}
