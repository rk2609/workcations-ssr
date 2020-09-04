import React from "react";
import Link from "next/link";

import {
  HeroContainer,
  Heading,
  Subheading,
  Caption,
  Button,
} from "./hero.style";

const Hero = () => (
  <HeroContainer>
    <Heading>
      For Life Beyond a <span>cubicle</span>
    </Heading>
    <Subheading>Find that perfect balance between work and leisure.</Subheading>
    <Caption>
      Live and work remotely from the most charming and quaint destinations in
      India, nurturing your freedom and rejoicing in a new-found community.
    </Caption>
    <Link href="/properties" passHref>
      <Button>Explore Destinations</Button>
    </Link>
  </HeroContainer>
);

export default Hero;
