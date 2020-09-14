import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import Typing from "../typing/typing";

import {
  initializeStateList,
  initializeTypeList,
} from "../../redux/property/properties.actions";

import {
  selectStateList,
  selectTypeList,
} from "../../redux/property/properties.selectors";

import {
  HeroContainer,
  Container,
  SearchContainer,
  SearchBox,
  SearchItems,
  SearchItem,
  Heading,
  Text,
  Search,
  Button,
  Features,
} from "./hero.style";

const Hero = ({ propertyList }) => {
  const dispatch = useDispatch();
  const stateList = useSelector(selectStateList);
  const typeList = useSelector(selectTypeList);

  useEffect(() => {
    if (propertyList && propertyList.length) {
      dispatch(initializeStateList());
      dispatch(initializeTypeList());
    }
  }, [propertyList]);

  const [searchItems, setSearchItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    let items = [];
    if (stateList && stateList.length) {
      stateList.forEach((state) =>
        items.push({ value: state, type: "states" })
      );
    }
    if (typeList && typeList.length) {
      typeList.forEach((type) => items.push({ value: type, type: "types" }));
    }
    setSearchItems(items);
  }, [stateList, typeList]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredItems(searchItems);
    } else {
      setFilteredItems(
        searchItems.filter((item) =>
          item.value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, searchItems]);

  return (
    <HeroContainer>
      <Container>
        <SearchBox>
          <Heading>For life beyond a cubicle</Heading>
          <Text>India's most trusted community of Remote Workers!</Text>
          <SearchContainer>
            <Search
              type="search"
              value={searchQuery}
              placeholder="Find Your Workcation..."
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              onFocus={() => {
                setShowList(true);
              }}
              onBlur={() => {
                setShowList(false);
              }}
            />
            <SearchItems showList={showList} className="remove-scrollbar">
              {filteredItems.map((item) => (
                <Link
                  key={item.value + item.type}
                  href={`/properties?${item.type}=${encodeURI(item.value)}`}
                  passHref
                >
                  <SearchItem target="_blank" key={item.value + item.type}>
                    {item.value}
                  </SearchItem>
                </Link>
              ))}
            </SearchItems>
          </SearchContainer>
        </SearchBox>
        <Typing />
      </Container>
    </HeroContainer>
  );
};

export default Hero;

/* <Button>Search</Button> */
