import React from "react";

import Amenities from "../amenities/amenties";

import { Flex } from "./facilities.style";

const Facilities = ({ facilities }) => (
  <Flex className="facilities_container">
    {facilities.map((feature, i) => (
      <Amenities key={i} value={feature}></Amenities>
    ))}
  </Flex>
);

export default Facilities;
