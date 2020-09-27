import styled from "styled-components";

export const Container = styled.div`
  grid-area: slideshow;
  height: 37vw;
  margin-top: 2.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 900px) {
    height: 61vw;
    align-items: center;
  }
`;

export const HeroImage = styled.div`
  height: 30vw;
  width: 50vw;
  border-radius: 10px;
  background-size: cover;
  cursor: pointer;
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.29);
  margin-bottom: 0.5vw;
  display: flex;
  align-items: center;
  transition: all 0.6s ease-in-out;

  @media only screen and (max-width: 900px) {
    height: 50vw;
    width: 90vw;
    margin-bottom: 1.5vw;
  }
`;

export const GalleryArrow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 3vw;
    fill: white;

    @media only screen and (max-width: 900px) {
      height: 7vw;
    }

    :hover {
      transform: scale(1.2);
    }
  }
`;

export const ThumbnailContainer = styled.div`
  width: 100%;
  max-width: 50vw;
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  column-gap: 10px;
  margin-top: 10px;

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    margin-top: 10px;
    grid-template-columns: 1fr;
  }
`;

export const ArrowContainer = styled.div`
  height: 4vw;
  background-color: rgba(0, 0, 0, 0.7);
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
    fill: white;
    height: 2.5vw;

    @media only screen and (max-width: 900px) {
      height: 4vw;
    }
  }
`;

export const Thumbnails = styled.div`
  height: 5vw;
  width: 100%;
  max-width: calc(50vw - 80px);
  display: flex;
  flex-direction: row;
  overflow: scroll;
  scroll-behavior: smooth;

  @media only screen and (max-width: 900px) {
    height: 10vw;
    max-width: 90vw;
  }

  div {
    height: 4vw;
    width: 6vw;
    flex-shrink: 0;
    background-size: cover;
    cursor: pointer;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.29);
    border-radius: 2px;
    margin-right: 0.5vw;

    @media only screen and (max-width: 900px) {
      height: 7vw;
      width: 13vw;
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.29);
      margin-right: 1.5vw;
    }

    :hover {
      transform: scale(1.1);
    }
  }
`;
