import { LoginAdmin } from "./admin-login-button";
import { LoginClient } from "./client-login-button";
const homepage = () => {
  return (
    <div>
      <LoginAdmin />
      <LoginClient />
    </div>
  );
};

export default homepage;
