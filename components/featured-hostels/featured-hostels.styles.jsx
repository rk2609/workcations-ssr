import styled from "styled-components";

export const Container = styled.div`
  /* types-container */
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  margin-top: 2vw;
  padding: 2vw 0;

  @media only screen and (max-width: 600px) {
    width: 90vw;
    margin-top: 4vw;
  }
`;

export const Card = styled.div`
  /* type-card */
  flex-shrink: 0;
  width: 19vw;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
  margin-right: 4vw;

  @media only screen and (max-width: 600px) {
    width: 30vw;
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
    width: 30vw;
    height: 22vw;
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
    width: 30vw;
    height: 35vw;
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
    padding: 1vw;
  }
`;

export const Title = styled.div`
  /* type-name */
  font-size: 1.4vw;
  font-weight: 600;
  margin-bottom: 0.2vw;

  @media only screen and (max-width: 600px) {
    font-size: 2.5vw;
  }
`;

export const Location = styled.div`
  /* type-location */
  font-size: 1vw;
  font-weight: 300;
  text-transform: capitalize;

  @media only screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;
