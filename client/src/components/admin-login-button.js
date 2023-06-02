import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginAdmin = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/admin",
      },
    });
  };

  return (
    <button className="button__login" onClick={handleLogin}>
      Log In To Admin Dashboard
    </button>
  );
};
