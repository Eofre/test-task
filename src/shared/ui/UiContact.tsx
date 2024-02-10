import iconPhone from "assets/tel.svg";
import iconEmail from "assets/email.svg";

interface IUiContactProps {
  email: string;
  phone: string;
}

export function UiContact(props: IUiContactProps) {
  const { email, phone } = props;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <img src={iconPhone} alt="иконка телефона" />
        <span>{phone}</span>
      </div>
      <div className="flex gap-2">
        <img src={iconEmail} alt="иконка email" />
        <span>{email}</span>
      </div>
    </div>
  );
}
