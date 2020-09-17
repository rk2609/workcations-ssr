import React, { Fragment } from "react";

import Head from "next/head";

import Gallery from "../../components/gallery/gallery";
import Facilities from "../../components/facilities/facilities";
import AboutComp from "../../components/about/about";
import Nearby from "../../components/nearby/nearby";
import InclusionsExclusions from "../../components/inclusions-exclusions/inclusions-exclusions";
import Inclusions from "../../components/inclusions/inclusions";
import Exclusions from "../../components/exclusions/exclusions";
import SimilarProperties from "../../components/similar-properties/similar-properties";
import Essentials from "../../components/essentials/essentials";
import Faqs from "../../components/faq/faq";
import ImportantInformation from "../../components/important-information/important-information";
import BookNow from "../../components/book-now/book-now";

import PropertyDetailsContainer from "../../style-components/property-page-container/property-page-container.style";

import {
  MegaContainer,
  Title,
  Container,
  BookNowContainer,
  Details,
  Content,
  About,
  Heading,
  Internet,
  EmptySpace,
} from "./property-page.style";

const PropertyPage = ({
  slug,
  title,
  type,
  minDuration,
  about,
  features,
  inventory,
  images,
  location: { city, state },
  nearby,
  essentials,
  inclusions,
  exclusions,
  breakfast,
  lunch,
  dinner,
  loadElements,
  checkIn,
  checkOut,
  download,
  upload,
  houseRules,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <MegaContainer>
        <Title>
          <h1>{title}</h1>
          <div>
            {city}, {state}
          </div>
        </Title>
        <Container>
          <Gallery loadElements={loadElements} images={images} slug={slug} />
          <Facilities
            breakfast={breakfast}
            lunch={lunch}
            dinner={dinner}
            facilities={features}
          />
          <BookNowContainer>
            <BookNow
              inventory={inventory}
              slug={slug}
              title={title}
              minDuration={Number(minDuration)}
              breakfast={breakfast}
              lunch={lunch}
              dinner={dinner}
              type={type}
            />
          </BookNowContainer>
          {loadElements ? (
            <Details>
              <div>
                <Content>
                  <About>
                    <Heading>About</Heading>
                    <p>{about}</p>
                  </About>
                  {upload !== -1 ? (
                    <Fragment>
                      <Heading>Internet Speed</Heading>
                      <Internet>
                        <p> Download Speed </p> <b> {download} Mbps</b>
                        <p> Upload Speed </p> <b> {upload} Mbps</b>
                      </Internet>
                    </Fragment>
                  ) : null}
                  {checkIn !== "-1" || houseRules[0] !== "-1" ? (
                    <Fragment>
                      <Heading>House Rules</Heading>
                      {checkIn !== "-1" ? (
                        <Internet>
                          <p> Check-In: </p> <b> {checkIn} </b>
                          <p> Check-Out: </p> <b> {checkOut} </b>
                        </Internet>
                      ) : null}
                      {houseRules[0] !== "-1"
                        ? houseRules.map((rule) => (
                            <p key={rule}>&bull; {rule}</p>
                          ))
                        : null}
                    </Fragment>
                  ) : null}
                </Content>
              </div>
              <div>
                <Content>
                  <Heading>Inclusions:</Heading>
                  <Inclusions
                    inclusions={inclusions}
                    exclusions={exclusions}
                    features={features}
                    breakfast={breakfast}
                    lunch={lunch}
                    dinner={dinner}
                  />
                  <Internet />
                  <Heading>Exclusions:</Heading>
                  <Exclusions
                    inclusions={inclusions}
                    exclusions={exclusions}
                    features={features}
                    breakfast={breakfast}
                    lunch={lunch}
                    dinner={dinner}
                  />
                </Content>
              </div>
              <div>
                <Content>
                  <Heading>Nearby Attractions</Heading>
                  <Nearby nearby={nearby} />
                </Content>
              </div>
              <div>
                <Content>
                  <Heading>Essentials</Heading>
                  <Essentials {...essentials} />
                </Content>
              </div>
              <Heading>Similar Properties</Heading>
              <SimilarProperties
                slug={slug}
                type={type}
                city={city}
                state={state}
              />
              <EmptySpace />
              <Heading>Important Information</Heading>
              <ImportantInformation state={state} />
              <EmptySpace />
              <Heading>FAQs</Heading>
              <Faqs heading={false} />
            </Details>
          ) : null}
        </Container>
      </MegaContainer>
    </Fragment>
  );
};

export default PropertyPage;
