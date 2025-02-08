import Keycloak from "keycloak-js";

let keycloakInstance = null;

const getKeycloak = () => {
  if (!keycloakInstance) {
    keycloakInstance = new Keycloak({
        url: "http://localhost:7080/",
        realm: "master",
        clientId: "react-app-client-id",
    });
  }
  return keycloakInstance;
};

export default getKeycloak;
