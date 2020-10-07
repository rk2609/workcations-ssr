import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectPropertyList } from "../../redux/property/properties.selectors";

import PropertyItem from "../../components/property-item/property-item";
import PropertyItemPlaceHolder from "../../components/property-item-placeholder/property-item-placeholder";

import {
  PropertyListContainer,
  Container,
  NoResult,
} from "./property-list-search.style";

const ListArray = new Array(6).fill(true);

const PropertyListSearch = ({ list, loadElements }) => {
  const propertyList = useSelector(selectPropertyList);
  console.log(list);
  return (
    <Container>
      <PropertyListContainer>
        {propertyList.length > 0 ? (
          <Fragment>
            {list.length > 0 ? (
              <Fragment>
                {list.map((property, i) =>
                  property.item.visibility === "TRUE" &&
                  (loadElements || i < 6) ? (
                    <PropertyItem key={property.slug} {...property.item} />
                  ) : null
                )}
              </Fragment>
            ) : (
              <Fragment>
                <NoResult style={{ textAlign: "center" }}>
                  Sorry! We don't have any properties that match your search
                  <span>
                    Please try a different search <br /> or <br /> Check Out all
                    of our properties below
                  </span>
                </NoResult>
                {propertyList.map((property, i) =>
                  property.visibility === "TRUE" && (loadElements || i < 6) ? (
                    <PropertyItem key={property.slug} {...property} />
                  ) : null
                )}
              </Fragment>
            )}
          </Fragment>
        ) : (
          <Fragment>
            {ListArray.map((item, i) => (
              <PropertyItemPlaceHolder key={`property${i + 1}`} />
            ))}
          </Fragment>
        )}
      </PropertyListContainer>
    </Container>
  );
};

export default PropertyListSearch;

/*

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
                {
  
                <NoResult>
                Sorry! We don't have any properties that match your choices
                <span>See all of our properties below</span>
              </NoResult>
              
              
              }
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
          )}  */
