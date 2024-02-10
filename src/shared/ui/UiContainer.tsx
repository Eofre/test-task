import { ReactNode } from "react";

interface IUiContainerProps {
  children: ReactNode;
}

export function UiContainer(props: IUiContainerProps) {
  const { children } = props;

  return <div className="container mx-auto px-5 py-10">{children}</div>;
}
