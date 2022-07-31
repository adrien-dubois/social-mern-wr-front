import { useSelector } from "react-redux"
import LeftNav from "../../utils/LeftNav/LeftNav"
import { Div } from "./UpdateProfil.elements"
import Upload64 from '../../utils/Upload64/Upload64';
import { useState } from "react";
import { updateBio } from "../../actions/User";
import { Button } from "../../GlobalStyles";
import { DateParser } from '../../utils/DateParser';
import ModalFoer from "../Modals/ModalFoer";
import ModalFoing from "../Modals/ModalFoing";
import { AppDispatch, useAppDispatch } from "../..";
import * as api from "../../api";

const UpdateProfil = () => {

  /*----- STORE -----*/
  const dispatch: AppDispatch = useAppDispatch();
  const userData = useSelector((state: any) => state.user);

  const [updateForm, setUpdateForm] = useState<boolean>(false);
  const [bio, setBio] = useState("");

  /*----- MODALS -----*/
  const [followingModal, setFollowingModal] = useState<boolean>(false);
  const [followersModal, setFollowersModal] = useState<boolean>(false);

  const handleUpdate = () => {
    const bios = JSON.stringify(bio);
    dispatch(updateBio(bios));
    setUpdateForm(false);
  }

  const sendAbort = () => {
    setUpdateForm(false)
  }

  const handleDownload = (e: any) => {
    e.preventDefault();
    api.downloadPdf()
    .then(
      (response) => {
        let fileName =  response.headers['content-disposition'].split('filename=')[1];
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName); 
        document.body.appendChild(link);
        link.click();
      }
    )
  }

  return (
    <Div>
        <div className="profil-container">
          <LeftNav/>
          <h1>Profil de {userData.pseudo} </h1>

          <div className="profil-container__divide">

            <div className="profil-container__divide__left">
              <Upload64/>
            </div>

            <div className="profil-container__divide__right">
              <div className="profil-container__divide__right__bio">
                <h3>Bio</h3>
                <button onClick={(e)=>{handleDownload(e)}}>
                  test dl
                </button>
                {updateForm === false && (
                  <>
                    <p className="bubble speech" onClick={() => setUpdateForm(!updateForm)} >
                      {userData.bio}
                    </p>
                    <Button 
                      big={false} 
                      fontBig={false} 
                      className="navBtn" 
                      onClick={() => setUpdateForm(!updateForm)} 
                    > Modifier bio </Button>
                  </>
                )}
                {updateForm && (
                  <>
                    <textarea
                      typeof="string"
                      className="bubble speech"
                      defaultValue={userData.bio}
                      name="bio"
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                    <div className="btn-container">
                      <button 
                      className="btn-container__valid"
                      onClick={handleUpdate} 
                      >Valider</button>
                      
                      <button 
                      className="btn-container__remove"
                      onClick={sendAbort} 
                      >Annuler</button>
                    </div>
                    
                  </>
                )}
              </div>

              <h4>
                Membre depuis : &nbsp; <span>{DateParser(userData.createdAt)}</span>
              </h4>

              <div className="btn-container">
                <h5 className="btn-container__valid follow" onClick={() => setFollowingModal(!followingModal)} >
                  Abonnements : &nbsp; <span>{userData.following ? userData.following.length : "0" }</span>
                </h5>

                <h5 className="btn-container__valid follow" onClick={() => setFollowersModal(!followersModal)} >
                  Abonnés : &nbsp; <span>{userData.follower ? userData.follower.length : "0" }</span>
                </h5> 

              </div>
            </div>
            {followersModal &&
              <ModalFoer showModal={followersModal} setShowModal={setFollowersModal} />
            }
            {followingModal &&
              <ModalFoing showModal={followingModal} setShowModal={setFollowingModal} />
            }
          </div>
        </div>
    </Div>
  )
}

export default UpdateProfil