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

            }    
            &__right{
                
                h4{
                    margin: 1.5rem auto;

                    span{
                        color: var(--white-antique);
                        font-style: italic;
                    }
                }

                .btn-container{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    width: 100%;
                    text-align: center;

                    &__valid{
                        margin: 15px 0;
                        border-radius: 20px;
                        border: none;
                        background: #387289;
                        width: 35%;
                        color: #FFF;
                        height: 40px;
                        font-weight: bold;
                        cursor: pointer;
        
                        &:hover{
                            transition: all 1s;
                            background: #66CBBC;
        
                        }

                        &.follow{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 30%;
                            span{
                                color: var(--white-antique);
                            }
                        }
                    }
        
                    &__remove{
                        margin: 0 auto;
                        margin-bottom: 15px;
                        border-radius: 20px;
                        border: none;
                        background: #ed3a53;
                        width: 30%;
                        color: #FFF;
                        height: 40px;
                        font-weight: bold;
                        cursor: pointer;
        
                        &:hover{
                            transition: all 1s;
                            background: #fd637b;
        
                        }
                    }
                }

                &__bio{
                    display: flex;
                    justify-content: center;
                    flex-direction: column;

                    h3{
                        text-align: center;
                    }


                    .bubble{
                        position: relative;
                        margin: 0 auto;
                        margin-top: 2rem;
                        padding: 1rem;
                        width: 500px;
                        max-height: 450px;
                        min-height: 100px;
                        text-align: center;
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 16px;
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(5px);
                        border: 2px solid rgba(0, 0, 0, 0.692);

                        &:before, &:after{
                            content: '';
                            position: absolute;
                            width: 0;
                            height: 0;
                        }
                    }

                    .speech:before{
                        left: 30px;
                        bottom: -50px;
                        border: 25px solid;
                        border-color: rgba(0, 0, 0, 0.692) transparent transparent rgba(0, 0, 0, 0.692);
                    }

                    .speech:after{
                        left: 31px;
                        bottom: -47px;
                        border: 25px solid;
                        border-color: #47475E transparent transparent #47475E;
                    }

                    p{
                        font-style: italic;
                        font-weight: 600;
                        color: var(--white-antique);
                    }

                    textarea{
                        font-family: var(--ubuntu-font);
                        color: var(--white-color);
                        font-weight: 400;
                        font-size: 1rem;
                        
                    }

                    button{
                        margin: 0 auto;
                        margin-top: 3rem;
                        width: 40%;
                        justify-content: center;
                    }
                }
                
            }
        }
    }
`;