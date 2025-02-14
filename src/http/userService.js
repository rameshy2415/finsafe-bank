import getKeycloak from "../config/keycloak";

const keycloak = getKeycloak(); // Use singleton instance

const initKeycloak = (onAuthenticatedCallback) => {
  keycloak.init({
      onLoad: "login-required",
          checkLoginIframe: false,
          pkceMethod: "S256",
    })
      .then((authenticated) => {
        if (!authenticated) {
          console.log("user is not authenticated..!");
        }
        onAuthenticatedCallback();
      })
      .catch(console.error);
  };

  const userService = {
    initKeycloak,
  };
  
  export default userService;