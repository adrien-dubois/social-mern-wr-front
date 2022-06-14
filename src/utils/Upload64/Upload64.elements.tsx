import styled from 'styled-components';

export const Div = styled.div`
    text-align: center;

    h3{
        margin-bottom: .9rem;
        text-transform: uppercase;
    }

`;

export const ImgPreview = styled.div<{ top: number, width: number, height: number }>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin-top: ${props => props.top}px;
    background: transparent;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;


    
    svg{
        width: 80px;
        height: 80px;
        transition: all 1s;
    }

    img{
        width: ${props => props.width}px;
        height: ${props => props.height}px;
        border-radius: 100%;
        transition: all 1s;
        object-fit: cover;
    }

    input[type=file] {
        opacity: 0;
        position: absolute;
        border-radius: 100%;
        cursor: pointer;
        z-index: 99999;
        width: 145px;
        height: 145px;
    }

    &:hover{
        transition: all 1s;
        box-shadow: 0px 0px 15px 2px #387289;
    }
`;
