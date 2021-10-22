import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from ".";
import { setUser } from "../store/user/userSlice";
import { serializeGoogleUser } from "./utils";

export default function useFirebaseAuthState() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onChangeUser = (user) => dispatch(setUser(serializeGoogleUser(user)));
    const unsubscribe = onAuthStateChanged(auth, onChangeUser);
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
}
