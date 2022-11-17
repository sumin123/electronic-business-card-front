import { useEffect } from 'react';

const NaverLoginBtn = () => {
  const {naver} = window
  
  const naverLogin = new naver.LoginWithNaverId(
    {
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
      callbackUrl: process.env.REACT_APP_NAVER_REDIRECT_URL,
      isPopup: false, /* 팝업을 통한 연동처리 여부, true 면 팝업 */
      loginButton: { color: "green", type: 1, height: 47 } /* 로그인 버튼의 타입을 지정 */
    }
  );

  useEffect(() => {
    naverLogin.init();// useEffect로 안하고 onclick하면 로그인배너아이콘 안뜸
  }, []);

  return (
    <div id='naverIdLogin'>
      <button>Naver 로그인</button>
    </div>
  )
}

export default NaverLoginBtn;

