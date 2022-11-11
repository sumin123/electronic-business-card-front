import logo from './logo.svg';
import './App.css';
import GoogleLoginBtn from './components/login-btn/google'
import KakaoLoginBtn from './components/login-btn/kakao';
import NaverLoginBtn from './components/login-btn/naver';

function App() {
  return (
    <div className="App">
      <GoogleLoginBtn />
      <KakaoLoginBtn />
      <NaverLoginBtn />
    </div>
  );
}

export default App;
