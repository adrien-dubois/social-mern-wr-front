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
        left: 0;
        right: 0;
        bottom: 0;
        display: grid;
        grid-template-columns: 60px 1fr 375px ;
        margin: 0 50px;

        &__main{
            margin: 1rem;
        }  
    }
`;