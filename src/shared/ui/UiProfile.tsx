import { ReactNode } from "react";
import { UiAvatar } from "./UiAvatar";

interface IUiProfileProps {
  avatart: string;
  title: ReactNode | string;
  description: ReactNode | string;
}

export function UiProfile(props: IUiProfileProps) {
  const { avatart, title, description } = props;

  return (
    <div className="flex gap-6 text-white items-center md:flex-row flex-col-reverse text-center md:text-start">
      <UiAvatar alt="аватар" imageUrl={avatart} />
      <div className="flex flex-col gap-2">
        {title}
        {description}
      </div>
    </div>
  );
}
