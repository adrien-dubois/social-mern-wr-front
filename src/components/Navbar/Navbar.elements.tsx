import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoWR } from '../../utils/SvgComponent';


export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1600px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Nav = styled.nav`
    height: 90px;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0 0 16px 16px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
    top: 0;
    z-index: 5;

    .mobile-icon{
        display: none;

        @media screen and (max-width: 960px){
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 60%);
            font-size: 1.8rem;
            cursor: pointer;
        }
    }
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}


`;

export const NavLogo = styled(Link)`
    color: var(--white-color);
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 900;
    display: flex;
    align-items: center;

    .text-gradient{
        background-color: #fff;
        background-image: radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: all .3s ease-in-out;

        &:hover{
            text-shadow: 0 0 10px #eee;
        }

        span{
            margin-left: .5rem;
            font-weight: 300;
        }

        @media screen and (max-width: 1015px){
            font-size: 2.6rem;
        }
    }
    @media screen and (max-width: 540px){
        font-size: 1.4rem;

        svg{
            width: auto;
            height: 45px;
        }
    }

    @media screen and (max-width: 392px) {
        font-size: 1.2rem;
    }
`;

export const NavIcon = styled(LogoWR)`
    margin: 0.5rem;
    width: auto;
    height: 90px;
`;

export const NavMenu = styled.ul<{opened: boolean}>`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        position: fixed;
        justify-content: flex-start;
        padding: 0.75rem;
        width: 70vw;
        height: 100vh;
        /* position: absolute; */
        top: 80px;
        background: rgb(39, 51, 89, 0.4);
        border-radius: 0 16px 16px 0;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        border: 1px solid rgba(0, 0, 0, 0.3);
        left: ${({ opened }) => (opened ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 100;
    }
    
`;

export const NavItem = styled.li`
    height: 70px;
    border-bottom: 2px solid transparent;

    &.nav-item{

        &::after{
            display: block;
            content: '';
            border-width: 1px;
            border-style: solid;
            border-image: var(--btn-gradient);
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
        }
    
        &:hover::after{
            transform: scaleX(1);
            transform-origin:  0% 50%;
        }
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &:hover{
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: var(--white-color);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: var(--blue-color);
            transition: all .3s ease;
        }
    }
`;


export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;

export const BtnLogout = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;

export const Dropdown = styled.div`
    position: relative;

    .drop{
        margin-top: 1rem;
        margin-left: .5rem;
        cursor: pointer;
    }
    .menu{
        position: absolute;
        top: 120px;
        right: -112px;
        padding: 10px 20px;
        background: var(--white-color);
        width: 200px;
        box-sizing: 0 5px 25px rgba(0, 0, 0, .1);
        border-radius: 15px;
        transition: .5s ease-in-out;
        visibility: hidden;
        opacity: 0;

        &.active{
            visibility: visible;
            opacity: 1;
            top: 90px;
        }

        &::before{
            content: '';
            position: absolute;
            top: -5px;
            left: 50px;
            width: 20px;
            height: 20px;
            background: var(--white-color);
            transform: rotate(45deg);
        }

        h3{
            width: 100%;
            text-align: center;
            color: #555;
            font-weight: 500;
            line-height: 1.2rem;
            font-size: 1.1rem;
            padding: 20px 0;
        }

        ul{
            li{
                padding: 10px 0;
                border-top: 1px solid rgba(0, 0, 0, .5);
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                button{
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;

                    svg{
                        margin-right: 10px;
                        opacity: .5;
                        transition: .5s ease-in-out;
                    }
                }

                a, button{
                    color: var(--black-color);
                    font-size: 1rem;
                    font-weight: 500;
                    opacity: .5;
                    border: none;
                    outline: 0;
                    background: 0 0;
                    cursor: pointer;
                    transition: .5s ease-in-out;
                }

                &:hover{
                    svg, a, button{
                        opacity: .8;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 960px){
        display: none;
    }
`;

export const NavUser = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    display: none;

    &::after{
        display: block;
        content: '';
        border-width: 1px;
        border-style: solid;
        border-image: var(--btn-gradient);
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    &:hover::after{
        transform: scaleX(1);
        transform-origin:  0% 50%;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        display: flex;
        &:hover{
            border: none;
        }
    }
`;