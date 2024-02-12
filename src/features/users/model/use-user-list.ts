import { useFetchAllUsersQuery } from "entities/user";
import { useState } from "react";

export const useUserList = () => {
  const [perPage, setPerPage] = useState(8);
  const { data, isLoading } = useFetchAllUsersQuery({
    per_page: perPage,
    page: 0,
  });
  const { data: users, total: totalItems } = data ?? {
    data: undefined,
    total: undefined,
  };

  const uploadUsers = (numberUploadedUsers = 4) => {
    setPerPage(perPage + numberUploadedUsers);
  };
  const isAllUploadUsers = totalItems === perPage;

  return { users, uploadUsers, isLoading, isAllUploadUsers };
};
