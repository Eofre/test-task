import { UserCard } from "entities/user";
import { UiButton, UiLoader } from "shared/ui";
import showIcon from "assets/show.svg";
import { useUserList } from "features/users";

export function UserList() {
  const { users, isLoading, isAllUploadUsers, uploadUsers } = useUserList();
  const handleClickUploadUsers = () => {
    uploadUsers();
  };
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
      {!isAllUploadUsers && (
        <UiButton
          variant="outline-black"
          icon={showIcon}
          onClick={handleClickUploadUsers}
        >
          Показать еще
        </UiButton>
      )}
    </div>
  );
}
