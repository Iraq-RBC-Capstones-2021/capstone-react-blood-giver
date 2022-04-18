import { useToast } from "@chakra-ui/toast";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { setError, setSucces } from "../store/status/statusSlice";

export default function useNotification() {
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state?.status);

  const toast = useToast();
  const intl = useIntl();

  useEffect(() => {
    const getMessage = (msg) => {
      if (typeof msg === "object" && msg.id) {
        return intl.formatMessage(msg);
      }
      return msg;
    };

    success &&
      toast({
        position: "top-right",
        title: getMessage(success),
        status: "success",
        duration: 4000,
        isClosable: true,
        onCloseComplete: () => dispatch(setSucces("")),
      });

    error &&
      toast({
        position: "top-right",
        title: getMessage(error),
        status: "error",
        duration: 4000,
        isClosable: true,
        onCloseComplete: () => dispatch(setError("")),
      });
  }, [success, error, toast, intl, dispatch]);
}
