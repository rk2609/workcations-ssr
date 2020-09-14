import React from "react";
import Link from "next/link";

import {
  Container,
  Card,
  Image,
  ImageLong,
  Price,
  Details,
  Title,
  Location,
  MoreProperties,
} from "./featured-hostels.styles";

const FeaturedHostels = ({ propertyList }) => (
  <Container className="remove-scrollbar">
    {propertyList
      .filter((property) => property.visibility === "TRUE")
      .filter((property) => property.type === "hostel")
      .filter((property, i) => i < 6)
      .map((property) => (
        <Link key={property.slug} href={`/property/${property.slug}`} passHref>
          <Card key={property.slug} target="_blank">
            <ImageLong
              style={{
                backgroundImage: `url(https://www.wanderon.in/workcations/${property.slug}/${property.images[0]}.jpg)`,
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
      <Card target="_blank">
        <MoreProperties>
          Explore All Hostels<span></span>
        </MoreProperties>
      </Card>
    </Link>
  </Container>
);

const FeaturedVillas = ({ propertyList }) => (
  <Container className="remove-scrollbar">
    {propertyList
      .filter((property) => property.visibility === "TRUE")
      .filter((property) => property.type === "villa")
      .filter((property, i) => i < 6)
      .map((property) => (
        <Link key={property.slug} href={`/property/${property.slug}`} passHref>
          <Card key={property.slug} target="_blank">
            <Image
              style={{
                backgroundImage: `url(https://www.wanderon.in/workcations/${property.slug}/${property.images[0]}.jpg)`,
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
      <Card target="_blank">
        <MoreProperties>
          Explore All Villas<span></span>
        </MoreProperties>
      </Card>
    </Link>
  </Container>
);

const FeaturedHotels = ({ propertyList }) => (
  <Container className="remove-scrollbar">
    {propertyList
      .filter((property) => property.visibility === "TRUE")
      .filter((property) => property.type === "hotel")
      .filter((property, i) => i < 6)
      .map((property) => (
        <Link key={property.slug} href={`/property/${property.slug}`} passHref>
          <Card key={property.slug} target="_blank">
            <ImageLong
              style={{
                backgroundImage: `url(https://www.wanderon.in/workcations/${property.slug}/${property.images[0]}.jpg)`,
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
      <Card target="_blank">
        <MoreProperties>
          Explore All Hotels<span></span>
        </MoreProperties>
      </Card>
    </Link>
  </Container>
);

export { FeaturedHostels, FeaturedVillas, FeaturedHotels };
