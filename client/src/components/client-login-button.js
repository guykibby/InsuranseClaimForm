import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginClient = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
    });
  };

  return (
    <button className="button__login" onClick={handleLogin}>
      Customer Login
    </button>
  );
};
