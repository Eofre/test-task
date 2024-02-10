import { LogoutButton } from "features/auth";
import { UiHeaderLayout } from "shared/ui";
import { UserList } from "widgets/user";

export function UserListPage() {
  return (
    <>
      <UiHeaderLayout
        centerElement={
          <div className="h-full text-white flex flex-col gap-4 justify-center items-center text-center">
            <h1 className="text-5xl">Наша команда</h1>
            <p className="max-w-3xl">
              Это опытные специалисты, хорошо разбирающиеся во всех задачах,
              которые ложатся на их плечи, и умеющие находить выход из любых,
              даже самых сложных ситуаций.
            </p>
          </div>
        }
        rightElement={<LogoutButton />}
      />
      <main>
        <section>
          <div className="py-10 p-2 flex flex-col items-center">
            <UserList />
          </div>
        </section>
      </main>
    </>
  );
}
