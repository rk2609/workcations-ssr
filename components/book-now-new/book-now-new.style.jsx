import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  margin: 2.5vw 0vw 0vw 7vw;
  top: 55px;
  height: calc(100vh - 60px);
  max-height: 100%;
  width: 29vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.29);
  background-color: white;

  @media only screen and (max-width: 900px) {
    margin: 40px 0px 4vw 0px;
    position: unset;
    max-height: unset;
    height: auto;
    width: 90vw;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;
