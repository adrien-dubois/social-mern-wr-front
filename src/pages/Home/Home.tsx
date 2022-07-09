import Navbar from '../../components/Navbar/Navbar'
import Thread from '../../components/Thread/Thread'
import LeftNav from '../../utils/LeftNav/LeftNav'
import { Div } from './Home.elements'

const Home = () => {

  const user = localStorage.getItem('profile');

  return (
    <Div>
      <Navbar/>
      <div className="home-container">
        <LeftNav/>
        <div className="home-container__main">
          {user ? 
          <Thread/>
          :
          <p>Pas connecté</p>
        }
        </div>
        <div className="home-container__right"></div>
      </div>
    </Div>
  )
}

export default Home