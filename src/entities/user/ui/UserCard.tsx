import { IUser } from "entities/user";
import { Link } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { UiAvatar } from "shared/ui";

interface IUserCardProps {
  user: IUser;
}

export function UserCard(props: IUserCardProps) {
  const {
    user: { avatar, last_name, first_name, id },
  } = props;

  return (
    <Link
      to={ROUTES.USER_PAGE(id)}
      className="block text-center shadow p-10 w-60 h-60 rounded-md  border border-transparent transition duration-300 ease-in-out hover:border-black"
    >
      <UiAvatar imageUrl={avatar} alt="аватар пользователя" />
      <h2 className="mt-2 text-xl">
        {last_name} {first_name}
      </h2>
    </Link>
  );
}
