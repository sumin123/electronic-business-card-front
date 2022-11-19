import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage(data) {

  const { link } = useParams();
  const [ info, setInfo ] = useState({});

  useEffect(() => {
    async function getProfile() {
      const res = await fetch(`${process.env.REACT_APP_SERVER_IP}/back/profile/${link}`, {
        method: 'GET'
      });
      var data = await res.json();

      console.log(data);

      setInfo(data);
    }

    getProfile();
  }, [])

  return (
    <div className='test'>
      <div> 사진: {info.image} </div>
      <div> 이름: {info.name} </div>
      <div> 한 줄 소개: {info.description} </div>
      <div> 직장/직업: {info.job} </div>
      <div> 학교: {info.univ} </div>
      <div> 연락처: {info.contact} </div>
      <div> SNS: {info.sns} </div>
    </div>
  )
}

export default ProfilePage;