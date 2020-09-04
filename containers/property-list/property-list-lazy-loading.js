import React, { lazy, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

import {
  PropertyListContainer,
  Container,
  FilterMobile,
  FilterItem,
} from "./property-list.style";

import States from "./states.svg";
import Type from "./type.svg";
import Price from "./price.svg";

const PropertyItem = lazy(() =>
  import("../../components/property-item/property-item")
);

const Loading = () => (
  <div>
    <h5>Loading...</h5>
  </div>
);

const PropertyList = () => {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  const propertyList = useSelector(selectPropertyList);
  const filteredProperties = useSelector(selectFilteredProperties);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const filteredStates = useSelector(selectSelectedStateList);
  const filteredTypes = useSelector(selectSelectedTypeList);
  const filteredMinPrice = useSelector(selectSelectedMinPrice);
  const filteredMaxPrice = useSelector(selectSelectedMaxPrice);

  useEffect(() => {
    if (
      filteredProperties.length === propertyList.length &&
      filteredStates.length === 0 &&
      filteredTypes.length === 0 &&
      filteredMinPrice === minPrice &&
      filteredMaxPrice === maxPrice
    ) {
      setList(propertyList);
      setPage(1);
      setIsFetching(true);
      fetchMoreListItems();
    } else if (filteredProperties.length === 0) {
      setList(propertyList);
      setPage(1);
      setIsFetching(true);
      fetchMoreListItems();
    } else {
      setList(filteredProperties);
      setPage(1);
      setIsFetching(true);
      fetchMoreListItems();
    }
    window.addEventListener("scroll", handleScroll);
  }, [
    propertyList,
    filteredProperties,
    minPrice,
    maxPrice,
    filteredStates,
    filteredTypes,
    filteredMinPrice,
    filteredMaxPrice,
  ]);

  useEffect(() => {
    if (
      filteredProperties.length === propertyList.length &&
      filteredStates.length === 0 &&
      filteredTypes.length === 0 &&
      filteredMinPrice === minPrice &&
      filteredMaxPrice === maxPrice
    ) {
      setList(propertyList);
      setPage(1);
      setIsFetching(true);
      fetchMoreListItems();
    } else if (filteredProperties.length === 0) {
      setList(propertyList);
      setPage(1);
      setIsFetching(true);
      fetchMoreListItems();
    } else {
      setList(filteredProperties);
      setPage(1);
      setIsFetching(true);
      fetchMoreListItems();
    }
  }, [
    propertyList,
    filteredProperties,
    minPrice,
    maxPrice,
    filteredStates,
    filteredTypes,
    filteredMinPrice,
    filteredMaxPrice,
  ]);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  const fetchData = async () => {
    setTimeout(async () => {
      setPage(page + 1);
      setListItems(list.slice(0, page * 6));
    }, 10);
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const fetchMoreListItems = () => {
    fetchData();
    setIsFetching(false);
  };

  return (
    <Container>
      <PropertyListContainer>
        {listItems.map((listItem) => (
          <Suspense key={listItem.slug} fallback={<Loading />}>
            <PropertyItem key={listItem.slug} {...listItem} />
          </Suspense>
        ))}
      </PropertyListContainer>

      <FilterMobile>
        <FilterItem to="/filters/type">
          <img src={Type} alt="Property Type" />
        </FilterItem>
        <FilterItem to="/filters/price">
          <img src={Price} alt="Property Type" />
        </FilterItem>
        <FilterItem to="/filters/states">
          <img src={States} alt="Property Type" />
        </FilterItem>
      </FilterMobile>
    </Container>
  );
};

export default PropertyList;

/*

<PropertyListContainer>
        {filteredProperties.length === 0 &&
        filteredStates.length === 0 &&
        filteredTypes.length === 0 &&
        filteredMinPrice === minPrice &&
        filteredMaxPrice === maxPrice ? (
          propertyList.map((property) =>
            property.visibility === "TRUE" ? (
              <LazyLoad
                key={property.slug}
                placeholder={<Loading />}
                once={true}
                offset={100}
                overflow
                throttle={100}
              >
                <PropertyItem key={property.slug} {...property} />
              </LazyLoad>
            ) : null
          )
        ) : filteredProperties.length === 0 ? (
          <Fragment>
            <NoResult>
              Sorry! We don't have any properties that match your choices
              <span>See all of our properties below</span>
            </NoResult>
            {propertyList.map((property) =>
              property.visibility === "TRUE" ? (
                <LazyLoad
                  key={property.slug}
                  placeholder={<Loading />}
                  once={true}
                  offset={100}
                  overflow
                  throttle={100}
                >
                  <PropertyItem key={property.slug} {...property} />
                </LazyLoad>
              ) : null
            )}
          </Fragment>
        ) : (
          filteredProperties.map((property) =>
            property.visibility === "TRUE" ? (
              <LazyLoad
                key={property.slug}
                placeholder={<Loading />}
                once={true}
                offset={100}
                overflow
                throttle={100}
              >
                <PropertyItem key={property.slug} {...property} />
              </LazyLoad>
            ) : null
          )
        )}
      </PropertyListContainer>

      */
