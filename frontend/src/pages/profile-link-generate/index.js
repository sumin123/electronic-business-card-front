import { Transition } from 'react-transition-group';
import "./profile-link.css";

function ProfileLinkGeneratePage() {
  return (
    <Transition in={true} timeout={200} appear>
      {(status) => (
        <div className={`pageSlider-${status}`}>
          <img className="back" src='assets/icons/Back.png' />
          <form className="container" action={`${process.env.REACT_APP_SERVER_IP}/back/profile-link`} method="POST" encType="multipart/form-data">
            <div className='profile-link-title'>프로필 링크 만들기</div>
            <div className="input-container">
              <input className="link-input" id="head" name="profile-link" type="text" placeholder="https://sign-card.com/name01" />
            </div>

            <button className="link-submit-btn" type="submit">
              다음
            </button>
          </form>
        </div>
      )}
    </Transition>
  )
}

export default ProfileLinkGeneratePage;