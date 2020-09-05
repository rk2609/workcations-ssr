import React, { useState } from "react";

import {
  Container,
  ImageContainer,
  ImageDiv,
  LightBox,
  LightBoxFlex,
  ImageLightBox,
  CloseLightBox,
  LeftArrow,
  RightArrow,
} from "./gallery.style";

const Gallery = ({ images, slug, loadElements }) => {
  const [showLightBox, setShowLightBox] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const previousSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <Container>
      {images.map((image, i) =>
        i === 0 ? (
          <ImageContainer
            style={{ borderRadius: "5px 0px 0px 5px" }}
            key={i}
            onClick={() => {
              setCurrentSlide(i);
              setShowLightBox(true);
            }}
          >
            <ImageDiv
              style={{
                backgroundImage: `url(https://www.wanderon.in/workcations/${slug}/${image}.jpg)`,
              }}
            ></ImageDiv>
          </ImageContainer>
        ) : i === 2 ? (
          <ImageContainer
            style={{ borderRadius: "0px 5px 0px 0px" }}
            key={i}
            onClick={() => {
              setCurrentSlide(i);
              setShowLightBox(true);
            }}
          >
            <ImageDiv
              style={{
                backgroundImage: `url(https://www.wanderon.in/workcations/${slug}/${image}.jpg)`,
              }}
            ></ImageDiv>
          </ImageContainer>
        ) : i < 4 ? (
          <ImageContainer
            key={i}
            onClick={() => {
              setCurrentSlide(i);
              setShowLightBox(true);
            }}
          >
            <ImageDiv
              style={{
                backgroundImage: `url(https://www.wanderon.in/workcations/${slug}/${image}.jpg)`,
              }}
            ></ImageDiv>
          </ImageContainer>
        ) : i === 4 ? (
          <ImageContainer
            style={{ borderRadius: "0px 0px 5px 0px" }}
            key={i}
            onClick={() => {
              setCurrentSlide(i);
              setShowLightBox(true);
            }}
          >
            <ImageDiv
              style={{
                backgroundImage: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0.7),
                    rgba(0, 0, 0, 0.7)
                  ),url(https://www.wanderon.in/workcations/${slug}/${image}.jpg)`,
              }}
            >
              + {images.length - 5} Photos
            </ImageDiv>
          </ImageContainer>
        ) : null
      )}
      {showLightBox ? (
        <LightBox active={showLightBox}>
          <CloseLightBox>
            <span onClick={() => setShowLightBox(false)}>Close</span>
          </CloseLightBox>
          <LightBoxFlex>
            <ImageLightBox imagesLength={images.length} position={currentSlide}>
              {images.map((image, i) => (
                <img
                  key={i}
                  src={
                    "https://www.wanderon.in/workcations/" +
                    slug +
                    "/" +
                    image +
                    ".jpg"
                  }
                  alt={image}
                />
              ))}
              <LeftArrow
                active={showLightBox}
                currentSlide={currentSlide}
                onClick={previousSlide}
              >
                &#8249;
              </LeftArrow>
              <RightArrow
                active={showLightBox}
                currentSlide={currentSlide}
                imagesLength={images.length}
                onClick={nextSlide}
              >
                &#8250;
              </RightArrow>
            </ImageLightBox>
          </LightBoxFlex>
        </LightBox>
      ) : null}
    </Container>
  );
};

export default Gallery;
