import { 
    BrowserRouter as Router,
    Navigate,
    Route, 
    Routes 
  } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Profil from '../pages/Profil/Profil'
import Trending from '../pages/Trending/Trending'


const Routing = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profil' element={<Profil/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path="*" element={<Navigate to="/" replace/>} />
        </Routes>
      </Router>
      </>
  )
}

export default Routing