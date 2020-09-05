import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  overflow: scroll;

  @media only screen and (max-width: 900px) {
    margin-top: 4vw;
    gap: 1vw;
  }
`;
