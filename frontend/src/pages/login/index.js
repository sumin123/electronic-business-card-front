import GoogleLoginBtn from '../../components/login-btn/google';
import KakaoLoginBtn from '../../components/login-btn/kakao';
import NaverLoginBtn from '../../components/login-btn/naver';

function LoginPage() {
  return (
    <div className="App">
      <GoogleLoginBtn />
      <KakaoLoginBtn />
      <NaverLoginBtn />
    </div>
  );
}

export default LoginPage;