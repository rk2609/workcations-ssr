import styled from "styled-components";

export const Container = styled.div`
  width: 73vw;

  @media only screen and (max-width: 900px) {
    width: 100%;
    display: block;
    padding: 0px 3vw;
  }
`;

export const PropertyListContainer = styled.div`
  width: 100%;
  /*display: flex;
  flex-direction: row;
  flex-wrap: wrap;*/
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: flex-start;
  column-gap: 3vw;

  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 6vw;
  }
`;

export const FilterMobile = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.8fr;
    height: 80px;
    padding: 0px 10px;
    position: fixed;
    width: 100%;
    left: 0%;
    bottom: 0px;
    background: black;
    box-shadow: 0px -3px 6px #00000029;
    border-top: 1.5px solid white;
  }
`;

export const FilterItem = styled.a`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    height: 60%;
  }
`;

export const NoResult = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-weight: 600;
  font-size: 1.2vw;
  color: #ff6b6c;
  margin-bottom: 20px;

  span {
    font-size: 0.9em;
    font-weight: 400;
    color: #707070;
  }

  @media only screen and (max-width: 900px) {
    font-size: 3.2vw;
  }
`;
