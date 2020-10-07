import React, { useState } from "react";
import Link from "next/link";

import {
  Container,
  ImageContainer,
  MainImage,
  MainImageShimmer,
  Type,
  SmallImageContainer,
  SmallImage,
  SmallImageShimmer,
  Details,
  Title,
  DetailsContainer,
  DetailsWrapper,
  Location,
  Safety,
  AmenitiesContainer,
  AmenitiesItem,
  AmenitiesIcon,
  Pricing,
} from "./property-item.style";

const PropertyItem = ({
  title,
  slug,
  type,
  features,
  short,
  long,
  images,
  location,
}) => {
  const { city, state } = location;
  const [currentImage, setCurrent] = useState(images[0]);

  return (
    <Link href={"/property/" + slug} passHref>
      <Container target="_blank">
        <ImageContainer>
          <MainImageShimmer>
            <MainImage
              style={{
                backgroundImage:
                  "url(https://d1xmqx9e0b6ljd.cloudfront.net/" +
                  slug +
                  "/" +
                  currentImage +
                  ".jpg)",
              }}
            >
              <Type tag={type}>{type}</Type>
            </MainImage>
          </MainImageShimmer>
          <SmallImageContainer>
            {images.map((image, i) => (
              <SmallImageShimmer key={`${slug}-image-${i + 1}`}>
                <SmallImage
                  style={{
                    backgroundImage:
                      "url(https://d1xmqx9e0b6ljd.cloudfront.net/" +
                      slug +
                      "/" +
                      image +
                      ".jpg)",
                  }}
                  onMouseEnter={() => {
                    setCurrent(image);
                  }}
                />
              </SmallImageShimmer>
            ))}
          </SmallImageContainer>
        </ImageContainer>
        <Details>
          <Title>{title}</Title>
          <DetailsContainer>
            <DetailsWrapper>
              <Location>
                {city}, {state}
              </Location>

              <Safety>
                <img src="./safety.svg" alt="Workcations Safety Verified" />
                <span>Workcations Safety Verified</span>
              </Safety>
              <AmenitiesContainer>
                <span>Amenties</span>
                <AmenitiesItem>
                  {features.map((amenity, i) =>
                    amenity === "wifi" ? (
                      <AmenitiesIcon key={i}>
                        <img src="./wifi.svg" alt="WiFi" />
                        <div>WiFi</div>
                      </AmenitiesIcon>
                    ) : amenity === "power backup" ? (
                      <AmenitiesIcon key={i}>
                        <img src="./power.svg" alt="Power Backup" />
                        <div>Power Backup</div>
                      </AmenitiesIcon>
                    ) : amenity === "daily meals" ? (
                      <AmenitiesIcon key={i}>
                        <img src="./meals.svg" alt="Dailyly Meals" />
                        <div>Daily Meals</div>
                      </AmenitiesIcon>
                    ) : null
                  )}
                </AmenitiesItem>
              </AmenitiesContainer>
            </DetailsWrapper>
            <Pricing>
              <span>₹ {long}/-</span> per night
            </Pricing>
          </DetailsContainer>
        </Details>
      </Container>
    </Link>
  );
};

export default PropertyItem;
