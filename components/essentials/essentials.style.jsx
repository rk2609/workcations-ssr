import styled from "styled-components";

import PropertyDetailsContainer from "../../style-components/property-page-container/property-page-container.style";

export const Container = styled(PropertyDetailsContainer)`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const Content = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 3px;
  color: rgb(49, 49, 49);
  font-size: 1em;
  border-radius: 5px;
  padding: 25px 20px;
  margin: 0px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FlexItem = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    width: 2em;
    height: auto;
  }
`;

export const GridContent = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 10px 0px;
  width: 50%;

  img {
    height: 1.7vw;
    margin-right: 10px;

    @media only screen and (max-width: 900px) {
      height: 1em;
    }
  }
`;
