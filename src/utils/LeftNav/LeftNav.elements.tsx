import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    to {transform: scaleY(1);}
`;

export const Div = styled.div`
    position: relative;

    .icons{
        position: fixed;
        z-index: 5;

        @media screen and(max-width: 590px) {
             margin: 2px 0 0 -9px;
        }

        &__bis{
            position: absolute;
            left: 10px;
            top: 4.4rem;

            a{
                transition: .1s;
                display: inline-block;
                height: 45px;
                width: 45px;
                display: flex;
                justify-content: center;
                align-items: center;


                &::before{
                    content: "";
                    transition: .15s ease;
                    transform: scale(0);
                    transform-origin: center;
                    z-index: -10;
                    height: 50px;
                    width: 50px;
                    position: absolute;
                    background: var(--input-color);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50px;
                }

                &:hover{
                    transform: scale(1.02);
                }
                &:hover::before{
                    transform: scale(1);

                    @media screen and(max-width: 590px) {
                        background: #ff7b77;
                        height: 34px;
                        width: 34px;
                    }
                }

                svg{

                    @media screen and(max-width: 590px) {
                        height: 34px;
                        width: 34px;
                    }
                }
            }

            .active{
                position: relative;

                &::after{
                    content: "";
                    height: 45px;
                    width: 3px;
                    position: absolute;
                    background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(244,59,71,1) 35%, rgba(69,58,148,1) 100%);
                    left: -9px;
                    bottom: -1px;
                    border-radius: 40px;
                    transform: scaleY(0);
                    animation: ${scale} 1.5s ease forwards;

                    @media screen and(max-width: 590px) {
                        height: 33px;
                        left: -8px;
                    }
                }
            }
        }
    }
`;