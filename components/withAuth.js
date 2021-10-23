import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { selectUser } from "../store";
import { handleOpenAuthModal } from "../store/setting/settingSlice";
import ClientSideComponent from "./ClientSideComponent";
import { CircularProgress, Flex } from "@chakra-ui/react";

const withAuth = (Component) => {
  const Auth = ({ ...props }) => {
    const user = useSelector(selectUser);
    const loading = useSelector((state) => state?.user?.loading);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
      if (!user?.id && !loading) {
        dispatch(handleOpenAuthModal());
        Router.push("/");
      }
    }, [user, loading, dispatch]);

    if (loading) {
      return (
        <Flex width="full" justify="center">
          <CircularProgress isIndeterminate color="primary" />
        </Flex>
      );
    }

    return <Component {...props} />;
  };

  const AuthComponent = (props) => (
    <ClientSideComponent>
      <Auth {...props} />
    </ClientSideComponent>
  );
  return AuthComponent;
};

export default withAuth;
