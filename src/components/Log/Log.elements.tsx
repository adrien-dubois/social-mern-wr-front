import styled from 'styled-components';

export const Div = styled.div`
    .form-container{
        margin: 0 auto;
        width: 650px;
        height: 620px;
        display: grid;
        grid-template-columns: 30% 70%;

        &__row{
            border-radius:  16px 0 0 16px ;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            border-left: 1px solid rgba(255, 255, 255, 0.3);
            

            &::before{
                content: "";
                position: absolute;
                height: 100%;
                width: 4px;
                top: 0;
                bottom: 0;
                right: 0;
                background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(244,59,71,1) 35%, rgba(69,58,148,1) 100%);
            }

            .sidebar{
                &__ul{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding-left: 5px;
                    padding-top: 40px;

                    &__li{
                        position: relative;
                        width: 94.5%;
                    }
                }
                
            }
        }

        .sign-component{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            /* height: 85%; */

             /*---- glassmorph ----*/
            border-radius: 0 16px 16px 0;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            border-right: 1px solid rgba(255, 255, 255, 0.3);

            .error-auth{
                font-style: italic;
                color: var(--error-color);
                text-transform: uppercase;
                font-weight: 600;
            }
            
            &__title{
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 2.2rem;
                font-weight: 700;
                margin-bottom: 10px;
                background-color: #fff;
                background-image: radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent; 
            }
        }
    }
`;

export const Buttons = styled.button`
    margin-top: 1rem;
    font-family: var(--poppins-font);
    background-color: transparent;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    color: var(--white-color);
    border-radius: 20px;
    cursor: pointer;
    transition: all .4s ease-out;

    &:hover{
        box-shadow: 0 0 10px #eee;
    }

    &.active{
        background: linear-gradient(to right, #f43b47 0%, #453a94 100%);
        background-size: 200% auto;
        transition: all .4s ease-out;
        
        &:hover{
            background-position: right center;
            box-shadow: 0 0 10px #eee;
            
        }
    }

    &__icon{
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 70px;
        text-align: center;
    }

    &__text{
        position: relative;
        display: block;
        padding-left: 10px;
        height: 60px;
        line-height: 55px;
        white-space: nowrap;
    }
`;