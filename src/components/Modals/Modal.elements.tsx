import styled, { keyframes } from 'styled-components';
import { MdClose } from "react-icons/md";

const modal = keyframes`
to { transform: scale(1) translate(0%) }
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
`;

export const ModalWrapper = styled.div<{showModal: boolean}>`
    width: 580px;
    height: 540px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
    background: var(--input-color);
    color: var(--white-antique);
    display: grid;
    position: relative;
    z-index: 1000;
    border-radius: 10px;
    transform: translate(-100%);
    transform: scaleY(0);
    animation: ${modal} .5s forwards;

    @media screen and (min-width: 1080px) and (max-width: 1600px) {
        width: 650px;
        height: 550px;
    }
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: var(--white-antique);

    h2{
        text-transform: uppercase;
        text-shadow: 6px 6px 6px rgba(0, 0, 0, .8);
    }

    ul{
        width: 70%;
        margin-bottom: .8rem;
        text-align: center;
        counter-reset: index;
        padding: 0;
        
        li{
            counter-increment: index;
            display: flex;
            align-items: center;
            padding: 12px 0;
            box-sizing: border-box;

            &::before{
                content: counters(index, ".", decimal-leading-zero);
                font-size: 1.5rem;
                text-align: right;
                font-weight: bold;
                min-width: 50px;
                padding-right: 12px;
                font-variant-numeric: tabular-nums;
                align-self: flex-start;
                background-image: linear-gradient(to bottom, aquamarine, orangered);
                background-attachment: fixed;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .modal-infos{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }

            img{
                max-width: 80px;
                height: 80px;
                border-radius: 14px;
                border: 1.8px solid rgba(255, 255, 255, 0.3);
            }
            button{
                padding: 10px 24px;
                background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%);
                background-size: 200% auto;
                white-space: nowrap;
                color: var(--white-antique);
                font-weight: 600;
                margin-top: .5rem;
                border: none;
                text-transform: uppercase;
                border-radius: 24px;
                cursor: pointer;
                transition: all .4s ease-in;

                &:hover{
                    background-position: right center;
                    box-shadow: 0 0 10px var(--white-antique);
                }
            }
        }

        li + li{
            border-top: 2px solid rgba(0, 0, 0, .2);
        }
    }
`;


export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;