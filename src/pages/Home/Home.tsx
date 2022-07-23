import HomeLog from '../../components/HomeLog/HomeLog';
import PosterComponent from '../../components/PosterComponent/PosterComponent';
import Thread from '../../components/Thread/Thread'
import LeftNav from '../../utils/LeftNav/LeftNav'
import { Div } from './Home.elements'

const Home = () => {

  const user = localStorage.getItem('profile');

  return (
    <Div>
      <div className="home-container">
        <LeftNav/>
        <div className="home-container__main">
          <div className="home-header">
            {user ? <PosterComponent/> : <HomeLog signin={true} signup={false}/> }
          </div>
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