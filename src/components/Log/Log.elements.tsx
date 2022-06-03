import styled from 'styled-components';

export const Div = styled.div`
    .form-container{
        margin: 0 auto;
        /* margin-left: 3rem; */
        width: 650px;
        height: 550px;
        border-radius: 16px;
        /* background-color: var(--l2); */
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        
        &__form{
            position: relative;
            z-index: 2;

            &__switch{
                cursor: pointer;
                appearance: none;
                background: rgba(255, 255, 255, .05);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                width: 4rem;
                height: 1.5rem;
                border-radius: 1.5rem;
                vertical-align: middle;
                transition: all 0.3s ease-in-out;
            }

            &__switch + label{
                margin-left: -0.8rem;
            }

            input:checked.form-container__form__switch{
                background: #a8a8a853;
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
            }

            &__switch + label::before{
                display: inline-block;
                content: '';
                background-color: #fff;
                height: 1.2rem;
                width: 1.2rem;
                border-radius: 50%;
                vertical-align: middle;
                position: relative;
                left: -3rem;
                transition: all .3s ease-in-out;
                cursor: pointer;
            }

            input:checked.form-container__form__switch + label::before{
                position: relative;
                left: -0.5rem;
                transition: all 0.3s ease-in-out;
            }
        }
    }
`;