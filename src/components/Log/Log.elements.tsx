import styled from 'styled-components';

export const Div = styled.div`
    .form-container{
        margin: 0 auto;
        width: 650px;
        height: 550px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        display: grid;
        grid-template-columns: 35% 65%;
        
        &__row{
            display: flex;
            justify-content: space-between;

            &__buttons{
                display: flex;
                flex-direction: column;
                width: 60%;
                margin-left: .8rem;

            }
            
        }
    }
`;

export const Buttons = styled.button`
    border-radius: 50px;
    margin-top: 1rem;
    font-family: var(--poppins-font);
    background-color: transparent;
    padding: 6px 16px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .3s ease-out;
    
    &:hover, &.active{
        background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%);
        background-size: 200% auto;
        white-space: nowrap;
        box-shadow: 0 0 10px #eee;
    }
    
    @media screen and (max-width: 960px){
        width: 100%;
    }
`;