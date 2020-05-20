// Create an options object with the same scopes from the login
const options =
  new MicrosoftGraph.MSALAuthenticationProviderOptions([
    'user.read',
    'calendars.read'
  ]);
// Create an authentication provider for the implicit flow
const authProvider =
  new MicrosoftGraph.ImplicitMSALAuthenticationProvider(msalClient, options);
// Initialize the Graph client
const graphClient = MicrosoftGraph.Client.initWithMiddleware({authProvider});

async function getEvents() {
    try {
      var data = new Date
      let events = await graphClient
          .api(`/me/calendarview?startdatetime=${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}T00:01:00Z&enddatetime=${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()+1}T00:00:00Z`)
          .select('subject,organizer,start,end')
          .orderby('start/dateTime')
          .get();
  
      updatePage(msalClient.getAccount(), Views.calendar, events);
    } catch (error) {
      updatePage(msalClient.getAccount(), Views.error, {
        message: 'Erro ao obter eventos',
        debug: error
      });
    }
  }

async function obter() {
    try {
      var data = new Date
      let events = await graphClient
          .api(`/me/calendarview?startdatetime=${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}T00:01:00Z&enddatetime=${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()+1}T00:00:00Z`)
          .select('subject,organizer,start,end')
          .orderby('start/dateTime')
          .get();
      return events
    } catch (error) {
      return {
        message: 'Erro ao obter eventos',
        debug: error
      }
    }
  }