import styled from "styled-components";

export const Container = styled.div`
  width: 10vw;
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 1.7vw;
    padding-bottom: 0.5vw;

    @media only screen and (max-width: 900px) {
      width: 7vw;
      margin-bottom: 0.5vw;
    }
  }

  span {
    text-align: center;
  }

  @media only screen and (max-width: 900px) {
    width: 17vw;
    font-size: 2.4vw;
    margin: 1vw;
    text-align: center;
  }
`;
