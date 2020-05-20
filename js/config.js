const msalConfig = {
  auth: {
    clientId: '29173524-1b57-4e83-a90a-cdb3eddc22a8',
    // redirectUri: 'https://matheusbecatini.github.io/AR-Calendar/'
    redirectUri: 'http://localhost:8080/'
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
    forceRefresh: true
  }
};

const loginRequest = {
  scopes: [
    'openid',
    'profile',
    'user.read',
    'calendars.read'
  ]
}