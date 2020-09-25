import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import {
  selectPropertyList,
  selectFilteredProperties,
  selectSelectedStateList,
  selectSelectedTypeList,
  selectSelectedMinPrice,
  selectSelectedMaxPrice,
  selectSelectedDestinationList,
} from "../../redux/property/properties.selectors";

import PropertyItem from "../../components/property-item/property-item";

import {
  PropertyListContainer,
  Container,
  NoResult,
  FilterMobile,
  FilterItem,
} from "./property-list.style";

const PropertyList = ({ loadElements, cities, states, types, min, max }) => {
  let queryLink = "?";

  if (states) {
    queryLink += "&states=" + states;
  }

  if (cities) {
    queryLink += "&cities=" + cities;
  }

  if (types) {
    queryLink += "&types=" + types;
  }

  if (min) {
    queryLink += "&min=" + min;
  }

  if (max) {
    queryLink += "&max=" + max;
  }

  const propertyList = useSelector(selectPropertyList);
  const filteredProperties = useSelector(selectFilteredProperties);
  const filteredStates = useSelector(selectSelectedStateList);
  const filteredTypes = useSelector(selectSelectedTypeList);
  const filteredMinPrice = useSelector(selectSelectedMinPrice);
  const filteredMaxPrice = useSelector(selectSelectedMaxPrice);
  const filteredCities = useSelector(selectSelectedDestinationList);

  return (
    <Container>
      <PropertyListContainer>
        {filteredProperties.length === 0 &&
        filteredStates.length === 0 &&
        filteredTypes.length === 0 &&
        filteredCities.length === 0 &&
        !filteredMinPrice &&
        !filteredMaxPrice ? (
          propertyList.map((property, i) =>
            property.visibility === "TRUE" && (loadElements || i < 6) ? (
              <PropertyItem key={property.slug} {...property} />
            ) : null
          )
        ) : filteredProperties.length === 0 ? (
          <Fragment>
            {/*

              <NoResult>
              Sorry! We don't have any properties that match your choices
              <span>See all of our properties below</span>
            </NoResult>
            
            
            */}
            {propertyList.map((property, i) =>
              property.visibility === "TRUE" && (loadElements || i < 6) ? (
                <PropertyItem key={property.slug} {...property} />
              ) : null
            )}
          </Fragment>
        ) : (
          filteredProperties.map((property, i) =>
            property.visibility === "TRUE" && (loadElements || i < 6) ? (
              <PropertyItem key={property.slug} {...property} />
            ) : null
          )
        )}
      </PropertyListContainer>
      <FilterMobile>
        <Link href={`/filters/type${queryLink}`} passHref>
          <FilterItem>
            <img src="/type.svg" alt="Property Type" />
          </FilterItem>
        </Link>
        <Link href={`/filters/price${queryLink}`} passHref>
          <FilterItem>
            <img src="/price.svg" alt="Property Type" />
          </FilterItem>
        </Link>
        <Link href={`/filters/states${queryLink}`} passHref>
          <FilterItem>
            <img src="/states.svg" alt="Property Type" />
          </FilterItem>
        </Link>
      </FilterMobile>
    </Container>
  );
};

export default PropertyList;
