import { ReactNode } from "react";
import { UiContainer } from "../UiContainer";

interface IUiHeaderLayoutProps {
  rightElement?: ReactNode;
  centerElement?: ReactNode;
  leftElement?: ReactNode;
}

export function UiHeaderLayout(props: IUiHeaderLayoutProps) {
  const { leftElement, centerElement, rightElement } = props;

  return (
    <header className="bg-violet">
      <UiContainer>
        <div className="h-full flex gap-5 items-start">
          <div className="flex-none">{leftElement}</div>
          <div className="grow">{centerElement}</div>
          <div className="flex-none">{rightElement}</div>
        </div>
      </UiContainer>
    </header>
  );
}
