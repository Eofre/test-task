import { ReactNode } from "react";

interface IUiFormLayoutProps {
  title: string;
  form: ReactNode;
}

export function UiFormLayout(props: IUiFormLayoutProps) {
  const { title, form } = props;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="max-w-lg w-full mx-auto p-4 bg-white shadow rounded-lg flex flex-col gap-5">
        <h2 className="text-xl">{title}</h2>
        <div>{form}</div>
      </div>
    </div>
  );
}
