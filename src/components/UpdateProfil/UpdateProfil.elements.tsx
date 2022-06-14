import styled from 'styled-components';

export const Div = styled.div`
    position: absolute;
    top: 13%;
    width: 100%;
    margin: 0 50px;
    
    .profil-container{
        h1{
            text-align: center;
        }

        &__divide{

            display: grid;
            grid-template-columns: 50% 50%;
            justify-items: center;

            @media screen and(max-width: 700px) {
                grid-template-columns: 1fr;
            }

            &__left, &__right {
                width: 80%;
                min-height: 600px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 16px;
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 2px solid rgba(255, 255, 255, 0.3);
                padding: 25px;
                margin: 20px 10px;
                display: flex;
                flex-direction: column;
                align-items: center;

                
            &__left{
                
            }
        }
    }
`;