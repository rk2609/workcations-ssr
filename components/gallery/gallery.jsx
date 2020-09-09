import React, { useState, useRef } from "react";

import {
  Container,
  HeroImage,
  GalleryArrow,
  ThumbnailContainer,
  ArrowContainer,
  Thumbnails,
} from "./gallery.style";

const Gallery = ({ images, slug, loadElements }) => {
  const thumbnailContainer = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide !== images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const nextThumbnail = () => {
    thumbnailContainer.current.scrollLeft += 200;
  };

  const previousThumbnail = () => {
    thumbnailContainer.current.scrollLeft -= 200;
  };

  const previousSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(images.length - 1);
    }
  };

  const activeSlide = (i) => {
    setCurrentSlide(i);
  };

  return (
    <Container>
      <HeroImage
        style={{
          backgroundImage: `url(https://www.wanderon.in/workcations/${slug}/${images[currentSlide]}.jpg)`,
        }}
      >
        <GalleryArrow>
          <svg
            viewBox="0 0 32 32"
            viewBox="0 0 32 32"
            aria-hidden="true"
            onClick={previousSlide}
          >
            <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
          </svg>
          <svg
            viewBox="0 0 32 32"
            viewBox="0 0 32 32"
            aria-hidden="true"
            onClick={nextSlide}
          >
            <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
          </svg>
        </GalleryArrow>
      </HeroImage>
      <ThumbnailContainer>
        <ArrowContainer onClick={previousThumbnail}>
          <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
          </svg>
        </ArrowContainer>

        <Thumbnails ref={thumbnailContainer} className="thumbnail-container">
          {images.map((image, i) =>
            i === currentSlide ? (
              <div
                key={image}
                style={{
                  backgroundImage: `url(https://www.wanderon.in/workcations/${slug}/${image}.jpg)`,
                }}
                onClick={() => {
                  activeSlide(i);
                }}
              ></div>
            ) : loadElements ? (
              <div
                key={image}
                style={{
                  backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 100%),url(https://www.wanderon.in/workcations/${slug}/${image}.jpg)`,
                }}
                onClick={() => {
                  activeSlide(i);
                }}
              ></div>
            ) : (
              <div
                key={image}
                style={{
                  backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.45) 0%,rgba(0,0,0,0.45) 100%)`,
                }}
                onClick={() => {
                  activeSlide(i);
                }}
              ></div>
            )
          )}
        </Thumbnails>
        <ArrowContainer onClick={nextThumbnail}>
          <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
          </svg>
        </ArrowContainer>
      </ThumbnailContainer>
    </Container>
  );
};

export default Gallery;
