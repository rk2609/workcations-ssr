import styled from "styled-components";

export const Container = styled.div`
  /* types-container */
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-column-gap: 15px;
  margin-top: 2vw;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 90vw;
    margin-top: 4vw;
  }
`;

export const FlexContainer = styled.div`
  scroll-behavior: smooth;
  width: calc(80vw - 60px);
  max-width: calc(80vw - 60px);
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  padding: 2vw 0;

  @media only screen and (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
`;

export const ArrowContainer = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2px;

  @media only screen and (max-width: 900px) {
    height: 7vw;
    display: none;
  }

  svg {
    height: 2.5vw;

    @media only screen and (max-width: 900px) {
      height: 4vw;
    }
  }
`;

export const Card = styled.a`
  /* type-card */
  flex-shrink: 0;
  width: 19vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  margin-right: 4vw;

  @media only screen and (max-width: 600px) {
    width: 40vw;
    margin-right: 3vw;
  }
`;

export const Image = styled.div`
  /* type-image */
  width: 19vw;
  height: 14.75vw;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: white;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    width: 40vw;
    height: 35vw;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const ImageLong = styled.div`
  /* type-image */
  width: 19vw;
  height: 14.75vw;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: white;
  border-radius: 10px;

  @media only screen and (max-width: 600px) {
    width: 40vw;
    height: 45vw;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const Price = styled.span`
  /* type-price */
  font-size: 1.6vw;
  font-weight: 600;
  background-color: #ff6b6c;
  width: 8vw;
  height: 3vw;
  border-radius: 0px 5px 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -0.5vw 1vw 0;

  @media only screen and (max-width: 600px) {
    font-size: 3vw;
    width: 14vw;
    height: 5vw;
    margin: 0 -1vw 5vw 0;
  }

  span {
    /* type-per-night */
    font-size: 1.2vw;
    font-weight: 400;

    @media only screen and (max-width: 600px) {
      font-size: 2vw;
      font-weight: 100;
    }
  }
`;

export const Details = styled.div`
  /* type-details */
  padding: 0.5vw;

  @media only screen and (max-width: 600px) {
    padding: 1vw 2vw;
  }
`;

export const Title = styled.div`
  /* type-name */
  font-size: 1.4vw;
  font-weight: 600;
  margin-bottom: 0.2vw;

  @media only screen and (max-width: 600px) {
    font-size: 3vw;
  }
`;

export const Location = styled.div`
  /* type-location */
  font-size: 1vw;
  font-weight: 300;
  text-transform: capitalize;

  @media only screen and (max-width: 600px) {
    font-size: 2.2vw;
  }
`;

export const MoreProperties = styled.a`
  padding: 15px;
  font-size: 1vw;
  font-weight: 600;
  background-color: rgba(255, 107, 108, 0.9);
  color: white;
  position: relative;
  border-radius: 10px;
  flex-shrink: 0;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  span {
    position: absolute;
    right: -0.5vw;
    width: 12vw;
    height: 2vw;
  }
`;
