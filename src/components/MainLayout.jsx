import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const MainLayout = () => {
  const [user, isLoading] = useAuthState(auth);
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
