import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CallbackGoogle() {
  const userInfoUrl = 'https://www.googleapis.com/oauth2/v2/userinfo';
  const navigate = useNavigate();
  
  useEffect(() => {
    async function getInfo() {
      const params = new URLSearchParams(window.location.href.split('#')[1])
      const token = params.get("access_token")

      const res = await fetch(userInfoUrl, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      var data = await res.json();
      // console.log(data)

      await fetch(`${process.env.REACT_APP_SERVER_IP}/back/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          'userId': data.id,
          'email': data.email,
          'oauth': 'google'
        }),
        credentials: "include"
      });

      // navigate("/profile-link-generate")
      window.location.replace("http://localhost:3000/profile-link-generate")
    }

    getInfo()
  }, [])
}

export default CallbackGoogle;