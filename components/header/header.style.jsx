import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0px;
  height: 50px;
  position: fixed;
  top: ${(props) => (props.visible ? "0px" : "-50px")};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  background-color: rgb(255, 255, 255);
  transition: top 0.5s;
  display: grid;
  grid-template-columns: 10vw 1fr 4fr 10vw;
  grid-template-areas: ". logo menu .";
  z-index: 100;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 5vw 1fr 1fr 5vw;
    grid-template-areas: ". logo hamburger .";
  }
`;

export const Logo = styled.a`
  grid-area: logo;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    height: 80%;
    width: auto;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  grid-area: menu;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.3s;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    background-color: white;
    position: fixed;
    top: 50px;
    right: ${(props) => (props.open ? "0px" : "-200px")};
    width: 200px;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100vh - 50px);
    border-top: 1.5px solid rgba(0, 0, 0, 0.1);
  }

  div {
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 55px;
    cursor: pointer;
    background-color: #ff6b6c;
    color: white;
    padding: 5px 25px;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const MenuOption = styled.a`
  text-transform: uppercase;
  color: black;
  font-weight: 600;
  margin-left: 55px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    margin: 0px;
    padding: 10px 0px 10px 15px;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  grid-area: hamburger;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  right: -500px;

  @media only screen and (max-width: 768px) {
    position: static;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    margin-right: -15px;
    padding: 0;
    outline: none;
  }

  path {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 300ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Line1 = styled.path`
  stroke-dasharray: ${(props) => (props.open ? "90 207" : "60 207")};
  stroke-dashoffset: ${(props) => (props.open ? "-134" : "0")};
`;

export const Line2 = styled.path`
  stroke-dasharray: ${(props) => (props.open ? "1 60" : "60 60")};
  stroke-dashoffset: ${(props) => (props.open ? "-30" : "0")};
`;

export const Line3 = styled.path`
  stroke-dasharray: ${(props) => (props.open ? "90 207" : "60 207")};
  stroke-dashoffset: ${(props) => (props.open ? "-134" : "0")};
`;
