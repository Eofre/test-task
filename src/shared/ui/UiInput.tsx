import { InputHTMLAttributes } from "react";

interface IUiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function UiInput(props: IUiInputProps) {
  const { label, ...rest } = props;

  return (
    <div className="w-full">
      <label htmlFor="inp">{label}</label>
      <input
        id="inp"
        {...rest}
        className="mt-2 w-full text-base p-2 rounded-lg bg-gray-light"
      />
    </div>
  );
}
