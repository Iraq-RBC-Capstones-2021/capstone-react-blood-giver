import React, { useEffect, useState } from "react";

const ClientSideComponent = ({ children }) => {
  const [noSSR, setNoSSR] = useState(false);
  useEffect(() => {
    setNoSSR(true);
  }, []);

  if (!noSSR) return null;

  return <>{children}</>;
};

export default ClientSideComponent;
