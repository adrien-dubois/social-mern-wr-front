import { Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import IsEmpty from '../../utils/IsEmpty';
import { Div } from './PosterComponent.elements'
import { GoFileMedia } from "react-icons/go";
import PicturePost from './PicturePost';

const initialState = { message: "", picture: "", video: "" }

interface rootState {
  user: any
}

const PosterComponent = () => {


  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userData = useSelector((state: rootState) => state.user);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if(!IsEmpty(userData)) setIsLoading(false);
  }, [userData]);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const passData = (data: any) => {
    setFormData({
      ...formData,
      picture: data
    })
  }

  return (
    <Div>
        { isLoading ? (
          <Loader color="orange" size="sm"/>
        ) : (
          <>
            <div className="data">
              <p>
                <span>{ userData.following ? userData.following.length : 0 }</span>{" "} Abonnement{userData.following && userData.following.length > 1 ? "s" : ""}
              </p>
              <p>
                <span>{ userData.follower ? userData.follower.length : 0 }</span>{" "} Abonné{userData.follower && userData.follower.length > 1 ? "s" : ""}
              </p>
            </div>

              <div className="user-info">
            <NavLink to="/profil" style={{ width: '60px' }}>
                <img src={userData.picture} alt="user-img"/>
            </NavLink>
              </div>

            <div className="post-form">
              <textarea
                name='message'
                id="message"
                placeholder="Quoi de neuf?"
                onChange={handleChange}
              />
              <div className="footer-form">
                <div className="footer-form__icon">
                    {IsEmpty(formData.video) && (
                      <>
                        <PicturePost passData={passData}/>
                      </>
                    )}
                    {formData.video && (
                      <button onClick={() => setFormData({ ...formData, video: "" })} >Supprimer vidéo</button>
                    )}
                    
                </div>
              </div>
            </div>


          </>
        )}
    </Div>
  )
}

export default PosterComponent