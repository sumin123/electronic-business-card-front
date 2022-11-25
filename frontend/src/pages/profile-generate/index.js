import { useState } from 'react';
import "./profile-generate.css";
import defaultImg from '../../images/add_photo_icon.png';

function ProfileGeneragePage() {
  const [image, setImage] = useState(defaultImg);
  const [backImage, setBackImage] = useState(defaultImg);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const onBackImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBackImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <form className="container" action={`${process.env.REACT_APP_SERVER_IP}/back/profile`} method="POST" encType="multipart/form-data">
      <div className="input-container">
        <input className="background-image image" id="background-image" name="background-image" type="file" accept="image/*" onChange={onBackImageChange}/>
        <label htmlFor="background-image">
          <img src={backImage} alt="" className='background-img-preview'/>
        </label> 
      </div>
      <div className="detail-info-container">
        <div className='title-wrapper'>
          <div className='title'>프로필 수정</div>
          <img src="assets/icons/cancel.png" />
        </div>

        <div className="input-container">
          <input className="name-input profile-input" id="name" name="name" type="text" placeholder="이름" />
        </div>

        <div className="input-container">
          <input className="job-input profile-input" id="job" name="job" type="text" placeholder="소속/직업" />
        </div>
                
        <div className="input-container">
          <input className="residence-input profile-input" id="residence" name="residence" type="text" placeholder="위치" />
        </div>

        <div className="input-container">
          <input className="contact-input profile-input" id="contact" name="contact" type="text" placeholder="전화번호" />
        </div>

        <div className="input-container">
          <input className="email-input profile-input" id="email" name="email" type="text" placeholder="이메일" />
        </div>

        <div className="input-container">
          <textarea className="description-input profile-input" id="description" name="description" type="text" placeholder="한 줄 소개" />
        </div>

        <div className="input-container">
          <input className="univ-input profile-input" id="univ" name="univ" type="text" placeholder="학교" />
        </div>
        
        <div className="input-container">
          <input className="sns-input profile-input" id="sns" name="sns" type="text" placeholder="SNS" />
        </div>
      </div>

      <div className="input-container">
        <input className="profile-image image" id="profile-image" name="profile-image" type="file" accept="image/*" onChange={onImageChange}/>
        <label htmlFor="profile-image">
          <img src={image} alt="" className='profile-img-preview'/>
        </label> 
      </div>
      <button type="submit" className="submit-btn">
        수정 완료
      </button>
    </form>
  )
}

export default ProfileGeneragePage;