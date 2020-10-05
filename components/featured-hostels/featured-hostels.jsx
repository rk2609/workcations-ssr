import React, { useRef } from "react";
import Link from "next/link";

import {
  Container,
  FlexContainer,
  ArrowContainer,
  Card,
  Image,
  ImageLong,
  Price,
  Details,
  Title,
  Location,
  MoreProperties,
} from "./featured-hostels.styles";

const FeaturedHostels = ({ propertyList }) => {
  const cardsContainer = useRef(null);

  const nextCards = () => {
    cardsContainer.current.scrollLeft += 300;
  };

  return (
    <Container>
      <FlexContainer ref={cardsContainer} className="remove-scrollbar">
        {propertyList
          .filter((property) => property.visibility === "TRUE")
          .filter((property) => property.type === "hostel")
          .filter((property, i) => i < 6)
          .map((property) => (
            <Link
              key={property.slug}
              href={`/property/${property.slug}`}
              passHref
            >
              <Card key={property.slug} target="_blank">
                <ImageLong
                  style={{
                    backgroundImage: `url(https://cdn.workcations.in/${property.slug}/${property.images[0]}.jpg)`,
                  }}
                >
                  <Price>
                    {property.long}
                    <span>/night</span>
                  </Price>
                </ImageLong>
                <Details>
                  <Title>{property.title}</Title>
                  <Location>
                    {property.location.city}, {property.location.state}
                  </Location>
                </Details>
              </Card>
            </Link>
          ))}
        <Link href="/properties?types=hostel" passHref>
          <MoreProperties target="_blank">
            Explore All Hostels<span></span>
          </MoreProperties>
        </Link>
      </FlexContainer>
      <ArrowContainer onClick={nextCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
        </svg>
      </ArrowContainer>
    </Container>
  );
};

const FeaturedVillas = ({ propertyList }) => {
  const cardsContainer = useRef(null);

  const nextCards = () => {
    cardsContainer.current.scrollLeft += 300;
  };

  return (
    <Container>
      <FlexContainer ref={cardsContainer} className="remove-scrollbar">
        {propertyList
          .filter((property) => property.visibility === "TRUE")
          .filter((property) => property.type === "villa")
          .filter((property, i) => i < 6)
          .map((property) => (
            <Link
              key={property.slug}
              href={`/property/${property.slug}`}
              passHref
            >
              <Card key={property.slug} target="_blank">
                <Image
                  style={{
                    backgroundImage: `url(https://cdn.workcations.in/${property.slug}/${property.images[0]}.jpg)`,
                  }}
                >
                  <Price>
                    {property.long}
                    <span>/night</span>
                  </Price>
                </Image>
                <Details>
                  <Title>{property.title}</Title>
                  <Location>
                    {property.location.city}, {property.location.state}
                  </Location>
                </Details>
              </Card>
            </Link>
          ))}
        <Link href="/properties?types=villa" passHref>
          <MoreProperties target="_blank">
            Explore All Villas<span></span>
          </MoreProperties>
        </Link>
      </FlexContainer>
      <ArrowContainer onClick={nextCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
        </svg>
      </ArrowContainer>
    </Container>
  );
};

const FeaturedHotels = ({ propertyList }) => {
  const cardsContainer = useRef(null);

  const nextCards = () => {
    cardsContainer.current.scrollLeft += 300;
  };

  return (
    <Container>
      <FlexContainer ref={cardsContainer} className="remove-scrollbar">
        {propertyList
          .filter((property) => property.visibility === "TRUE")
          .filter((property) => property.type === "hotel")
          .filter((property, i) => i < 6)
          .map((property) => (
            <Link
              key={property.slug}
              href={`/property/${property.slug}`}
              passHref
            >
              <Card key={property.slug} target="_blank">
                <ImageLong
                  style={{
                    backgroundImage: `url(https://cdn.workcations.in/${property.slug}/${property.images[0]}.jpg)`,
                  }}
                >
                  <Price>
                    {property.long}
                    <span>/night</span>
                  </Price>
                </ImageLong>
                <Details>
                  <Title>{property.title}</Title>
                  <Location>
                    {property.location.city}, {property.location.state}
                  </Location>
                </Details>
              </Card>
            </Link>
          ))}
        <Link href="/properties?types=hotel" passHref>
          <MoreProperties target="_blank">
            Explore All Hotels<span></span>
          </MoreProperties>
        </Link>
      </FlexContainer>
      <ArrowContainer onClick={nextCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
        </svg>
      </ArrowContainer>
    </Container>
  );
};

export { FeaturedHostels, FeaturedVillas, FeaturedHotels };
