import { useEffect } from 'react';

function CallbackNaver() {
  const userInfoUrl = '/v1/nid/me'

  useEffect(() => {
    async function getInfo() {
      const params = new URLSearchParams(window.location.href.split('#')[1])
      const token = params.get('access_token')

      const res = await fetch(userInfoUrl, {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      var data = await res.json()
      // console.log(data)

      fetch(`${process.env.REACT_APP_SERVER_IP}/back/login`, {
        method: 'POST',
        body: JSON.stringify({
          'userId': data.response.id,
          'email': data.response.email,
          'oauth': 'naver'
        })
      })
    }

    getInfo();
  }, [])

  // return (
  //   <Navigate to="/profile-link-generate" />
  // )
  // window.location.replace("http://localhost:3000/profile-link-generate")
}

export default CallbackNaver;