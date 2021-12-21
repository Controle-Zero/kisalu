import React, { useContext } from "react";

import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthStackRoute";
import AuthContext from "../context/auth";

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
