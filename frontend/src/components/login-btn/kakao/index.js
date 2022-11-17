
const KakaoLoginBtn = () => {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
  }

  function loginWithKakao() {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URL,
      scope: 'profile_nickname,account_email'
    });
  }

  function displayToken() {
    var token = getCookie('authorize-access-token');

    if(token) {
      window.Kakao.Auth.setAccessToken(token);
      window.Kakao.Auth.getStatusInfo()
        .then(function(res) {
          if (res.status === 'connected') {
            console.log(window.Kakao.Auth.getAccessToken());
          }
        })
        .catch(function(err) {
          window.Kakao.Auth.setAccessToken(null);
        });
    }
  }

  function getCookie(name) {
    var parts = document.cookie.split(name + '=');
    if (parts.length === 2) { return parts[1].split(';')[0]; }
  }

  displayToken()
  
  return (
    <div>
      <button onClick={loginWithKakao}>Kakao 로그인</button>
    </div>
  )
}

export default KakaoLoginBtn;

