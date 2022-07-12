import styled from 'styled-components';

export const Div = styled.div`
    overflow-y: auto;
    scroll-behavior: smooth;
    height: 84vh;

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
`;