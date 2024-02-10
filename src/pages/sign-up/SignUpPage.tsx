import { SignUpForm } from "features/auth";
import { UiFormLayout } from "shared/ui";

export function SignUpPage() {
  return (
    <section>
      <UiFormLayout title="Регистрация" form={<SignUpForm />} />
    </section>
  );
}
