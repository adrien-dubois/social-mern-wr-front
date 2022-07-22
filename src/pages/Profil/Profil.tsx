import Log from '../../components/Log/Log';
import UpdateProfil from '../../components/UpdateProfil/UpdateProfil';
import { Div } from './Profil.elements';

const Profil = () => {

  const user = localStorage.getItem('profile');
  return (
    <>
      <Div>
        <div className="container">

        { user ? (

          <UpdateProfil/>

        ) : (
          <div className="log-container">

            <Log signup={true} signin={false} />

            <div className="img-container">
              <img src='./assets/img/auth.png' alt='Authenfication guy'/>
            </div>

          </div>
        )}
        </div>
      </Div>
    </>
  )
}

export default Profil