import styled from "styled-components";

export const Div = styled.div`
  background: rgb(39, 51, 89, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 20px;
  width: 80%;

  @media screen and(max-width: 550px) {
    min-width: 200px;
  }
 
        ul {
            display: flex;
            justify-content: center;
            margin-bottom: 18px;

            li {
                cursor: pointer;
                border-radius: 20px;
                padding: 12px 14px;
                transition: 0.2s;
                margin: 0 8px;
                display: flex;
                align-items: center;
            }
            .active-btn {
                font-family: var(--poppins-font);
                background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%);
                background-size: 200% auto;
                white-space: nowrap;
                padding: 10px 20px;
                color: #fff;
                font-size: 16px
                font-weight: 500;
                outline: none;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease-out;

                &:hover {
                    background-position: right center;
                }
            }

            li:not(.active-btn) {

                &:hover {
                    transform: translateX(3px);
                }
            }
            
        }   
        form {
            display: flex;
            align-items: center;
            flex-direction: column;
            input {
                padding: 10px 14px;
                margin: 0;
                font-size: 1.2rem;
                font-family: $font-2;
                border-radius: 20px;

                &:focus {
                    box-shadow: 0 0 3px rgba(51, 51, 51, 0.2);
                }

                &.error{
                    border: 1.5px solid #F43B47;
                }
            }
            button[type="submit"] {
                margin-top: 1rem;
                padding: 14px 14px;
                border-radius: 20px;
            }
        }

    
`;
