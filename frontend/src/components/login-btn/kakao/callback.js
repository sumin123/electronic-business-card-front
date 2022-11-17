import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function CallbackKakao() {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
  }

  useEffect(() => {
    async function getToken() {
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')
      console.log(window.location.search)
      console.log(code)

      const res = await fetch(`https://kauth.kakao.com/oauth/token`, {
        body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_REST_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&code=${code}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      })

      var data = await res.json();
      console.log(data)
      const token = data.access_token

      window.Kakao.Auth.setAccessToken(`${token}`);

      window.Kakao.API.request({
        url: '/v2/user/me',
        data: {
          property_keys: ['kakao_account.email', 'kakao_account.name'],
        },
      }).then((res) => {
        console.log(res)
      })
    }

    getToken()
  }, [])

  // return (
  //   <Navigate to="/profile-link-generate" />
  // )
  window.location.replace("http://localhost:3000/profile-link-generate")
}

export default CallbackKakao;