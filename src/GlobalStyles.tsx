import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        /*----- FONTS -----*/
        --montserrat-font: 'Montserrat', sans-serif;
        --poppins-font: 'Poppins', sans-serif;
        --ubuntu-font: 'Ubuntu', sans-serif;
        --start-font: 'Press Start 2P', cursive;
        /*----- COLORS -----*/
        --black-color: #000;
        --white-color: #FFF;
        --dark-chocolate : #1D1E16;
        --light-chocolate: #414332;
        --white-antique: #FAECD9;
        --error-color: #F43B47;
        --opaque-bg: #ffffff60;
        --dark-bg: #101522;
        --grey-color: #acacac;
        --blue-color: #4B59F7;
        --welcome-bg: #0F0E13;
        --input-color: #302D4D;
        --transparent-color: rgba(255, 255, 255, 0.05);
        /*----- GRADIENT ------*/
        --dark-welcome: radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
        --btn-gradient: linear-gradient(to right, #f43b47, #453a94) 1;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        list-style: none;
        outline: none;
        border: none;
        text-decoration: none;
        
        &::selection{
            background: var(--input-color);
        }
    }
    html {
        overscroll-behavior: contain;
        height: 100%;
        font-size: 16px;
        @media (prefers-reduced-motion: no-preference) {
            scroll-behavior: smooth;
        }
    }
    body{
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: var(--white-color);
        background-image: var(--dark-welcome);
        background-color: var(--welcome-bg);
        background-attachment: fixed;

        ::-webkit-scrollbar-track{
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 35px;
            background-color: var(--input-color);
        }

        ::-webkit-scrollbar{
            width: 10px;
        }

        ::-webkit-scrollbar-thumb{
            border-radius: 10px;
            box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(244,59,71,1) 35%, rgba(69,58,148,1) 100%);
            transition: all .5s ease-in-out;
            
            &:hover {
                background:linear-gradient(180deg, rgba(69,58,148,1) 0%, rgba(244,59,71,1) 35%, rgba(2,0,36,1) 100%);
            }
        }
        
    }
    body, input{
        font-family: var(--poppins-font);
    }

    .blue-input {
        background: #302D4D;
        border-radius: 16px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(0, 0, 0, 0.3);
    }

    .blue-glassmorphism {
        background: rgb(39, 51, 89, 0.4);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(0, 0, 0, 0.3);
    }

    .white-glass {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 16px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

`;

export default GlobalStyles;

export const ButtonCustom = styled.button<{big: boolean, fontBig: boolean}>`
    border-radius: 4px;
    font-family: var(--poppins-font);
    background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%);
    background-size: 200% auto;
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px' ) };
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 10px #eee;
    transition: all .3s ease-out;
    
    &.navBtn{
        display: flex;
        border-radius: 20px;
    }
    
    &:hover{
        background-position: right center;
        
    }
    @media screen and (max-width: 960px){
        width: 100%;
    }
`;



/*---------- THEMES ----------*/

export const lightTheme = {
    backgroundImg: "var(--white-color)",
    backgroundColor: "var(--welcome-bg)",
    primaryText: "var(--black-color)",
}

export const darkTheme = {
    backgroundImg: "var(--dark-welcome)",
    backgroundColor: "var(--welcome-bg)",
    primaryText: "var(--white-color)",
}