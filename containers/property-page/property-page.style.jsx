import styled from "styled-components";

import PageContainer from "../../style-components/page-container/page-container.style";
import SectionContainer from "../../style-components/section-container/section-container.style";

export const DivDesktop = styled.div`
  display: block;
  margin: 0px;
  padding: 0px;
  width: 100%;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export const DivMobile = styled.div`
  display: none;
  margin: 0px;
  padding: 0px;
  width: 100%;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;

export const MegaContainer = styled(PageContainer)`
  background-color: #f5f5f5;
`;

export const Container = styled(SectionContainer)`
  h1 {
    font-weight: 700;
    font-size: 2.5vw;
    color: #414141;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: flex-start;
    text-transform: capitalize;

    span {
      color: white;
      font-size: 0.5em;
      background-color: #ff6b6c;
      padding: 3px 11px;
      margin-left: 15px;
      font-weight: 600;
      border-radius: 3px;
    }

    @media only screen and (max-width: 900px) {
      font-size: 4.5vw;
    }
  }
`;

export const Location = styled.div`
  font-size: 1.5vw;
  padding: 0px;
  margin: 0px;
  text-transform: capitalize;

  @media only screen and (max-width: 900px) {
    font-weight: 600;
    font-size: 3vw;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const PropertyDetails = styled.div`
  width: 52vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
