import { defineMessage } from "react-intl";

export function serializeUser(user) {
  if (!user) return {};
  return {
    id: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
    token: user.accessToken,
  };
}

export function serializeSigninError(error) {
  if (!error) return "";
  switch (error.code) {
    case "auth/account-exists-with-different-credential":
      return defineMessage({
        defaultMessage: "Account is already used for another sign in method",
      });
    case "auth/cancelled-popup-request":
      return defineMessage({
        defaultMessage:
          "The request has been canceled because there are multiple opened popups",
      });
    case "auth/popup-blocked":
      return defineMessage({
        defaultMessage: "The popup has been blocked by the browser",
      });
    case "auth/popup-closed-by-user":
      return defineMessage({
        defaultMessage: "The popup has been closed by the user",
      });
    default:
      return defineMessage({ defaultMessage: "Oops, something went wrong" });
  }
}
