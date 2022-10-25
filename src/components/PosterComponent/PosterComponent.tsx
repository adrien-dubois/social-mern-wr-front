import { Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import IsEmpty from '../../utils/IsEmpty';
import { Div } from './PosterComponent.elements'
import PicturePost from './PicturePost';
import { timestampParser } from '../../utils/TimeStampParser';

interface IPicture{
  
    name: string;
    file: string;
    size: string;
    value: string;
  
}

interface IMessage {
  message: string;
  picture: IPicture;
  video: string;
}

const initialState: IMessage = { 
  message: "", 
  picture: {
    name: '', 
    file: '', 
    size: '', 
    value: ''
  }, 
  video: "" 
}

interface rootState {
  user: any
}

const PosterComponent = () => {


  const [isLoading, setIsLoading] = useState<boolean>(true);
  const userData = useSelector((state: rootState) => state.user);
  const [formData, setFormData] = useState<IMessage>(initialState);

  useEffect(() => {
    if(!IsEmpty(userData)) setIsLoading(false);
  }, [userData]);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePost = () => {
    console.log(formData)
  }

  const cancelPost = () => {
    setFormData({
      ...formData,
      picture: {
        name: '',
        size: '',
        file: '',
        value: ''
      },
      message: "",
      video: ""
    });
  }

  const passData = (data: IPicture) => {
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
                value={formData.message}
              />

              {formData.message || formData.picture.name || formData.video.length > 20 ? (
                <div className="card-container">
                  <div className="card-container__left">
                    <img src={userData.picture} alt="usrpicture"/>
                  </div>

                  <div className="card-container__right">
                    <div className="card-container__right__header">
                      <div className="card-container__right__header__pseudo">
                        <h3>{userData.pseudo}</h3>
                        <span>{timestampParser(Date.now())}</span>
                      </div>
                    </div>
                    <div className="card-container__right__content">
                      <p>{formData.message}</p>
                      {formData.picture.name !== '' &&
                        <img src={formData.picture.value} alt="preview"/>
                      }
                    </div>
                  </div>
                </div>
              ) : null}

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

                <div className="footer-form__btn-send">

                  {formData.message || formData.picture.name || formData.video.length > 20 ? (
                    <button className="cancel" onClick={cancelPost} >
                        Annuler
                    </button>
                  ) : null}

                  <button className="send" onClick={handlePost} >
                    Envoyer
                  </button>

                </div>
              </div>
            </div>


          </>
        )}
    </Div>
  )
}

export default PosterComponent