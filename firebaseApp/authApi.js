import { signInWithPopup, signOut as firebaseSignout } from "firebase/auth";
import { auth, facebookProvider, googleProvider } from ".";
import { serializeUser, serializeSigninError } from "./utils";

export const signInWithGoogle = () =>
  signInWithPopup(auth, googleProvider)
    .then((result) => serializeUser(result?.user))
    .catch((error) => Promise.reject(serializeSigninError(error)));

export const signInWithFacebook = () =>
  signInWithPopup(auth, facebookProvider)
    .then((result) => serializeUser(result?.user))
    .catch((error) => Promise.reject(serializeSigninError(error)));

export const signout = () => firebaseSignout(auth);
