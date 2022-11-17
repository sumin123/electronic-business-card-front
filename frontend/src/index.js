import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import LoginPage from './pages/login';
import CallbackGoogle from './components/login-btn/google/callback';
import CallbackNaver from './components/login-btn/naver/callback';
import CallbackKakao from './components/login-btn/kakao/callback';
import ProfileGeneragePage from './pages/profile-generate';
import WelcomePage from './pages/welcome';
import ProfileLinkGeneratePage from './pages/profile-link-generate';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/login/callback/google" element={<CallbackGoogle />} />
        <Route exact path="/login/callback/naver" element={<CallbackNaver />} />
        <Route exact path="/login/callback/kakao" element={<CallbackKakao />} />
        <Route exact path="/profile-link-generate" element={<ProfileLinkGeneratePage />} />
        <Route exact path="/welcome" element={<WelcomePage />} />
        <Route exact path="/profile-generate" element={<ProfileGeneragePage />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
