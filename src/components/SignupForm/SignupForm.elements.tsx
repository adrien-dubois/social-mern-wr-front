import styled from 'styled-components';

export const Div = styled.div`

width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

form{
    width: 85%;
}

.btn-signin{
    margin-top: .5rem;
}

.input-file {
    margin: 0 auto;

    input[type=file]{
        width: 160px;
        margin-left: 5px;
        text-align: center;
    }

    input[type=file] + label{
        color: blue;
    }

    @media screen and (max-width: 1400px){
        margin: 0 0;
        width: 45%;
        display: flex;
    }
}


.input-file input[type="file" i]::-webkit-file-upload-button{
    width: 140px;
    height: 49px;
    outline: none;
    border: 2px solid rgba(0, 0, 0, .3);
    cursor: pointer;
    border-radius: 8px;
    color: var(--white-color);
    text-transform: uppercase;
    font-weight: 600;
    font-size: .72rem;
    margin: 10px 5px;
    background: var(--input-color);
    transition: all .3s ease-in-out ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover{
        background: #444166;
        border: 2px solid rgba(0, 0, 0, .6);
    }
}
`;