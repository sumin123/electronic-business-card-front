
import "./google-btn.css";
import * as React from 'react';
// import GoogleLogin from 'react-google-login';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'

const GoogleLoginBtn = () => {
  //클라이언트 ID (환경변수)
  let googleClientId=process.env.REACT_APP_CLIENT_ID||"";
  //사용자 정보를 담아둘 userObj
  const [userObj, setUserObj]=React.useState({
    email:"",
    name:""
  })
  //로그인 성공시 res처리
  const onLoginSuccess=(res)=>{
    console.log("success")
    console.log(res)
    
  }
  
  return (
    <div>
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          buttonText="Google"
          onSuccess={result=>onLoginSuccess(result)}
          onError={result => console.log(result)}
        />
      </ GoogleOAuthProvider>
    </div>
  );
};

// function oauthSignIn() {
// // Google's OAuth 2.0 endpoint for requesting an access token
// var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

// // Create <form> element to submit parameters to OAuth 2.0 endpoint.
// var form = document.createElement('form');
// form.setAttribute('method', 'GET'); // Send as a GET request.
// form.setAttribute('action', oauth2Endpoint);

// // Parameters to pass to OAuth 2.0 endpoint.
// var params = {'client_id': process.env.REACT_APP_CLIENT_ID,
//               'redirect_uri': process.env.REACT_APP_REDIRECT_URL,
//               'response_type': 'token',
//               'scope': 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'};

// // Add form parameters as hidden input values.
// for (var p in params) {
//   var input = document.createElement('input');
//   input.setAttribute('type', 'hidden');
//   input.setAttribute('name', p);
//   input.setAttribute('value', params[p]);
//   form.appendChild(input);
// }

// // Add form to page and submit it to open the OAuth 2.0 endpoint.
// document.body.appendChild(form);
// form.submit();
// }

// function GoogleLoginBtn() {
//   return (
//     <div className="testClass">
//       <button type="submit" onClick={oauthSignIn}>구글로 로그인</button>
//     </div>
//   )
// }



export default GoogleLoginBtn;