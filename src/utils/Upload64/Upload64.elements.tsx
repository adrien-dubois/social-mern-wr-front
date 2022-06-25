import styled from 'styled-components';

export const Div = styled.div`
    text-align: center;
    width: 100%;

    h3{
        margin-bottom: .9rem;
        text-transform: uppercase;
    }

    .upload_subtitle{
        font-style: italic;
        font-weight: 700;
        width: 60%;
        font-size: 1.2rem;
    }

    .card {

        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        &__btns{
            display: flex;

        }

        .contain{
            width: 100%;
            height: 100%;
            visibility: visible;
            opacity: 1;
            transition: opacity .8s ease-in;

            section{
                position: relative;
                display: flex;
                justify-content: center;
                flex-direction: column;
                margin-top: 25px;
                width: 100%;
                text-align: center;
                padding-top: 20px;
                transition: all 1.6s ;
        
                label {
                    font-size: 20px;
                    margin-bottom: 8px;
                    transition: all 1.6s;
                }
        
                span{
                    transition: all 1.6s;
                    font-size: 16px;
                    margin-bottom: 8px;
                    height: 18px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: var(--grey-color);
                }
            }
    
            
            .btn-container{
                display: flex;
                align-items: center;
                flex-direction: column;
                width: 100%;
                text-align: center;
                &__valid{
                    margin: 25px 0;
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
                }
    
                &__remove{
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

            &.hidden{
                visibility: hidden;
                opacity: 0;
                height: 0;
                width: 0;
                transition: opacity 0s;
            }
        }
            
    }

`;

export const ImgPreview = styled.div`
    width: 145px;
    height: 145px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;

    svg{
        width: 80px;
        height: 80px;
        transition: all 1s;
    }

    img{
        height: 140px;
        width: 140px;
        border-radius: 100%;
        transition: all 1s;
        object-fit: cover;
    }
`;

export const BtnSvg = styled.button`
    cursor: pointer;
    width: 120px;
    height: 60px;
    margin-top: 4rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(0, 0, 0, 0.692);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;


    
    svg{
        width: 40px;
        height: 40px;
        color: white;
        cursor: pointer;
        transition: all 1s;
    }


    input[type=file] {
        opacity: 0;
        position: absolute;
        border-radius: 100%;
        cursor: pointer;
        z-index: 99999;
        width: 145px; 
        height: 145px; 
    }

    &:hover{
        transition: all 1s;
        box-shadow: 0px 0px 25px 2px var(--white-antique);
    }

    
`;

export const BtnDel = styled.button`
        cursor: pointer;
    width: 120px;
    height: 60px;
    margin-top: 4rem;
    margin-left: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(0, 0, 0, 0.692);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;


    
    svg{
        width: 40px;
        height: 40px;
        color: var(--error-color);
        cursor: pointer;
        transition: all 1s;
    }

    &:hover{
        transition: all 1s;
        box-shadow: 0px 0px 25px 2px var(--white-antique);
    }
`;

export const Spinner = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 7px;
    width: 100%;
    z-index: 9999;
    top: 0;
    animation: spin 1s 0.1s ease-in-out infinite both;
  
    @keyframes spin {
    from {
        transform: rotate(0);
      }
    to {
        transform: rotate(360deg);
    }
`;