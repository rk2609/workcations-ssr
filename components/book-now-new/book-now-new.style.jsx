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

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  border-radius: 10px;
  height: 98vh;

  @media only screen and (max-width: 900px) {
    height: auto;
    width: auto;
    justify-content: unset;
    border-radius: 0px;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: 90vw;
    background-color: white;
  }
`;

export const Heading = styled.h2`
  font-size: 1.6vw;
  color: rgb(65 65 65);
  margin: 0.5vw 0vw;

  @media only screen and (max-width: 900px) {
    font-size: 5vw;
    margin: 3vw 0vw;
    font-weight: 600;
  }
`;

export const DurationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27vw;
  margin-bottom: 1vw;
  box-shadow: 0px 0px 3px 0px #aaaaaa;
  border-radius: 3px;

  @media only screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const DurationItem = styled.div`
  font-size: 1vw;
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 33%;
  padding: 0.2vw 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  color: ${(props) =>
    props.isDisabled
      ? "#6a6a6a"
      : props.isActive
      ? "rgb(255, 255, 255)"
      : "rgb(255, 128, 127)"};

  background-color: ${(props) =>
    props.isDisabled
      ? "#f8f7f8"
      : props.isActive
      ? "rgba(255, 128, 127, 1)"
      : "rgba(255, 128, 127, 0.2)"};

  &&:first-child {
    border-radius: 3px 0px 0px 3px;
  }

  &&:last-child {
    border-radius: 0px 3px 3px 0px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 3.2vw;
    padding: 1.5vw 0;
  }

  span {
    font-size: 0.8vw;

    @media only screen and (max-width: 900px) {
      font-size: 2.2vw;
    }
  }
`;
