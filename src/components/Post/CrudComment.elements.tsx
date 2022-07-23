import styled from "styled-components";

export const Div = styled.div`
  .edit-comment {
    color: #fff;
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

      .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        top: 65px;
        left: 101%;
        z-index: 1;

        &::after {
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

      &:hover .tooltiptext {
        visibility: visible;
      }
    }

    &__form {
      margin-top: 14px;

      input[type="text"] {
        margin: 4px 0;
        color: var(--white-antique);
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1.5px solid rgba(255, 255, 255, 0.3);
        font-size: 0.9rem;
        padding: 0 0.4rem;
        width: 100%;
        height: 35px;
        border-radius: 6px 20px 6px 20px;
      }
      .btn {
        display: flex;
        align-items: center;
        float: right;

        label, span {
          transition: 0.2s;
          cursor: pointer;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            color: var(--white-antique);
            text-align: center;
            height: 20px;
            width: 20px;
            margin: 0 auto;
            line-height: 1;
            transition: 0.15s;

            &:hover {
              transform: scale(1.1);
            }
          }
        }
        input[type="submit"] {
          margin-top: 4px;
          padding: 4px 16px;
          width: 120px;
          background: #387289;
          color: #fff;
          border-radius: 20px 6px 20px 20px;
          transition: all 0.4s ease-in-out;
          float: right;
          cursor: pointer;

          &:hover {
            background: #41819b;
            letter-spacing: 1px;
            width: 130px;
          }
        }
      }
    }
  }
`;
