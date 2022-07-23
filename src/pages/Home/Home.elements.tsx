import styled from "styled-components";

export const Div = styled.div`
  height: 100vh;
  width: 100%;
  color: var (--white-color);
  position: relative;

  .home-container {
    position: absolute;
    top: 13%;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: 60px 1fr 375px;
    margin: 0 50px;

    &__main {
      margin: 1rem;
      
      .home-header {
        margin: 0 auto 12px;
        text-align: center;
      }
    }
  }
`;
