export const ROUTES = {
  HOME: `/`,
  SIGN_UP: `/sign-up`,
  SIGN_IN: `/sign-in`,
  USER_PAGE: function (id?: number) {
    const res = id ? id : ":userId";
    return `/users/${res}`;
  },
} as const;
