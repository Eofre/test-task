import { useGetUserByIdQuery } from "entities/user";
import {
  UiButtonGoBack,
  UiContact,
  UiContainer,
  UiHeaderLayout,
  UiLoader,
  UiProfile,
} from "shared/ui";
import { Navigate, useParams } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { LogoutButton } from "features/auth";

export function UserInfoPage() {
  const { userId } = useParams();
  const {
    data: user,
    isSuccess,
    isLoading,
    isError,
  } = useGetUserByIdQuery(Number(userId));

  if (isLoading) return <UiLoader />;

  if (isError) return <Navigate to={ROUTES.HOME} replace />;

  if (isSuccess)
    return (
      <>
        <UiHeaderLayout
          leftElement={<UiButtonGoBack />}
          centerElement={
            <UiProfile
              avatart={user.data.avatar}
              title={
                <h1 className="text-6xl">
                  {user.data.first_name} {user.data.last_name}
                </h1>
              }
              description={<p className="text-3xl mt-2">Партнер</p>}
            />
          }
          rightElement={<LogoutButton />}
        />
        <main>
          <section>
            <UiContainer>
              <div className="flex md:flex-row flex-col-reverse md:gap-40 gap-10">
                <div>
                  Клиенты видят в нем эксперта по вопросам разработки
                  комплексных решений финансовых продуктов, включая такие
                  аспекты, как организационная структура, процессы, аналитика и
                  ИТ-компоненты. Он помогает клиентам лучше понимать структуру
                  рисков их бизнеса, улучшать процессы за счет применения
                  новейших технологий и увеличивать продажи, используя самые
                  современные аналитические инструменты. <br /> <br /> В работе
                  с клиентами недостаточно просто решить конкретную проблему или
                  помочь справиться с трудностями. Не менее важно уделять
                  внимание обмену знаниями: "Один из самых позитивных моментов —
                  это осознание того, что ты помог клиенту перейти на совершенно
                  новый уровень компетентности, уверенность в том, что после
                  окончания проекта у клиента есть все необходимое, чтобы дальше
                  развиваться самостоятельно". <br /> <br />
                  Помимо разнообразных проектов для клиентов финансового
                  сектора, Сорин ведет активную предпринимательскую
                  деятельность. Он является совладельцем сети клиник
                  эстетической медицины в Швейцарии, предлагающей инновационный
                  подход к красоте, а также инвестором других бизнес-проектов.
                </div>
                <UiContact phone="+7 (954) 333-44-55" email={user.data.email} />
              </div>
            </UiContainer>
          </section>
        </main>
      </>
    );
}
