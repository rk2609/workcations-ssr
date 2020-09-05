import styled from "styled-components";

export const Container = styled.div`
  margin: 1em 0px;
  height: 15em;
  display: grid;
  grid-gap: 0.7em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  font-size: 2em;
  border-radius: 5px;
  background-color: white;
  padding: 1.5vw;

  div:first-child {
    grid-area: 1 / 1 / span 2 / span 2;
  }

  div:last-child {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: white;
  }

  @media only screen and (max-width: 900px) {
    height: 40vw;
    grid-gap: 1.5vw;
    font-size: 3.5vw;
    margin: 2.5vw 0px;
    padding: 1.5vw;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 6s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.06);
  }

  @media only screen and (max-width: 900px) {
    transition: all 3s ease-in-out;
  }
`;

export const LightBox = styled.div`
  position: fixed;
  top: ${(props) => (props.active ? "0vh" : "-100vh")};
  left: ${(props) => (props.active ? "0vw" : "-100vw")};
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: top 400ms ease-in-out;
`;

export const LightBoxFlex = styled.div`
  width: 900px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const ImageLightBox = styled.div`
  position: relative;
  left: ${(props) =>
    (props.imagesLength / 2 - 0.5) * 900 - props.position * 900}px;
  display: flex;
  justify-content: flex-start;
  transition: left 400ms ease-in-out;

  img {
    width: 900px;
    height: auto;

    @media only screen and (max-width: 768px) {
      width: 100vw;
    }
  }

  @media only screen and (max-width: 768px) {
    left: ${(props) =>
      (props.imagesLength / 2 - 0.5) * 100 - props.position * 100}vw;
  }
`;

export const CloseLightBox = styled.div`
  position: absolute;
  top: 20px;
  width: 90%;
  color: #000000;

  span {
    font-size: 0.6em;
    border: 1px solid black;
    padding: 5px 15px;
    border-radius: 3px;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      font-size: 1em;
    }
  }
`;

export const LeftArrow = styled.div`
  background-color: black;
  border-radius: 5px;
  font-size: 1em;
  line-height: 2em;
  height: 2em;
  cursor: pointer;
  z-index: 1050;
  color: white;
  position: fixed;
  left: ${(props) => (props.active && props.currentSlide ? "10px" : "-100vw")};
  top: 50vh;
  transition: left 500ms ease-in-out;
  padding: 0px 15px;

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const RightArrow = styled.div`
  background-color: black;
  border-radius: 5px;
  font-size: 1em;
  line-height: 2em;
  height: 2em;
  cursor: pointer;
  z-index: 1050;
  color: white;
  position: fixed;
  right: ${(props) =>
    props.active && props.imagesLength - props.currentSlide - 1
      ? "10px"
      : "-100vw"};
  top: 50vh;
  transition: right 500ms ease-in-out;
  padding: 0px 15px;

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;
