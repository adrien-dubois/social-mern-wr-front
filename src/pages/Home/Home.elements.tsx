import styled from 'styled-components';

export const Div = styled.div`
    background-image: var(--dark-welcome);
    background-color: var(--welcome-bg);
    min-height: 100vh;
    width: 100%;
    color: var (--white-color);
    position: relative;
    overflow: hidden;

    .home-container{
        position: absolute;
        top: 13%;
        width: 100%;
        height: 100%;
        margin: 0 50px;

        &__main{
            margin: 1rem 100px 0;
        }  
    }
`;