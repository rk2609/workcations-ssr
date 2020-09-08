import React from "react";

import Amenities from "../amenities/amenties";

import { Container } from "./facilities.style";

const Facilities = ({ facilities }) => (
  <Container className="facilities_container">
    {facilities.map((feature, i) => (
      <Amenities key={i} value={feature}></Amenities>
    ))}
  </Container>
);

export default Facilities;
