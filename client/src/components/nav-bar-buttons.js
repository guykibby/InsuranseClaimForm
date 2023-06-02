import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "./client-login-button";
import { LogoutButton } from "./logout-button";

export const NavBarButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};
