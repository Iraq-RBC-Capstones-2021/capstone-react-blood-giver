import { signInWithPopup, signOut as firebaseSignout } from "firebase/auth";
import { auth, googleProvider } from ".";
import { serializeGoogleUser, serializeSigninError } from "./utils";

export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider)
    .then((result) => serializeGoogleUser(result?.user))
    .catch((error) => Promise.reject(serializeSigninError(error)));

export const signout = () => firebaseSignout(auth);
