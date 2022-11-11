function callbackGoogle() {
  const token = new URLSearchParams(window.location.search).get('id_token')
  const url = 'https://www.googleapis.com/oauth2/v4/token'
  const params = new URLSearchParams();
  params.append('idToken', token)

  const login = () => {
    const res = axios.get("", params, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    console.log(res)
  }
}

export default callbackGoogle;