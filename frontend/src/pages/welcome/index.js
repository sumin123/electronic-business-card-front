function WelcomePage() {
  const redirectToProfileEdit = () => {
    window.location.replace("http://localhost:3000/profile-generate")
  }

  return (
    <div>
      <div>가입을 축하합니다.</div>

      <button type="submit" className="submit-btn" onClick={redirectToProfileEdit}>
        프로필 작성하기
      </button>
    </div>
  )
}

export default WelcomePage;