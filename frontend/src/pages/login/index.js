import GoogleLoginBtn from '../../components/login-btn/google';
import KakaoLoginBtn from '../../components/login-btn/kakao';
import NaverLoginBtn from '../../components/login-btn/naver';
import './login.css';

function LoginPage() {
  return (
    <div className="App">
      <img className="logo" src='assets/img/logo.png' />
      <div className="sub-title">CONNECT NOW</div>
      <img src='assets/img/card_img.png' />
      <div className="description">다음 계정으로 로그인</div>
      <div className="login-btn-container">
        <div className="login-btn-wrapper">
          <GoogleLoginBtn />
          <KakaoLoginBtn />
          <NaverLoginBtn />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;