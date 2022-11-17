function ProfileLinkGeneratePage() {
  return (
    <form className="container" action={`${process.env.REACT_APP_SERVER_IP}/back/profile-link`} method="POST" encType="multipart/form-data">
      <div>프로필 링크 만들기</div>
      <div className="input-container">
        <input className="head" id="head" name="profile-link" type="text" placeholder="링크 주소" />
      </div>

      <button type="submit" className="submit-btn">
        다음
      </button>
    </form>
  )
}

export default ProfileLinkGeneratePage;