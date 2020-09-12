import React from "react";

import { Container, Card, Text, Title, Count } from "./featured-states.style";

const FeaturedStates = () => (
  <Container className="remove-scrollbar">
    <Card style={{ backgroundImage: `url(himachal.png)` }}>
      <Text>
        <Title>himachal pradesh</Title>
        <Count>14 Properties</Count>
      </Text>
    </Card>

    <Card style={{ backgroundImage: `url(uttarakhand.png)` }}>
      <Text>
        <Title>uttarakhand</Title>
        <Count>12 Properties</Count>
      </Text>
    </Card>

    <Card style={{ backgroundImage: `url(rajasthan.png)` }}>
      <Text>
        <Title>rajasthan</Title>
        <Count>24 Properties</Count>
      </Text>
    </Card>

    <Card style={{ backgroundImage: `url(goa.png)` }}>
      <Text>
        <Title>goa</Title>
        <Count>7 Properties</Count>
      </Text>
    </Card>

    <Card style={{ backgroundImage: `url(maharashtra.png)` }}>
      <Text>
        <Title>maharashtra</Title>
        <Count>9 Properties</Count>
      </Text>
    </Card>

    <Card style={{ backgroundImage: `url(karnataka.png)` }}>
      <Text>
        <Title>karnataka</Title>
        <Count>16 Properties</Count>
      </Text>
    </Card>
  </Container>
);

export default FeaturedStates;
