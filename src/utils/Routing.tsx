import { 
    Navigate,
    Route, 
    Routes 
  } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home'
import Profil from '../pages/Profil/Profil'
import Trending from '../pages/Trending/Trending'
import GoToTop from './GoToTop';


const Routing = () => {
  return (
    <>
      <GoToTop/>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profil' element={<Profil/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path="*" element={<Navigate to="/" replace/>} />
        </Routes>
      </>
  )
}

export default Routing