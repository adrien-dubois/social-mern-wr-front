import styled from "styled-components";

export const D = styled.div`


    .card-right {

      


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

`;
