import { FormattedMessage } from "react-intl";

export function serializeGoogleUser(user) {
  if (!user) return {};
  return {
    uid: user.uid,
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
      return (
        <FormattedMessage defaultMessage="Account is already used for another sign in method" />
      );
    case "auth/cancelled-popup-request":
      return (
        <FormattedMessage defaultMessage="The request has been canceled because there are multiple opened popups" />
      );
    case "auth/popup-blocked":
      return (
        <FormattedMessage defaultMessage="The popup has been blocked by the browser" />
      );
    case "auth/popup-closed-by-user":
      return (
        <FormattedMessage defaultMessage="The popup has been closed by the user" />
      );
    default:
      return <FormattedMessage defaultMessage="Oops, something went wrong" />;
  }
}
