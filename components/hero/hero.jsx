import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Typing from "../typing/typing";

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

const Hero = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [placeholderText, setPlaceholder] = useState("Find Your Workcation...");

  const searchFunction = (e) => {
    e.preventDefault();

    if (searchQuery.length === 0) {
      setPlaceholder("Search Field can't be empty");
      setSearchError(true);
    } else {
      router.push(`/search?search=${encodeURI(searchQuery)}`);
    }
  };

  return (
    <HeroContainer>
      <Container>
        <SearchBox>
          <Heading>For life beyond a cubicle</Heading>
          <Text>India's most trusted community of Remote Workers!</Text>
          <SearchContainer onSubmit={searchFunction}>
            <Search
              type="text"
              value={searchQuery}
              placeholder={placeholderText}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              searchError={searchError}
            />
            <Button type="submit" value="Search" />
          </SearchContainer>
        </SearchBox>
        <Typing />
      </Container>
    </HeroContainer>
  );
};

export default Hero;

/* <Button>Search</Button> */
