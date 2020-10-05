import React, { Fragment } from "react";

import {
  Grid,
  GridItem,
  GridImage,
  TextContainer,
  Name,
  Distance,
} from "./nearby.style";

const Nearby = ({ nearby }) => (
  <Fragment>
    <Grid>
      {nearby.map((item) => (
        <GridItem key={item.title}>
          <GridImage
            style={{
              backgroundImage:
                "url(https://cdn.workcations.in/nearby/" + item.image + ".jpg)",
            }}
          />
          <TextContainer>
            <Name>{item.title}</Name>
            <Distance>
              <p>Distance</p>
              <p>{item.distance} Km</p>
            </Distance>
          </TextContainer>
        </GridItem>
      ))}
    </Grid>
  </Fragment>
);

export default Nearby;
