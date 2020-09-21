import React from "react";
import Link from "next/link";

import {
  Container,
  Card,
  Image,
  ImageContainer,
  Type,
  Price,
  Details,
  Title,
  Location,
} from "./featured-stays.style";

const FeaturedStays = ({ featured, propertyList }) => (
  <Container>
    {propertyList
      .filter((property) => property.featured === "TRUE")
      .map((property, i) =>
        featured > i ? (
          <Link
            key={property.slug}
            href={`/property/${property.slug}`}
            passHref
          >
            <Card key={property.slug} target="_blank">
              <Image
                style={{
                  backgroundImage: `linear-gradient(to top,rgba(0,0,0,.7) 15%,rgba(0,0,0,0) 35%),url(https://www.wanderon.in/workcations/${property.slug}/${property.images[0]}.jpg)`,
                }}
              >
                <ImageContainer>
                  <Type>{property.type}</Type>
                  <Price>
                    {property.long}
                    <span>/night</span>
                  </Price>
                </ImageContainer>
              </Image>
              <Details>
                <Title>{property.title}</Title>
                <Location>
                  {property.location.city}, {property.location.state}
                </Location>
              </Details>
            </Card>
          </Link>
        ) : null
      )}
  </Container>
);

export default FeaturedStays;
