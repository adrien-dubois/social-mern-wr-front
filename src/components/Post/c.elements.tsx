import styled from "styled-components";

export const D = styled.div`
  .card-container {
    display: grid;
    grid-template-columns: 66px 1fr;
    border: 2px solid $color-2;
    margin: 10px;
    padding: 16px;
    border-radius: 20px;
    margin: 8px auto;
    position: relative;
    min-height: 100px;

    @media screen and(max-width: 590px) {
      grid-template-columns: 1fr;
    }
    @media screen and(max-width: 440px) {
      padding-top: 26px;
    }

    .card-right {

      .button-container {
        justify-content: flex-end;
        display: flex;

        div {
          padding: 5px 9px;
          margin-left: 5px;
          background: $color-2;
          border-radius: 50px;
          transition: 0.1s;
          cursor: pointer;

          &:hover {
            transform: scale(1.07);
          }

          img {
            height: 16px;
            width: 16px;
            transform: translateY(3px);
          }
        }
      }

      .comment-container.client {
        background: $color-4;
        border: none;
        border-radius: 20px 20px 6px 20px;
      }
      .comment-container {
        display: grid;
        grid-template-columns: 50px 1fr;
        border: 1px solid $color-2;
        padding: 15px;
        margin: 5px 0;
        border-radius: 20px 20px 20px 6px;

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
        .comment-header {
          display: flex;
          justify-content: space-between;

          @media screen and(max-width: 440px) {
            flex-direction: column;
          }

          .pseudo {
            display: flex;

            h3 {
              font-family: $font-1;
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
            font-family: $font-1;
          }
        }
        p {
          margin-top: 8px;
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
              background: $white;
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
                background: $white;
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
          background: $color-4;
          border-radius: 20px 20px 6px 20px;
          padding: 20px;
          font-size: 1.4rem;

          &:focus {
            box-shadow: 0 0 2px rgba(51, 51, 51, 0.5);
          }
        }
        input[type="submit"] {
          margin-top: 4px;
          padding: 12px 16px;
          width: 120px;
          background: $color-2;
          border-radius: 20px 6px 20px 20px;
          transition: 0.2s;
          float: right;

          &:hover {
            background: $color-1;
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
      .like-container {
        span {
          font-size: 1.02rem;
          position: absolute;
          transform: translate(8px, -1px);
        }
      }
      .fa-share-alt {
        transform: translate(0, 2px);
      }
    }
    .update-post {
      textarea {
        width: 100% !important;
        height: 80px;
      }
      .button-container {
        text-align: right;

        button {
          margin: 0;
          margin-left: 5px;
          width: 150px;

          &:nth-child(1) {
            background: $color-1;
          }
        }
      }
    }
  }
`;