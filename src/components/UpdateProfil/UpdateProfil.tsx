import { useSelector } from "react-redux"
import LeftNav from "../../utils/LeftNav/LeftNav"
import { Div } from "./UpdateProfil.elements"
import Upload64 from '../../utils/Upload64/Upload64';

const UpdateProfil = () => {

  const userData = useSelector((state: any) => state.user);
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

            </div>

          </div>
        </div>
    </Div>
  )
}

export default UpdateProfil