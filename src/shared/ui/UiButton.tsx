import { UiLoader } from "./UiLoader";

interface IUiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  variant?: "default" | "outline-light" | "outline-black" | "text";
  icon?: string;
  loading?: boolean;
}

export function UiButton(props: IUiButtonProps) {
  const {
    children,
    variant = "default",
    block = false,
    icon,
    loading,
    ...rest
  } = props;

  const classesBlock = block ? "block w-full" : "inline-block";
  const classesVariant =
    variant === "outline-light"
      ? "border border-white text-white"
      : variant === "outline-black"
      ? "border border-black text-black"
      : variant === "text"
      ? ""
      : "bg-violet text-white";

  return (
    <button
      className={`flex gap-2 items-center justify-center ${classesVariant} p-2 rounded-lg text-base ${classesBlock} disabled:opacity-70 disabled:cursor-not-allowed`}
      {...rest}
    >
      {loading && <UiLoader size="small" />}
      {children}
      {icon && <img src={icon} alt="иконка" />}
    </button>
  );
}
