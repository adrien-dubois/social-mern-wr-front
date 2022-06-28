import styled from 'styled-components';
import { MdClose } from "react-icons/md";

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
`;

export const ModalWrapper = styled.div<{showModal: boolean}>`
    width: 580px;
    height: 540px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
    background: var(--input-color);
    color: var(--white-antique);
    display: grid;
    position: relative;
    z-index: 10;
    border-radius: 10px;

    @media screen and (min-width: 1080px) and (max-width: 1600px) {
        width: 650px;
        height: 550px;
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
        }
        
        li + li{
            border-top: 1px solid rgba(0, 0, 0, .2);
        }
    }
`;