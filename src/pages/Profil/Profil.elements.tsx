import styled from 'styled-components';

export const Div = styled.div`
    background-image: var(--dark-welcome);
    background-color: var(--welcome-bg);
    min-height: 100vh;
    width: 100%;
    color: var (--white-color);
    position: relative;
    overflow: hidden;

    &:before{
        content: '';
        position: absolute;
        width: 2000px;
        height: 2000px;
        border-radius: 50%;
        background: rgb(39, 51, 89, 0.4);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(0, 0, 0, 0.3);
        top: -10%;
        right: 48%;
        transform: translateY(-50%);
    }

    .container{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        .log-container{
            position: absolute;
            top: 13%;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            justify-content: space-between;
            text-align: center;
            align-items: flex-start;
    
            @media screen and(max-width: 885px) {
              grid-template-columns: 1fr;
            }
    
            .img-container {
                display: grid;
                align-items: center;
                justify-content: center;
                height: 100%;
            
                @media screen and(max-width: 885px) {
                        display: none;
                    }
            }
        }
    }
`;