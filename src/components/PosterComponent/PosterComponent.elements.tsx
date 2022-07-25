import styled from 'styled-components'

export const Div = styled.div`
  margin: 0 auto 0;
  padding: 16px 40px;
  border-radius: 20px;
  position: relative;
  background: rgb(39, 51, 89, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 80%;

  .data {
    position: absolute;
    right: 42px;
    text-align: right;
  
    @media screen and(max-width: 420px) {
      right: 10px;
    }
    @media screen and(max-width: 380px) {
      display: none;
    }
  
    span {
      font-weight: bold;
    }
  }
    .user-info {
        margin-bottom: 10px;
            img {
                border-radius: 20px;
                height: 60px;
                width: 60px;
                box-shadow: 2px 2px 2px rgba(51, 51, 51, 0.16);
                object-fit: cover;
            }
            h3 {
                color: #000;
            }
    }

  .post-form {
    position: relative;
    margin: 0 auto 0;

    textarea {
      height: 62px;
      width: 100%;
      font-size: 1.1rem;
      font-family: var(--ubuntu-font);
      color: #FFF;
      padding: 12px 15px;
      border-radius: 20px 20px 6px 20px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);

      &::placeholder{
        font-style: italic;
        color: var(--grey-color);
      }
    }
    .card-container {
        display: grid;
        grid-template-columns: 65px 1fr;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px 20px 6px 20px;

      &__left {
        text-align: left;
        img {
            margin-left: .5rem;
            margin-top: 5px;
            border-radius: 20px;
            height: 60px;
            width: 60px;
            box-shadow: 2px 2px 2px rgba(51, 51, 51, 0.16);
            object-fit: cover;
          @media screen and(max-width: 590px) {
            margin-left: 0;
          }
        }
      }

      &__right {
        @media screen and(max-width: 590px) {
          margin-left: 0;
        }
        &__header {
            

            @media screen and(max-width: 632px) {
                flex-direction: column;
            }
            @media screen and(max-width: 590px) {
                margin: 0;
            }
            &__pseudo {

                @media screen and(max-width: 440px) {
                    transform: translateY(-8px);
                }

                display: flex;
                justify-content: space-between;
                margin: 2px 10px;
                min-height: 35px;
                width: 95%;

                span {
                    font-style: italic;
                    font-family: var(--font-ubuntu);
                    color: var(--grey-color);
                    
                    @media screen and(max-width: 632px) {
                        position: absolute;
                        top: 40px;
                    }
                    @media screen and(max-width: 590px) {
                        left: 68px;
                    }
                    @media screen and(max-width: 440px) {
                    left: 14px;
                    top: 60px;
                    }
                }
            }
        }
        &__content {
          padding: 6px 9px;
          p {
            text-align: left;
            margin: 2px 0 6px;
            font-size: 1.1rem;
          }
          img {
            width: 100%;
            border-radius: 6px;
            margin-top: 12px;
          }
          @media screen and(max-width: 632px) {
            margin-top: 20px;
          }
        }
      }
    }
    .footer-form {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 100%;

      &__icon {
        position: relative;
        cursor: pointer;
        width: 30px;
        height: 20px;

        svg {
          position: absolute;
          height: 24px;
          width: 24px;
          transform: translate(-18px, -1px);
        }

        button {
          width: 190px;
          padding: 10px 20px;
          background: var(--white-antique);
          transition: 0.2s;

          &:hover {
            background: $color-3;
          }
        }

        input {
          width: 25px;
          height: 25px;
          position: absolute;
          transform: translate(-16px, -3px);
          opacity: 0;
          cursor: pointer;

          &::-webkit-file-upload-button {
            cursor: pointer;
          }
        }
      }
      p {
        font-family: $font-3;
        margin-top: 4px;
        color: red;
      }
      &__btn-send {

        .cancel {
          border-radius: 20px 20px 20px 6px;
          margin-right: 8px;
          color: #FFF;
          background: #ed3a53;

          &:hover {
            background: #da364c;
            letter-spacing: 1px;
          }
        }
        .send {
            background: #387289;
          &:hover {
            background: #41819b;
            letter-spacing: 1px;
          }
        }
        button {
          margin-top: 4px;
          padding: 4px 16px;
          width: 120px;
          color: #fff;
          border-radius: 20px 6px 20px 20px;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
        }
      }
    }
  }

`;
