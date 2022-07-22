import styled from "styled-components";

export const CommentContainer = styled.div`
  .comment-container {
    display: grid;
    grid-template-columns: 50px 1fr;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(39, 51, 89, 0.4);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 15px;
    margin: 5px 0;
    border-radius: 20px 20px 20px 6px;

    &.client {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
      border-radius: 20px 20px 6px 20px;
    }

    img {
      height: 40px;
      width: 40px;
      border-radius: 14px;
      box-shadow: 1px 1px 3px rgba(51, 51, 51, 0.192);
      object-fit: cover;

      @media screen and(max-width: 440px) {
        height: 37px;
        width: 37px;
      }
    }
    
    &__comment-header {
      display: flex;
      justify-content: space-between;

      @media screen and(max-width: 440px) {
        flex-direction: column;
      }

      &__pseudo {
        display: flex;

        h3 {
          font-family: var(--ubuntu-font);
        }
        span {
          transform: translate(6px, 4px);
          cursor: pointer;

          img {
            box-shadow: none;
            height: 15px;
            width: 15px;
          }
        }
      }

      span {
        font-size: 0.9rem;
        font-style: italic;
        font-family: var(--montserrat-font);
      }
    }
    p {
      margin-top: 4px;
      font-size: 0.9rem;
    }

    

    .edit-comment {
      color: $color-2;
      img {
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

      .edit-comment-form {
        margin-top: 14px;
        label {
          background: white;
          color: $color-1;
          padding: 6px 12px 5px;
          border-radius: 20px 20px 20px 6px;
          cursor: pointer;
          transition: 0.2s;
          display: inline-block;
          font-family: $font-3;

          &:hover {
            transform: scale(1.05);
          }
        }
        input[type="text"] {
          margin: 4px 0;
          background: $white;
          font-size: 1.15rem;
          padding: 16px;
          width: 100%;
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
            background: $color-2;
            width: inherit;
            transition: 0.2s;

            &:hover {
              width: inherit;
              background: $color-1;
            }
          }
        }
      }
    }
  }

  .comment-form {
      margin-top: 6px;

      input[type="text"] {
        width: 100%;
        height: 55px;
        margin: 10px 0;
        padding-left: 1rem;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px 20px 6px 20px;
        padding: 0 .4rem;
        font-size: 0.9rem;
        color: #FFF;

        &:focus {
          box-shadow: 0 0 2px rgba(51, 51, 51, 0.5);
        }
      }

      input[type="submit"] {
        margin-top: 4px;
        padding: 12px 16px;
        width: 120px;
        background: #387289;
        color: #FFF;
        border-radius: 20px 6px 20px 20px;
        transition: all 0.4s ease-in-out;
        float: right;
        cursor: pointer;

        &:hover {
          background: #41819b;
          letter-spacing: 2px;
          width: 130px;
        }
      }
      button {
        float: right;
        background: $color-1;
        transition: 0.2s;

        &:hover {
          background: $color-2;
        }
      }
    }
`;
