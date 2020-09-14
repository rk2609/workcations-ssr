import React from "react";
import Link from "next/link";

import { Container, Card, Text, Title, Count } from "./featured-states.style";

const FeaturedStates = ({ propertyList }) => (
  <Container className="remove-scrollbar">
    <Link href="/properties?states=himachal%20pradesh" passHref>
      <Card style={{ backgroundImage: `url(himachal.png)` }}>
        <Text>
          <Title>himachal pradesh</Title>
          <Count>
            {
              propertyList.filter(
                (property) =>
                  property.location.state === "himachal pradesh" &&
                  property.visibility === "TRUE"
              ).length
            }{" "}
            Properties
          </Count>
        </Text>
      </Card>
    </Link>

    <Link href="/properties?states=uttarakhand" passHref>
      <Card style={{ backgroundImage: `url(uttarakhand.png)` }}>
        <Text>
          <Title>uttarakhand</Title>
          <Count>
            {
              propertyList.filter(
                (property) =>
                  property.location.state === "uttarakhand" &&
                  property.visibility === "TRUE"
              ).length
            }{" "}
            Properties
          </Count>
        </Text>
      </Card>
    </Link>

    <Link href="/properties?states=rajasthan" passHref>
      <Card style={{ backgroundImage: `url(rajasthan.png)` }}>
        <Text>
          <Title>rajasthan</Title>
          <Count>
            {
              propertyList.filter(
                (property) =>
                  property.location.state === "rajasthan" &&
                  property.visibility === "TRUE"
              ).length
            }{" "}
            Properties
          </Count>
        </Text>
      </Card>
    </Link>

    <Link href="/properties?states=goa" passHref>
      <Card style={{ backgroundImage: `url(goa.png)` }}>
        <Text>
          <Title>goa</Title>
          <Count>
            {
              propertyList.filter(
                (property) =>
                  property.location.state === "goa" &&
                  property.visibility === "TRUE"
              ).length
            }{" "}
            Properties
          </Count>
        </Text>
      </Card>
    </Link>

    <Link href="/properties?states=maharashtra" passHref>
      <Card style={{ backgroundImage: `url(maharashtra.png)` }}>
        <Text>
          <Title>maharashtra</Title>
          <Count>
            {
              propertyList.filter(
                (property) =>
                  property.location.state === "maharashtra" &&
                  property.visibility === "TRUE"
              ).length
            }{" "}
            Properties
          </Count>
        </Text>
      </Card>
    </Link>

    <Link href="/properties?states=karnataka" passHref>
      <Card style={{ backgroundImage: `url(karnataka.png)` }}>
        <Text>
          <Title>karnataka</Title>
          <Count>
            {
              propertyList.filter(
                (property) =>
                  property.location.state === "karnataka" &&
                  property.visibility === "TRUE"
              ).length
            }{" "}
            Properties
          </Count>
        </Text>
      </Card>
    </Link>
  </Container>
);

export default FeaturedStates;
