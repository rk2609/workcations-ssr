import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import {
  selectPropertyList,
  selectFilteredProperties,
  selectSelectedStateList,
  selectSelectedTypeList,
  selectMinPrice,
  selectSelectedMinPrice,
  selectMaxPrice,
  selectSelectedMaxPrice,
} from "../../redux/property/properties.selectors";

import PropertyItem from "../../components/property-item/property-item";

import {
  PropertyListContainer,
  Container,
  NoResult,
  FilterMobile,
  FilterItem,
} from "./property-list.style";

const PropertyList = ({ loadElements }) => {
  const propertyList = useSelector(selectPropertyList);
  const filteredProperties = useSelector(selectFilteredProperties);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const filteredStates = useSelector(selectSelectedStateList);
  const filteredTypes = useSelector(selectSelectedTypeList);
  const filteredMinPrice = useSelector(selectSelectedMinPrice);
  const filteredMaxPrice = useSelector(selectSelectedMaxPrice);

  return (
    <Container>
      <PropertyListContainer>
        {filteredProperties.length === 0 &&
        filteredStates.length === 0 &&
        filteredTypes.length === 0 &&
        filteredMinPrice === minPrice &&
        filteredMaxPrice === maxPrice ? (
          propertyList.map((property, i) =>
            property.visibility === "TRUE" && (loadElements || i < 6) ? (
              <PropertyItem key={property.slug} {...property} />
            ) : null
          )
        ) : filteredProperties.length === 0 ? (
          <Fragment>
            <NoResult>
              Sorry! We don't have any properties that match your choices
              <span>See all of our properties below</span>
            </NoResult>
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
        <Link href="/filters/type" passHref>
          <FilterItem>
            <img src="/type.svg" alt="Property Type" />
          </FilterItem>
        </Link>
        <Link href="/filters/price" passHref>
          <FilterItem>
            <img src="/price.svg" alt="Property Type" />
          </FilterItem>
        </Link>
        <Link href="/filters/states" passHref>
          <FilterItem>
            <img src="/states.svg" alt="Property Type" />
          </FilterItem>
        </Link>
      </FilterMobile>
    </Container>
  );
};

export default PropertyList;
