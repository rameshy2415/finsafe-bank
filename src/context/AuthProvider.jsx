import { useState, useEffect, createContext } from "react";
import getKeycloak from "../config/keycloak";
//import axios from "axios";

let init = {
  auth: false,
  keycloak: null,
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext(init);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const keycloak = getKeycloak(); // Use singleton instance

  /* useEffect(()=>{
  keycloak
  .init({
    onLoad: "login-required",
    checkLoginIframe: false,
    pkceMethod: "S256",
  })
  .then((authenticated) => {
    setAuth(authenticated);
    if (authenticated) {
      console.info("Authenticated!");
      console.log("Access Token:", keycloak.token);
      console.log("Keycloak Object:", keycloak);
      // Set Axios token
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${keycloak.token}`;
      // Auto-refresh token
      keycloak.onTokenExpired = () => {
        console.warn("Token expired, refreshing...");
        keycloak.updateToken(30).then((refreshed) => {
          if (refreshed) {
            console.info("Token refreshed!");
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${keycloak.token}`;
          } else {
            console.warn("User must re-authenticate!");
            keycloak.logout();
          }
        });
      };
    }
  })
  .catch((err) => {
    console.error("Keycloak initialization failed", err);
  });
},[]) */

  keycloak.onAuthSuccess = () => {
    console.log("Login successful");
    console.log("Session State:", keycloak.sessionState);
  };

  keycloak.onAuthRefreshSuccess = () => {
    console.log("Token refreshed successfully");
  };

  useEffect(() => {
    keycloak.init({ onLoad: "check-sso" }).then((auth) => {
      setAuth(auth);
    });
  }, []);

  const login = async () => {
    console.log("Login Click on AuthProvider");
    keycloak.login();
  };

  const logout = () => {
    keycloak.logout();
  };

  return (
    <UserContext.Provider value={{ auth, keycloak, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
