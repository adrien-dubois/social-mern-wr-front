import styled from 'styled-components';

export const Div = styled.div`
    .edit-comment {
      color: #FFF;
        .tooltip {
            svg {
                float: right;
                margin-left: 10px;
                cursor: pointer;
                transition: 0.15s;
                box-shadow: none;
                height: 20px;
                width: 20px;
        
                &:hover {
                transform: scale(1.1);
                }
            }

            .tooltiptext{
                visibility: hidden;
                width: 120px;
                background-color: #000;
                color: #FFF;
                text-align: center;
                padding: 5px 0;
                border-radius: 6px;
                position: absolute;
                top: 65px;
                left: 101%;
                z-index: 1;

                &::after{
                    content: "";
                    position: absolute;
                    top: 50%;
                    right: 100%;
                    margin-top: -5px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: transparent black transparent transparent;
                }
            }
            
            &:hover .tooltiptext{
                visibility: visible;
            }
        }

      &__form {
        margin-top: 14px;
        label {
            svg {
                margin-left: 10px;
                cursor: pointer;
                transition: 0.15s;
                box-shadow: none;
                height: 20px;
                width: 20px;
                color: var(--white-antique);
        
                &:hover {
                transform: scale(1.1);
                }
            }

        }

        input[type="text"] {
            margin: 4px 0;
            color: var(--white-antique);
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1.5px solid rgba(255, 255, 255, 0.3);
            font-size: 0.9rem;
            padding: 0 .4rem;
            width: 100%;
            height: 35px;
            border-radius: 6px 20px 6px 20px;
        }
        .btn {
          display: flex;
          align-items: center;
          float: right;

          span {
            background: white;
            padding: 10px 5px;
            border-radius: 50px;
            margin-right: 6px;
            transition: 0.2s;
            cursor: pointer;

            &:hover {
              background: $color-2;
            }

            img {
              transform: translate(-5px, 0);
            }
          }
          input[type="submit"] {
            background: #387289;
            width: inherit;
            transition: all .4s ease-in-out;

            &:hover {
              width: inherit;
              background: #41819b;
            }
          }
        }
      }
    }
`;