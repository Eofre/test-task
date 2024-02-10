import { InputHTMLAttributes, forwardRef } from "react";

export interface IUiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export const UiInput = forwardRef<HTMLInputElement, IUiInputProps>(
  (props, ref) => {
    const { label, errorMessage, ...rest } = props;
    const errorMessageClasses = errorMessage
      ? "ring-2 ring-red-500 outline-red-500"
      : "outline-violet";

    return (
      <div className="w-full">
        <label htmlFor="inp">{label}</label>
        <input
          ref={ref}
          id="inp"
          {...rest}
          className={`mt-2 w-full text-base p-2 rounded-lg bg-gray-light outline-3  ${errorMessageClasses}`}
        />
        {errorMessage && (
          <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);
