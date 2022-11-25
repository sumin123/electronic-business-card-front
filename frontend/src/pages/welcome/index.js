import { Transition } from 'react-transition-group';
import "./welcome.css";

function WelcomePage() {
  const redirectToProfileEdit = () => {
    window.location.replace("http://localhost:3000/profile-generate")
  }

  return (
    <Transition in={true} timeout={500} appear>
      {(status) => (
        <div className='container'>
          <div className={`back-${status}`}></div>
          <div className={`welcome-pageSlider-${status}`}>
            <img className="back" src='assets/icons/Back.png' />
            <div />
            <img className="welcome-logo" src='assets/img/logo.png' />
            <div className='welcome-msg'>가입을 축하합니다!</div>

            <button type="submit" className="to-profile-create" onClick={redirectToProfileEdit}>
              프로필 작성하기
            </button>

            <div className='nexttime-wrapper'>
              <button type="submit" className="to-profile-nexttime" onClick={redirectToProfileEdit}>
                나중에 하기
              </button>
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default WelcomePage;