import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import decode, { JwtPayload } from 'jwt-decode';

/*------ MANTINE & ICONS ------*/
import { Burger, Avatar} from '@mantine/core';
import { FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'
import { IconContext } from 'react-icons';
import { BtnLogout, Dropdown, Nav, NavbarContainer, NavBtnLink, NavIcon, NavItem, NavItemBtn, NavLinks, NavLogo, NavMenu, NavUser } from './Navbar.elements';
import { Button } from '../../GlobalStyles';
import { IoMdLogIn } from 'react-icons/io';
import { AppDispatch, useAppDispatch } from '../..';
import { getUser } from '../../actions/Auth';


const Navbar = () => {

    /*----- HOOKS -----*/
    const dispatch: AppDispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    /*----- NAVBAR PART -----*/
    const [opened, setOpened] = useState(false);
    const [button, setButton] = useState(true);
    const title = opened ? 'Fermer le menu' : 'Ouvrir le menu';

    /*----- DROPDOWN PART -----*/
    const [userMenu, setUserMenu] = useState(false);
    const handleMenu = () => setUserMenu(!userMenu);

    /*----- RESPONSIVE BTN -----*/
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    /*----- AUTH USER PART -----*/
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')!));

    useEffect(() => {
        if(user) dispatch(getUser())
      },[])

    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        navigate('/');

        setUser(null);
    }

    /*----- MANAGE USER IMAGE -----*/
    const userData = useSelector((state: any) => state.user);
    const imgSrc = userData.picture;
    const usrName = userData.pseudo;
    const imgName = usrName?.charAt(0).toUpperCase();

    /*----- JWT TOKEN -----*/
    type customJwtPayload = JwtPayload & { exp: number };
    
    useEffect(() => {
        const token = user?.token;

        if(token){
            const decodedToken = decode<customJwtPayload>(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')!))
    }, [location])

  return (
   <>
    <IconContext.Provider value={{ color: 'var(--white-color)' }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon className="nav-icon" alt="Rabbit logo" width={50} height={50} fill="#FFF"/>
                    <h1 className="text-gradient">
                        WHITE <span>RABBIT</span>
                    </h1>
                </NavLogo>

                <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    title={title}
                    color='#FFF'
                    size="lg"
                    className="mobile-icon"
                />

                <NavMenu onClick={() => setOpened((o) => !o)} opened={opened}>

                    {user ? (

                        // DROPDOWN USER MENU
                        <>
                            <NavItem className="nav-item">
                                <NavLinks className='nav-links' to='/'>
                                    Accueil
                                </NavLinks>
                            </NavItem>

                            <NavItem className="nav-item">
                                <NavLinks className='nav-links' to='/'>
                                    Articles
                                </NavLinks>
                            </NavItem>

                            <IconContext.Provider value={{ color: 'var(--black-color)', size: '20px'}} >
                            <Dropdown>
                                <NavItem className="drop" onClick={handleMenu}>
                                {imgSrc ? 
                                    <Avatar 
                                        src={imgSrc} 
                                        alt={user.name}
                                        size="lg" 
                                        radius="xl"
                                    /> 
                                    :
                                    <Avatar color="cyan" size="lg" radius="xl">{imgName}</Avatar>
                                }
                                </NavItem>
                                <div className={userMenu ? 'menu active' : 'menu'}>
                                    <h3>{userData.pseudo}</h3>
                                    <ul>
                                        <li>
                                            <Link to='/profil'>
                                                <button>
                                                    <FaUser/>Profil
                                                </button>
                                            </Link>
                                        </li>

                                        <li>
                                            <button>
                                                <FaUser/>Autre
                                            </button>
                                        </li>

                                        <li>
                                            <button onClick={logout} >
                                                <BiLogOut/>Déconnexion
                                            </button>
                                        </li>
                                    </ul>                                    
                                </div>
                            </Dropdown>
                            </IconContext.Provider>

                            <NavUser>
                                <NavLinks className='nav-links' to='/profil'>
                                    Profil
                                </NavLinks>
                            </NavUser>

                            <NavUser>
                                <BtnLogout onClick={logout}>
                                    <Button fontBig={true} big={true}>
                                        Déconnexion
                                    </Button>
                                </BtnLogout>
                            </NavUser>
                        </>
                        ) : (
                            
                            // NOT CONNECTED USER MENU
                        <>
                            <NavItemBtn>
                                {button ? (
                                    <IconContext.Provider value={{ size: "1.5rem" }}>
                                        <NavBtnLink to='/profil'>
                                            <Button className='navBtn' fontBig={false} big={false}>
                                                <IoMdLogIn/> &nbsp; Connexion
                                            </Button>
                                        </NavBtnLink>
                                    </IconContext.Provider>
                                ) : (
                                    <NavBtnLink to='/profil'>
                                        <Button fontBig={true} big={true}>
                                            Connexion
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </>
                        )}

                </NavMenu>


            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
   </>
  )
}

export default Navbar