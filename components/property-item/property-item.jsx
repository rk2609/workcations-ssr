import React, { useState } from "react";
import Link from "next/link";

import {
  Container,
  ImageContainer,
  MainImage,
  Type,
  SmallImageContainer,
  SmallImage,
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
          <MainImage
            style={{
              backgroundImage:
                "url(https://assets.workcations.in/" +
                slug +
                "/" +
                currentImage +
                ".jpg)",
            }}
          >
            <Type tag={type}>{type}</Type>
          </MainImage>
          <SmallImageContainer>
            <SmallImage
              style={{
                backgroundImage:
                  "url(https://assets.workcations.in/" +
                  slug +
                  "/" +
                  images[0] +
                  ".jpg)",
              }}
              onMouseEnter={() => {
                setCurrent(images[0]);
              }}
            />
            <SmallImage
              style={{
                backgroundImage:
                  "url(https://assets.workcations.in/" +
                  slug +
                  "/" +
                  images[1] +
                  ".jpg)",
              }}
              onMouseEnter={() => {
                setCurrent(images[1]);
              }}
            />
            <SmallImage
              style={{
                backgroundImage:
                  "url(https://assets.workcations.in/" +
                  slug +
                  "/" +
                  images[2] +
                  ".jpg)",
              }}
              onMouseEnter={() => {
                setCurrent(images[2]);
              }}
            />
            <SmallImage
              style={{
                backgroundImage:
                  "url(https://assets.workcations.in/" +
                  slug +
                  "/" +
                  images[3] +
                  ".jpg)",
              }}
              onMouseEnter={() => {
                setCurrent(images[3]);
              }}
            />
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
