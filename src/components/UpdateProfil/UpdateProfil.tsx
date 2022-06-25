import { useSelector } from "react-redux"
import LeftNav from "../../utils/LeftNav/LeftNav"
import { Div } from "./UpdateProfil.elements"
import Upload64 from '../../utils/Upload64/Upload64';
import { useState } from "react";
import { AppDispatch, useAppDispatch } from '../../index';
import { updateBio } from "../../actions/User";

const UpdateProfil = () => {

  const dispatch: AppDispatch = useAppDispatch();
  const userData = useSelector((state: any) => state.user);
  const [updateForm, setUpdateForm] = useState<boolean>(false);
  const [bio, setBio] = useState("");

  const handleUpdate = () => {
    const bios = JSON.stringify(bio);
    dispatch(updateBio(bios));
    setUpdateForm(false);
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

                {updateForm === false && (
                  <>
                    <p onClick={() => setUpdateForm(!updateForm)} >
                      {userData.bio}
                    </p>
                    <button onClick={() => setUpdateForm(!updateForm)} >
                      Modifier bio
                    </button>
                  </>
                )}
                {updateForm && (
                  <>
                    <textarea
                      typeof="string"
                      defaultValue={userData.bio}
                      name="bio"
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                    <button onClick={handleUpdate} >
                      Valider modifications
                    </button>
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
    </Div>
  )
}

export default UpdateProfil