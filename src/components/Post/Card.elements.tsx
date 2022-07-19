import styled from 'styled-components'

export const Li = styled.li`
    display: grid;
    width: 80%;
    grid-template-columns: 66px 1fr;
    background: rgb(39, 51, 89, 0.4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    margin: 10px;
    padding: 16px;
    margin: 8px auto;
    position: relative;
    min-height: 100px;

    @media screen and(max-width: 590px) {
        grid-template-columns: 1fr;
    }
    @media screen and(max-width: 440px) {
        padding-top: 26px;
    }

    .card-left {
        img {
            height: 52px;
            width: 52px;
            border-radius: 20px;
            box-shadow: 1px 1px 3px rgba(51, 51, 51, 0.192);
            object-fit: cover;

            @media screen and(max-width: 590px) {
                height: 40px;
                width: 40px;
                margin-left: 18px;
                border-radius: 14px;
            }
        }

        @media screen and(max-width: 590px) {
            position: absolute;
            transform: translate(17px, 18px);
        }
    }

    .card-right{

        p {
            margin: 3px 0 9px;
            font-size: 1.1rem;

            @media screen and(max-width: 440px) {
                margin-top: -18px;
            }
        }

        @media screen and(max-width: 590px) {
            margin-left: 18px;
        }

        &__header{
            display: flex;
            justify-content: space-between;
            margin: 2px 0 4px;
            min-height: 35px;

            @media screen and(max-width: 590px) {
                margin: 12px 0 14px;
            }

            @media screen and(max-width: 440px) {
                flex-direction: column;
            }

            span {
                font-style: italic;
                font-family: var(--font-ubuntu);
                color: var(--grey-color);

                @media screen and(max-width: 440px) {
                    transform: translate(52px, -20px);
                }
            }

            &__pseudo{
                display: flex;

                @media screen and(max-width: 590px) {
                    margin-left: 52px;
                }
                @media screen and(max-width: 440px) {
                    transform: translateY(-18px);
                }

                span {
                    transform: translate(0px, -5px);

                    @media screen and(max-width: 440px) {
                        margin: 0px 0 -10px;
                        padding: 0;
                    }

                    svg {
                        padding: 5px;
                        cursor: pointer;
                        transition: 0.15s;
                        box-shadow: none;
                        height: 28px;
                        width: 28px;
                        color: #FFF;

                        &:hover {
                            transform: scale(1.2) translate(0px, 0px);
                        }
                    }

                }

            }
        }

        &__update-post {
            textarea {
                color: var(--white-color);
                font-size: 1rem;
                font-family: var(--ubuntu-font);
                width: 100%;
                height: 100px;
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.3);
                padding: 10px;
                border-radius: 20px 20px 6px 20px;
            }
            &__btn-container {
                display: flex;
                align-items: flex-end;
                flex-direction: column;
                width: 100%;
                text-align: center;
                &__btn {
                    margin: 15px 0;
                    border-radius: 20px;
                    border: none;
                    background: #387289;
                    width: 240px;
                    color: #FFF;
                    height: 30px;
                    font-weight: bold;
                    cursor: pointer;
                    transform: translateY(-3px);
                    transition: all .5s ease-in;

                    &:hover {
                        transition: all .5s ease-out;
                        background: #41819b;
                        width: 250px;
                        letter-spacing: 1px;
                    }
                }
            }
        }

        &__card-pic {
            width: 100%;
            border-radius: 6px;
            margin-top: 12px;
            box-shadow: 0 0 3px rgba(51, 51, 51, 0.342);
        }

        iframe {
            width: 100%;
            min-height: 330px;
            border-radius: 6px;
            box-shadow: 0 0 3px rgba(51, 51, 51, 0.342);
        }

        &__button-container {
            justify-content: flex-end;
            display: flex;

            div {
                padding: 5px 9px;
                margin-left: 5px;
                background: #302D4D;
                border-radius: 50px;
                transition: 0.1s;
                cursor: pointer;

                &:hover {
                    transform: scale(1.07);
                }

                svg {
                    height: 16px;
                    width: 16px;
                    transform: translateY(2px) translateX(1px);
                }
            }
        }
            
        &__card-footer{
            display: flex;
            align-items: center;
            justify-content: center;
            justify-content: space-between;
            padding: 12px 0 4px;

            svg {
                height: 22px;
                width: 22px;
                cursor: pointer;
                transition: 0.2s;

                &:hover {
                    transform: scale(1.2);
                }
            }
            &__comment-icon,
            &__like-container {
                display: flex;
                align-items: center;

                span {
                    font-size: 1.02rem;
                    position: absolute;
                    transform: translate(29px, 2px);
                }
            }
        }

        
    }
`;