import React, { Fragment } from "react";

import Head from "next/head";

import Gallery from "../../components/gallery/gallery";
import Facilities from "../../components/facilities/facilities";
import About from "../../components/about/about";
import Nearby from "../../components/nearby/nearby";
import InclusionsExclusions from "../../components/inclusions-exclusions/inclusions-exclusions";
import SimilarProperties from "../../components/similar-properties/similar-properties";
import Essentials from "../../components/essentials/essentials";
import Faqs from "../../components/faq/faq";
import ImportantInformation from "../../components/important-information/important-information";
import BookNow from "../../components/book-now/book-now";

import PropertyDetailsContainer from "../../style-components/property-page-container/property-page-container.style";

import {
  MegaContainer,
  Container,
  Location,
  Flex,
  PropertyDetails,
  DivDesktop,
  DivMobile,
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
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <MegaContainer>
        <Container>
          <h1>
            {title}
            {/* <span>{type}</span> */}
          </h1>
          <Location>
            {city}, {state}
          </Location>
          <Gallery loadElements={loadElements} images={images} slug={slug} />
          <Facilities facilities={features} />
          <Flex>
            <PropertyDetails>
              {loadElements ? (
                <Fragment>
                  <About about={about} />
                  <Essentials {...essentials} />
                  <DivMobile>
                    <PropertyDetailsContainer>
                      <InclusionsExclusions
                        inclusions={inclusions}
                        exclusions={exclusions}
                        features={features}
                        breakfast={breakfast}
                        lunch={lunch}
                        dinner={dinner}
                      />
                    </PropertyDetailsContainer>
                  </DivMobile>
                  <PropertyDetailsContainer>
                    <Nearby nearby={nearby} />
                  </PropertyDetailsContainer>
                  <DivDesktop>
                    <PropertyDetailsContainer>
                      <InclusionsExclusions
                        inclusions={inclusions}
                        exclusions={exclusions}
                        features={features}
                        breakfast={breakfast}
                        lunch={lunch}
                        dinner={dinner}
                      />
                    </PropertyDetailsContainer>
                  </DivDesktop>
                  <PropertyDetailsContainer>
                    <SimilarProperties slug={slug} />
                  </PropertyDetailsContainer>
                  <PropertyDetailsContainer>
                    <ImportantInformation />
                  </PropertyDetailsContainer>
                  <PropertyDetailsContainer>
                    <Faqs />
                  </PropertyDetailsContainer>
                </Fragment>
              ) : null}
            </PropertyDetails>
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
          </Flex>
        </Container>
      </MegaContainer>
    </Fragment>
  );
};

export default PropertyPage;
