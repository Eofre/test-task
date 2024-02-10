export const ROUTES = {
  HOME: `/`,
  SIGN_UP: `/sign-up`,
  SIGN_IN: `/sign-in`,
  USER_PAGE: function getUserPage(id?: number) {
    const res = id ? id : ":userId";
    return `/users/${res}`;
  },
};
