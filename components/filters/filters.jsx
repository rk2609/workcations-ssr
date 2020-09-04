import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nouislider from "nouislider-react";

import {
  setPropertyListStart,
  initializeStateList,
  setSelectedStateList,
  initializeTypeList,
  setSelectedTypeList,
  initializeMinPrice,
  setSelectedMinPrice,
  initializeMaxPrice,
  setSelectedMaxPrice,
  filterProperties,
} from "../../redux/property/properties.actions";
import {
  selectStateList,
  selectSelectedStateList,
  selectTypeList,
  selectSelectedTypeList,
  selectMinPrice,
  selectSelectedMinPrice,
  selectMaxPrice,
  selectSelectedMaxPrice,
  selectPropertyList,
} from "../../redux/property/properties.selectors";

import { CheckBoxFilter } from "../checkbox/checkbox";

import {
  FiltersTopContainer,
  Headline,
  FiltersContainer,
  FilterWrapper,
  FilterTitle,
  PriceFilter,
  FilterList,
} from "./filters.style";

const Filters = () => {
  const propertyList = useSelector(selectPropertyList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (propertyList.length === 0) {
      dispatch(setPropertyListStart());
    }
  }, [dispatch, propertyList]);

  useEffect(() => {
    if (propertyList && propertyList.length) {
      dispatch(initializeStateList());
      dispatch(initializeTypeList());
      dispatch(initializeMinPrice());
      dispatch(initializeMaxPrice());
    }
  }, [dispatch, propertyList]);

  const states = useSelector(selectStateList);
  const types = useSelector(selectTypeList);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const filteredStates = useSelector(selectSelectedStateList);
  const filteredTypes = useSelector(selectSelectedTypeList);
  const filteredMinPrice = useSelector(selectSelectedMinPrice);
  const filteredMaxPrice = useSelector(selectSelectedMaxPrice);

  useEffect(() => {
    return () => {
      dispatch(setSelectedStateList([]));
      dispatch(setSelectedTypeList([]));
      dispatch(setSelectedMinPrice(minPrice));
      dispatch(setSelectedMaxPrice(maxPrice));
    };
  }, [dispatch, minPrice, maxPrice]);

  const [selectedStates, setSelectedStates] = useState(filteredStates);
  const [selectedTypes, setSelectedTypes] = useState(filteredTypes);
  const [selectedMinPrice, setSelectedMinPriceLocal] = useState(
    filteredMinPrice
  );
  const [selectedMaxPrice, setSelectedMaxPriceLocal] = useState(
    filteredMaxPrice
  );

  const range = { min: minPrice, max: maxPrice };
  const start = [selectedMinPrice, selectedMaxPrice];

  useEffect(() => {
    dispatch(setSelectedStateList(selectedStates));
  }, [dispatch, selectedStates]);

  useEffect(() => {
    dispatch(setSelectedTypeList(selectedTypes));
  }, [dispatch, selectedTypes]);

  useEffect(() => {
    dispatch(setSelectedMinPrice(selectedMinPrice));
  }, [dispatch, selectedMinPrice]);

  useEffect(() => {
    dispatch(setSelectedMaxPrice(selectedMaxPrice));
  }, [dispatch, selectedMaxPrice]);

  useEffect(() => {
    dispatch(filterProperties());
  }, [
    dispatch,
    filteredStates,
    filteredTypes,
    filteredMinPrice,
    filteredMaxPrice,
  ]);

  const stateList = propertyList
    .filter((item) => item.visibility === "TRUE")
    .map((item) => item.location.state);

  const typeList = propertyList
    .filter((item) => item.visibility === "TRUE")
    .map((item) => item.type);

  let stateCount = new Array(states.length).fill(0);
  let typeCount = new Array(types.length).fill(0);

  states.forEach((state, i) => {
    stateList.forEach((item, j) => {
      if (item === state) {
        stateCount[i]++;
      }
    });
  });

  types.forEach((type, i) => {
    typeList.forEach((item, j) => {
      if (item === type) {
        typeCount[i]++;
      }
    });
  });

  return (
    <FiltersTopContainer>
      <Headline>
        find your <span>Workcation</span>
      </Headline>
      <FiltersContainer>
        <FilterWrapper>
          <FilterTitle>Pricing</FilterTitle>
          <PriceFilter>
            <Nouislider
              range={range}
              start={start}
              step={100}
              connect
              tooltips
              animate
              margin={300}
              onChange={(values) => {
                setSelectedMinPriceLocal(Number(values[0]));
                setSelectedMaxPriceLocal(Number(values[1]));
              }}
            />
            <span>price per night</span>
          </PriceFilter>
        </FilterWrapper>
        <FilterWrapper>
          <FilterTitle>States</FilterTitle>
          <FilterList>
            {states.map((state, i) => (
              <CheckBoxFilter
                key={"state" + (i + 1)}
                name={state}
                label={state + "@" + stateCount[i]}
                handleChange={() => {
                  let newSelectedStates = [];

                  if (selectedStates.indexOf(state) !== -1) {
                    const index = selectedStates.indexOf(state);
                    for (let i = 0; i < selectedStates.length; i++) {
                      if (index !== i) {
                        newSelectedStates.push(selectedStates[i]);
                      }
                    }
                  } else {
                    for (let i = 0; i < selectedStates.length; i++) {
                      newSelectedStates.push(selectedStates[i]);
                    }
                    newSelectedStates.push(state);
                  }

                  setSelectedStates(newSelectedStates);
                }}
                checked={selectedStates.indexOf(state) !== -1}
              />
            ))}
          </FilterList>
        </FilterWrapper>
        <FilterWrapper>
          <FilterTitle>Property Type</FilterTitle>
          <FilterList>
            {types.map((type, i) => (
              <CheckBoxFilter
                key={"type" + (i + 1)}
                name={type}
                label={type + "@" + typeCount[i]}
                handleChange={() => {
                  let newSelectedTypes = [];

                  if (selectedTypes.indexOf(type) !== -1) {
                    const index = selectedTypes.indexOf(type);
                    for (let i = 0; i < selectedTypes.length; i++) {
                      if (index !== i) {
                        newSelectedTypes.push(selectedTypes[i]);
                      }
                    }
                  } else {
                    for (let i = 0; i < selectedTypes.length; i++) {
                      newSelectedTypes.push(selectedTypes[i]);
                    }
                    newSelectedTypes.push(type);
                  }

                  setSelectedTypes(newSelectedTypes);
                }}
                checked={selectedTypes.indexOf(type) !== -1}
              />
            ))}
          </FilterList>
        </FilterWrapper>
      </FiltersContainer>
    </FiltersTopContainer>
  );
};

export default Filters;
