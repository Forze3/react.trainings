import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: 
          '701533136715-jurb7r4gme7mo3i96t76sav8teeup3tq.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  
  render(){
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;
