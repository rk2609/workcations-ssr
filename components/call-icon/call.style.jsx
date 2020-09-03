import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(255, 107, 108, 1);
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
  position: fixed;
  bottom: 30px;
  right: ${(props) => (props.hidden ? "30px" : "-100px")};
  cursor: pointer;
  transition: all 0.6s;
  z-index: 103;

  img {
    width: 50%;
    height: auto;
  }

  @media only screen and (max-width: 900px) {
    background-color: ${(props) =>
      props.iconPosition ? "rgba(0,0,0,0)" : "rgba(255, 107, 108, 1)"};
    border: ${(props) => (props.iconPosition ? "none" : "2px solid white")};
    box-shadow: ${(props) =>
      props.iconPosition ? "none" : "0px 0px 4px rgba(0, 0, 0, 0.2)"};
    bottom: ${(props) => (props.iconPosition ? "10px" : "30px")};
    right: ${(props) =>
      props.iconPosition ? "15px" : props.hidden ? "30px" : "-100px"};
  }
`;
