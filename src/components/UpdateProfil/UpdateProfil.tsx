import { useSelector } from "react-redux"
import LeftNav from "../../utils/LeftNav/LeftNav"
import { Div } from "./UpdateProfil.elements"
import { Avatar } from '@mantine/core';
import userDefault from "../../utils/img/user.png";

const UpdateProfil = () => {

  const userData = useSelector((state: any) => state.user);
  const userAvatar = userData.picture;
  return (
    <Div>
        <div className="profil-container">
          <LeftNav/>
          <h1>Profil de {userData.pseudo} </h1>

          <div className="profil-container__divide">

            <div className="profil-container__divide__left">
              <h3>Photo de profil</h3>
              { userAvatar ? 
                      <Avatar radius="xl" size={180} src={userAvatar} />
                      :
                      <Avatar radius="xl" size={180} src={userDefault} className="user-img" />}
            </div>

            <div className="profil-container__divide__right">

            </div>

          </div>
        </div>
    </Div>
  )
}

export default UpdateProfil