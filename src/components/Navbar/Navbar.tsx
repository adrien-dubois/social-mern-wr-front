import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import decode, { JwtPayload } from 'jwt-decode';

/*------ MANTINE & ICONS ------*/
import { Burger, Avatar, Menu, UnstyledButton} from '@mantine/core';
import { FaRegUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'
import { IconContext } from 'react-icons';
import { BtnLogout, Nav, NavbarContainer, NavBtnLink, NavIcon, NavItemBtn, NavLinks, NavLogo, NavMenu, NavUser } from './Navbar.elements';
import { ButtonCustom } from '../../GlobalStyles';
import { IoMdLogIn } from 'react-icons/io';
import { getUser } from '../../actions/Auth';
import { AppDispatch, useAppDispatch } from '../..';
import { IoRocketOutline } from 'react-icons/io5';


const Navbar = () => {

    /*----- HOOKS -----*/
    const dispatch: AppDispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    /*----- NAVBAR PART -----*/
    const [opened, setOpened] = useState(false);
    const [button, setButton] = useState(true);
    const title = opened ? 'Fermer le menu' : 'Ouvrir le menu';

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

            if(decodedToken.exp * 1000 < new Date().getTime()){
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')!))
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            <IconContext.Provider value={{ color: "#000" }} >
                                <Menu shadow="md" width={200} >
                                    <Menu.Target>

                                    {imgSrc ? 
                                    <UnstyledButton title={title} >
                                        <Avatar 
                                            src={imgSrc} 
                                            alt={user.name}
                                            size="lg" 
                                            radius="xl"
                                        /> 
                                    </UnstyledButton>
                                        :
                                        <UnstyledButton>
                                            <Avatar color="cyan" size="lg" radius="xl">{imgName}</Avatar>
                                        </UnstyledButton>
                                    }
                                    </Menu.Target>
                                
                                
                                    <Menu.Dropdown>

                                        <Menu.Label>{userData.pseudo}</Menu.Label>
                                        
                                        <Menu.Item 
                                            icon={<FaRegUser/>} 
                                            component={Link} 
                                            to="/profil" 
                                        >
                                            Profil  
                                        </Menu.Item>
                                        
                                        <Menu.Item icon={<IoRocketOutline/>}>
                                            Trends
                                        </Menu.Item>

                                        <Menu.Divider/>

                                        <Menu.Item 
                                            color="red"
                                            icon={<BiLogOut/>} 
                                            onClick={logout}
                                        >
                                            Déconnexion
                                        </Menu.Item>
                                                                        
                                    </Menu.Dropdown>
                                
                                </Menu>
                            </IconContext.Provider>

                            <NavUser>
                                <NavLinks className='nav-links' to='/profil'>
                                    Profil
                                </NavLinks>
                            </NavUser>

                            <NavUser>
                                <BtnLogout onClick={logout}>
                                    <ButtonCustom fontBig={true} big={true}>
                                        Déconnexion
                                    </ButtonCustom>
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
                                            <ButtonCustom className='navBtn' fontBig={false} big={false}>
                                                <IoMdLogIn/> &nbsp; Connexion
                                            </ButtonCustom>
                                        </NavBtnLink>
                                    </IconContext.Provider>
                                ) : (
                                    <NavBtnLink to='/profil'>
                                        <ButtonCustom fontBig={true} big={true}>
                                            Connexion
                                        </ButtonCustom>
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