import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7vw;
  margin: 0px;

  @media only screen and (max-width: 900px) {
    gap: 1.5vw;
  }
`;

export const GridItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 2px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  color: rgb(112, 112, 112);
  font-size: 0.8em;

  @media only screen and (max-width: 900px) {
    font-size: 3vw;
  }
`;

export const GridImage = styled.div`
  height: 4vw;
  width: 30%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media only screen and (max-width: 900px) {
    height: 12vw;
    width: 40%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    justify-content: space-evenly;
  }
`;

export const Name = styled.span`
  color: #474950;
  font-size: 1.3em;
  font-weight: bold;
  margin: 5px 0px 0px 15px;

  @media only screen and (max-width: 900px) {
    font-size: 3.3vw;
    margin: 1vw 0px 0px 2vw;
  }
`;

export const Distance = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    padding: 0px 15px;
    font-size: 0.9em;

    @media only screen and (max-width: 900px) {
      padding: 0px 2vw;
      font-size: 3vw;
    }
  }
`;
