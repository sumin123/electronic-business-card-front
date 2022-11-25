import "./google-btn.css";
import * as React from 'react';

function oauthSignIn() {
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';


  var form = document.createElement('form');
  form.setAttribute('method', 'GET');
  form.setAttribute('action', oauth2Endpoint);


  var params = {
    'client_id': process.env.REACT_APP_GOOGLE_CLIENT_ID,
    'redirect_uri': process.env.REACT_APP_GOOGLE_REDIRECT_URL,
    'response_type': 'token',
    'scope': 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
  };

  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
}

function GoogleLoginBtn() {
  return (
    <div>
      <button className="login-btn" type="submit" onClick={oauthSignIn}>
        <img src="assets/img/google_logo.png" />
      </button>
    </div>
  )
}

export default GoogleLoginBtn;