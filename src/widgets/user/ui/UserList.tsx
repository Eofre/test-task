import { UserCard, useFetchAllUsersQuery } from "entities/user";
import { useState } from "react";
import { UiButton, UiLoader } from "shared/ui";
import showIcon from "assets/show.svg";

export function UserList() {
  const [perPage, setPerPage] = useState(8);
  const { data, isLoading } = useFetchAllUsersQuery({
    per_page: perPage,
    page: 0,
  });
  const users = data?.data;
  const totalItems = data?.total;
  const isDeleteButton = totalItems === perPage;
  const handleClick = () => setPerPage(perPage + 4);

  return (
    <div className="flex flex-col items-center gap-5">
      <ul className="max-w-5xl flex flex-wrap gap-5 justify-center">
        {isLoading && <UiLoader />}
        {users && (
          <>
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </>
        )}
      </ul>
      {!isDeleteButton && (
        <UiButton variant="outline-black" icon={showIcon} onClick={handleClick}>
          Показать еще
        </UiButton>
      )}
    </div>
  );
}
