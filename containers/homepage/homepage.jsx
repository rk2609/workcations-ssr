import React from "react";

import FeaturedStays from "../../components/featured-stays/featured-stays";
import FeaturedStates from "../../components/featured-states/featured-states";
import {
  FeaturedHostels,
  FeaturedVillas,
  FeaturedHotels,
} from "../../components/featured-hostels/featured-hostels";

import {
  MegaContainer,
  Container,
  SubContainer,
  Heading,
  SubHeading,
  Button,
} from "./homepage.style";

const HomePage = ({ loadElements }) => (
  <MegaContainer>
    <Container>
      <SubContainer>
        <Heading>Featured Stays</Heading>
        <SubHeading>Our Recommendation for Exotic Properties</SubHeading>
        <FeaturedStays />
        <Button>Load More</Button>
      </SubContainer>
      <SubContainer>
        <Heading>Browse By States</Heading>
        <SubHeading>
          Some Amazing Destinations Curated for Your Perfect Vacation
        </SubHeading>
        <FeaturedStates />
      </SubContainer>
      <SubContainer>
        <Heading>Hostels To Stop By</Heading>
        <SubHeading>
          Check out these wide range of Hostels for pocket friendly stays!
        </SubHeading>
        <FeaturedHostels />
      </SubContainer>
      <SubContainer>
        <Heading>Entire Villas</Heading>
        <SubHeading>
          Villa Stays to Cater all your Family needs! Group of Friends? Hop On!
        </SubHeading>
        <FeaturedVillas />
      </SubContainer>
      <SubContainer>
        <Heading>Economic Hotel Stays</Heading>
        <SubHeading>
          We have got your budgets sorted. Check In to the most Comfortable
          Hotel Properties
        </SubHeading>
        <FeaturedHotels />
      </SubContainer>
      <SubContainer>
        <Heading>Some Good Reads</Heading>
        <SubHeading>
          Tune in to our Blog Section to Find out about the nuances of Work and
          Travel
        </SubHeading>
      </SubContainer>
      <SubContainer>
        <Heading>Testimonials</Heading>
        <SubHeading>See what the Community has to Offer!</SubHeading>
      </SubContainer>
    </Container>
  </MegaContainer>
);

export default HomePage;
