import styled, { css } from "styled-components";

const Light = css`
  background: #d5d5d5;
  background-image: linear-gradient(
    to right,
    #d5d5d5 0%,
    #f1f1f1 20%,
    #d5d5d5 40%,
    #d5d5d5 100%
  );
`;

const Shimmer = css`
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeHolderShimmer;
  -webkit-animation-timing-function: linear;
  background-repeat: no-repeat;
  background-size: 800px 1040px;
  position: relative;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  height: 26vw;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

  ${Light}
  ${Shimmer}

  @media only screen and (max-width: 900px) {
    height: 35vh;
  }
`;
