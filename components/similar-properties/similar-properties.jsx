import React, { Fragment } from "react";

import Carousel from "../carousel/carousel";

const SimilarProperties = ({ slug }) => (
  <Fragment>
    <h2>Similar Properties</h2>
    <Carousel slug={slug} />
  </Fragment>
);

export default SimilarProperties;
