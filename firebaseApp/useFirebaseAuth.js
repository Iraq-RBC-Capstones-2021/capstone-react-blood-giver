import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from ".";
import { setLoading, setUser } from "../store/user/userSlice";
import { serializeUser } from "./utils";

export default function useFirebaseAuthState() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const onChangeUser = (user) => {
      dispatch(setUser(serializeUser(user)));
      dispatch(setLoading(false));
    };
    const unsubscribe = onAuthStateChanged(auth, onChangeUser);
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
}
