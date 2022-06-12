import { NavLink } from 'react-router-dom';
import { Div } from './LeftNav.elements';
import { TbHome, TbUser } from 'react-icons/tb';
import { IoRocketOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';


const LeftNav = () => {
  return (
    <Div>
        <IconContext.Provider value={{ size: "2.4rem", color: "white" }}>
            <div className="icons">
                <div className="icons__bis">

                    {/* HOME */}
                    <NavLink to="/" className={(navData) => navData.isActive ? "active" : ""} >
                        <TbHome/>
                    </NavLink>
                    <br/>
                    {/* ROCKET */}
                    <NavLink to="/trending" className={(navData) => navData.isActive ? "active" : ""} >
                        <IoRocketOutline/>
                    </NavLink>
                    <br/>
                    {/* PROFILE */}
                    <NavLink to="/profil" className={(navData) => navData.isActive ? "active" : ""} >
                        <TbUser/>
                    </NavLink>


                </div>
            </div>
        </IconContext.Provider>
    </Div>
  )
}

export default LeftNav