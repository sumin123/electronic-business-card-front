function ProfileGeneragePage() {
  return (
    <form className="container" action={`${process.env.REACT_APP_SERVER_IP}/back/profile`} method="POST" encType="multipart/form-data">
      <div className="input-container">
        <input className="image" id="image" name="image" type="file" accept="image/*" />
      </div>
      <div className="input-container">
        <input className="name-input" id="name" name="name" type="text" placeholder="이름" />
      </div>
      <div className="input-container">
        <textarea className="description-input" id="description" name="description" type="text" placeholder="한 줄 소개" />
      </div>
      <div className="input-container">
        <input className="job-input" id="job" name="job" type="text" placeholder="직장/직업" />
      </div>
      <div className="input-container">
        <input className="residence-input" id="residence" name="residence" type="text" placeholder="거주지역" />
      </div>
      <div className="input-container">
        <input className="univ-input" id="univ" name="univ" type="text" placeholder="학교" />
      </div>
      <div className="input-container">
        <input className="contact-input" id="contact" name="contact" type="text" placeholder="연락처" />
      </div>
      <div className="input-container">
        <input className="sns-input" id="sns" name="sns" type="text" placeholder="SNS" />
      </div>
      <button type="submit" className="submit-btn">
        완료
      </button>
    </form>
  )
}

export default ProfileGeneragePage;