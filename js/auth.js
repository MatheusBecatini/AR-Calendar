// Criando a instancia principal do MSAL
// Paremetros de configuração no config.js
const msalClient = new Msal.UserAgentApplication(msalConfig);

if (msalClient.getAccount() && !msalClient.isCallback(window.location.hash)) {
  // avoid duplicate code execution on page load in case of iframe and Popup window.
  updatePage(msalClient.getAccount(), Views.home);
}

async function signIn() {
    // Login
    try {
      await msalClient.loginPopup(loginRequest);
      console.log('id_token acquired at: ' + new Date().toString());
      if (msalClient.getAccount()) {
        updatePage(msalClient.getAccount(), Views.home);
      }
    } catch (error) {
      console.log(error);
      updatePage(null, Views.error, {
        message: 'Error logging in',
        debug: error
      });
    }
  }
  
  function signOut() {
    msalClient.logout();
  }